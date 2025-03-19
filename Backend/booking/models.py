from django.db import models
from django.core.exceptions import ValidationError
import datetime
from dateutil.rrule import rrule, WEEKLY

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
        Course, on_delete=models.CASCADE, related_name='reservations'
    )
    lecture_theatre = models.ForeignKey(
        LectureTheatre, on_delete=models.CASCADE, related_name='reservations'
    )
    # Base date of the first occurrence
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    reserved_by = models.ForeignKey(
        'auth.User', on_delete=models.CASCADE, related_name='lecture_reservations'
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
        """
        Validate that this reservation (and its generated occurrences, if recurring)
        do not overlap with any existing reservation.
        """
        if not self.is_recurring:
            # For one-time reservations, only check on the base date.
            overlapping = LectureReservation.objects.filter(
                lecture_theatre=self.lecture_theatre,
                date=self.date
            ).exclude(pk=self.pk).filter(
                start_time__lt=self.end_time,
                end_time__gt=self.start_time,
            )
            if overlapping.exists():
                raise ValidationError("This time slot overlaps with an existing reservation on the selected date.")
        else:
            # For recurring reservations, check each occurrence.
            self.check_conflicts_for_occurrences()

    def get_occurrences(self):
        """
        Returns a list of dates on which this reservation occurs.
        For non-recurring reservations, returns a list with only the base date.
        For recurring reservations, uses the recurrence_rule to generate dates.
        """
        if not self.is_recurring or not self.recurrence_rule:
            return [self.date]

        rule_params = {}
        for param in self.recurrence_rule.split(';'):
            key, value = param.split('=')
            rule_params[key] = value

        count = int(rule_params.get('COUNT')) if 'COUNT' in rule_params else None

        if 'BYDAY' in rule_params:
            byday = rule_params['BYDAY'].split(',')
            # Map two-letter weekday codes to dateutil weekday numbers (0=Monday, 6=Sunday)
            weekday_map = {'MO': 0, 'TU': 1, 'WE': 2, 'TH': 3, 'FR': 4, 'SA': 5, 'SU': 6}
  
