# Generated by Django 5.1.6 on 2025-03-19 09:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booking', '0002_course_lecturetheatre_remove_lecture_theatre_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='lecturereservation',
            name='is_recurring',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='lecturereservation',
            name='recurrence_rule',
            field=models.CharField(blank=True, help_text='Recurrence rule in RRULE format (e.g., FREQ=WEEKLY;BYDAY=MO,WE;COUNT=30)', max_length=200),
        ),
    ]
