from rest_framework import serializers
from .models import Course, LectureTheatre, LectureReservation

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class LectureTheatreSerializer(serializers.ModelSerializer):
    class Meta:
        model = LectureTheatre
        fields = '__all__'

class LectureReservationSerializer(serializers.ModelSerializer):
    occurrences = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = LectureReservation
        fields = '__all__'

    def get_occurrences(self, obj):
        return obj.get_occurrences()

    def validate(self, data):
        # Create temporary instance for validation.
        instance = LectureReservation(**data)
        if self.instance:
            instance.pk = self.instance.pk
        instance.clean()  # This will raise ValidationError if there is an overlap.
        return data
