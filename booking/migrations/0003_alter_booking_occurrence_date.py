# Generated by Django 5.1.6 on 2025-03-18 13:24

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booking', '0002_remove_timetable_end_datetime_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='occurrence_date',
            field=models.DateField(default=datetime.date.today),
        ),
    ]
