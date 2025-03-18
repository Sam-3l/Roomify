# booking/serializers.py

import datetime
from rest_framework import serializers
from .models import Room, TimeTable, Booking

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'

class RecurrenceSerializerField(serializers.Field):
    """
    This field handles the recurrence rule as a string.
    """
    def to_representation(self, value):
        if not value:
            return None
        return str(value)

    def to_internal_value(self, data):
        if not data:
            return None
        if isinstance(data, str):
            return data
        raise serializers.ValidationError("Expected a string for the recurrence rule.")

class TimeTableSerializer(serializers.ModelSerializer):
    room = RoomSerializer(read_only=True)
    room_id = serializers.PrimaryKeyRelatedField(queryset=Room.objects.all(), source='room', write_only=True)
    recurrence = RecurrenceSerializerField()
    # Compute occurrences for the next 7 days
    occurrences = serializers.SerializerMethodField()

    class Meta:
        model = TimeTable
        fields = ('id', 'course', 'room', 'room_id', 'start_time', 'end_time', 'recurrence', 'occurrences')

    def get_occurrences(self, obj):
        today = datetime.date.today()
        end_date = today + datetime.timedelta(days=7)
        start_dt = datetime.datetime.combine(today, obj.start_time)
        end_dt = datetime.datetime.combine(end_date, obj.end_time)
        try:
            occs = list(obj.recurrence.occurrences(start_dt, end_dt))
        except Exception:
            return []
        # Exclude today's occurrence if it has already passed
        now = datetime.datetime.now()
        valid_occurrences = []
        for occ in occs:
            occ_date = occ.date()
            if occ_date == today and occ < now:
                continue
            valid_occurrences.append(occ_date.strftime("%d-%m-%Y"))
        return valid_occurrences

class BookingSerializer(serializers.ModelSerializer):
    timetable = TimeTableSerializer(read_only=True)
    timetable_id = serializers.PrimaryKeyRelatedField(queryset=TimeTable.objects.all(), source='timetable', write_only=True)
    occurrence_date = serializers.DateField(format="%d-%m-%Y")

    class Meta:
        model = Booking
        fields = ('id', 'user', 'timetable', 'timetable_id', 'occurrence_date', 'status', 'created_at')
        read_only_fields = ('user', 'created_at')

    def validate(self, data):
        timetable = data.get('timetable')
        occurrence_date = data.get('occurrence_date')
        if timetable and timetable.recurrence:
            # Define the window: from today to 7 days ahead
            today = datetime.date.today()
            end_date = today + datetime.timedelta(days=7)
            start_dt = datetime.datetime.combine(today, timetable.start_time)
            end_dt = datetime.datetime.combine(end_date, timetable.end_time)
            occurrences = list(timetable.recurrence.occurrences(start_dt, end_dt))
            valid_dates = [occ.date() for occ in occurrences if not (occ.date() == today and occ < datetime.datetime.now())]
            if occurrence_date not in valid_dates:
                raise serializers.ValidationError("The selected occurrence_date is not valid based on the timetable recurrence pattern.")
        return data
