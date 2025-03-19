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
    # Date of the first occurrence
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
        # Validate overlapping for the first occurrence only.
        overlapping = LectureReservation.objects.filter(
            lecture_theatre=self.lecture_theatre,
            date=self.date
        ).exclude(pk=self.pk).filter(
            start_time__lt=self.end_time,
            end_time__gt=self.start_time,
        )
        if overlapping.exists():
            raise ValidationError("This time slot overlaps with an existing reservation.")

    def get_occurrences(self):
        """
        Generate a list of occurrence dates based on the recurrence rule.
        If not recurring, returns a list with just the base date.
        """
        if not self.is_recurring or not self.recurrence_rule:
            return [self.date]
        # Parse recurrence rule. Example: "FREQ=WEEKLY;BYDAY=MO,WE;COUNT=30"
        rule_params = {}
        for param in self.recurrence_rule.split(';'):
            key, value = param.split('=')
            rule_params[key] = value

        count = int(rule_params.get('COUNT')) if 'COUNT' in rule_params else None

        if 'BYDAY' in rule_params:
            byday = rule_params['BYDAY'].split(',')
            # Map two-letter weekday codes to dateutil weekday constants (0=Monday, 6=Sunday)
            weekday_map = {'MO': 0, 'TU': 1, 'WE': 2, 'TH': 3, 'FR': 4, 'SA': 5, 'SU': 6}
            byweekday = [weekday_map[day] for day in byday if day in weekday_map]
        else:
            byweekday = None

        freq = rule_params.get('FREQ', 'WEEKLY')
        if freq != 'WEEKLY':
            raise NotImplementedError("Only WEEKLY recurrence is supported at this time.")

        # Create a datetime combining the date and start_time
        dtstart = datetime.datetime.combine(self.date, self.start_time)
        rule = rrule(
            freq=WEEKLY,
            dtstart=dtstart,
            count=count,
            byweekday=byweekday
        )
        occurrences = [occurrence.date() for occurrence in rule]
        return occurrences

    def save(self, *args, **kwargs):
        # Validate before saving
        self.clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.course.name} on {self.date} in {self.lecture_theatre.name}"
