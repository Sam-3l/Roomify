# booking/models.py

from django.db import models
from django.contrib.auth.models import User
from recurrence.fields import RecurrenceField

class Room(models.Model):
    name = models.CharField(max_length=100)
    capacity = models.IntegerField()
    location = models.CharField(max_length=200)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name

class TimeTable(models.Model):
    """
    Represents a recurring course slot.
    - `start_time` and `end_time` define the slot time.
    - `recurrence` stores the recurrence rule (e.g., "RRULE:FREQ=WEEKLY;BYDAY=MO,WE").
    """
    course = models.CharField(max_length=200)
    room = models.ForeignKey(Room, on_delete=models.CASCADE, related_name='timetables')
    start_time = models.TimeField()
    end_time = models.TimeField()
    recurrence = RecurrenceField(null=True, blank=True)

    class Meta:
        ordering = ['start_time']

    def __str__(self):
        return f"{self.course} in {self.room.name}"

class Booking(models.Model):
    """
    A booking ties a user to a specific occurrence (date) of a recurring timetable.
    """
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('cancelled', 'Cancelled'),
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bookings')
    timetable = models.ForeignKey(TimeTable, on_delete=models.CASCADE, related_name='bookings')
    # The specific date the user is booking – must be one of the valid dates from the recurrence
    occurrence_date = models.DateField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('timetable', 'occurrence_date')
        ordering = ['occurrence_date']  # Ensures bookings are ordered by date


    def __str__(self):
        return f"{self.timetable.course} on {self.occurrence_date} by {self.user.username}"
