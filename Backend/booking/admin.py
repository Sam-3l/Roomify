# booking/admin.py

from django.contrib import admin
from .models import Room, TimeTable, Booking

@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    list_display = ('name', 'capacity', 'location')
    search_fields = ('name', 'location')

@admin.register(TimeTable)
class TimeTableAdmin(admin.ModelAdmin):
    list_display = ('course', 'room', 'start_time', 'end_time')
    list_filter = ('room',)
    search_fields = ('course', 'room__name')

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('timetable', 'occurrence_date', 'user', 'status', 'created_at')
    list_filter = ('status', 'occurrence_date')
    search_fields = ('timetable__course', 'user__username')
