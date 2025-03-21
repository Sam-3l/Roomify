# Backend/booking/services.py

import datetime
from dateutil.rrule import rrule, WEEKLY

def get_occurrences(instance):
    """
    Returns a list of dates for the reservation.
    For non-recurring reservations, returns a list with the base date.
    For recurring reservations, generates dates based on the recurrence_rule.
    """
    if not instance.is_recurring or not instance.recurrence_rule:
        return [instance.date]
    rule_params = {}
    for param in instance.recurrence_rule.split(';'):
        key, value = param.split('=')
        rule_params[key] = value
    count = int(rule_params.get('COUNT')) if 'COUNT' in rule_params else None
    if 'BYDAY' in rule_params:
        byday = rule_params['BYDAY'].split(',')
        weekday_map = {'MO': 0, 'TU': 1, 'WE': 2, 'TH': 3, 'FR': 4, 'SA': 5, 'SU': 6}
        byweekday = [weekday_map[day] for day in byday if day in weekday_map]
    else:
        byweekday = None
    freq = rule_params.get('FREQ', 'WEEKLY')
    if freq != 'WEEKLY':
        raise NotImplementedError("Only WEEKLY recurrence is supported.")
    dtstart = datetime.datetime.combine(instance.date, instance.start_time)
    rule = rrule(freq=WEEKLY, dtstart=dtstart, count=count, byweekday=byweekday)
    occurrences = [occurrence.date() for occurrence in rule]
    return occurrences

def check_reservation_conflicts(instance):
    """
    Checks for overlapping reservations on each occurrence date.
    Returns a sorted list of conflict dates.
    """
    from .models import LectureReservation
    occurrences = get_occurrences(instance)
    conflict_dates = []
    for occ_date in occurrences:
        qs_on_date = LectureReservation.objects.filter(
            lecture_theatre=instance.lecture_theatre,
            date=occ_date,
            is_recurring=False
        ).exclude(pk=instance.pk).filter(
            start_time__lt=instance.end_time,
            end_time__gt=instance.start_time,
        )
        if qs_on_date.exists():
            conflict_dates.append(occ_date)
        qs_recurring = LectureReservation.objects.filter(
            lecture_theatre=instance.lecture_theatre,
            is_recurring=True
        ).exclude(pk=instance.pk)
        for other in qs_recurring:
            try:
                other_occurrences = get_occurrences(other)
            except Exception:
                other_occurrences = []
            if occ_date in other_occurrences:
                if other.start_time < instance.end_time and other.end_time > instance.start_time:
                    conflict_dates.append(occ_date)
    return sorted(set(conflict_dates))
