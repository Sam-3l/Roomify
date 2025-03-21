# Backend/booking/models.py

import logging
import datetime
from django.db import models, transaction
from django.core.exceptions import ValidationError
from django.utils import timezone
from dateutil.rrule import rrule, WEEKLY
from authentication.models import User
from .services import check_reservation_conflicts, get_occurrences

logger = logging.getLogger(__name__)

class Course(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=20, unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class LectureTheatre(models.Model):
    name = models.CharField(max_length=100)
    capacity = models.PositiveIntegerField()
    location = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.name

class LectureReservation(models.Model):
    course = models.ForeignKey(
        'Course', on_delete=models.CASCADE, related_name='reservations'
    )
    lecture_theatre = models.ForeignKey(
        'LectureTheatre', on_delete=models.CASCADE, related_name='reservations'
    )
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    reserved_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='lecture_reservations'
    )
    created_at = models.DateTimeField(auto_now_add=True)

    # Recurrence fields
    is_recurring = models.BooleanField(default=False)
    recurrence_rule = models.CharField(
        max_length=200,
        blank=True,
        help_text="Recurrence rule in RRULE format (e.g., FREQ=WEEKLY;BYDAY=MO,WE;COUNT=30)"
    )

    def clean(self):
        current_date = timezone.localdate()
        current_time = timezone.localtime().time()
        if self.date < current_date:
            raise ValidationError("Reservation date cannot be in the past.")
        elif self.date == current_date and self.start_time < current_time:
            raise ValidationError("Reservation start time must be in the future for today.")
        conflict_dates = check_reservation_conflicts(self)
        if conflict_dates:
            conflict_str = ", ".join([d.strftime("%Y-%m-%d") for d in conflict_dates])
            raise ValidationError(f"Conflict detected on the following date(s): {conflict_str}")

    def save(self, *args, **kwargs):
        with transaction.atomic():
            self.clean()
            super().save(*args, **kwargs)

    def get_occurrences(self):
        return get_occurrences(self)

    def __str__(self):
        return f"{self.course.name} on {self.date} in {self.lecture_theatre.name}"
