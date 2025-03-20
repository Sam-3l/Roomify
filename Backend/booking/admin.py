# Backend/booking/admin.py

from django.contrib import admin
from .models import Course, LectureTheatre, LectureReservation

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('name', 'code')
    search_fields = ('name', 'code')

@admin.register(LectureTheatre)
class LectureTheatreAdmin(admin.ModelAdmin):
    list_display = ('name', 'capacity', 'location')
    search_fields = ('name', 'location')

@admin.register(LectureReservation)
class LectureReservationAdmin(admin.ModelAdmin):
    list_display = ('course', 'lecture_theatre', 'date', 'start_time', 'end_time', 'reserved_by')
    list_filter = ('date', 'lecture_theatre', 'course')
    search_fields = ('course__name', 'lecture_theatre__name', 'reserved_by__username')
    ordering = ('date', 'start_time')

    def save_model(self, request, obj, form, change):
        if not obj.reserved_by:
            obj.reserved_by = request.user
        super().save_model(request, obj, form, change)
