# Generated by Django 5.1.6 on 2025-03-18 13:11

import django.db.models.deletion
import recurrence.fields
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('capacity', models.IntegerField()),
                ('location', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='TimeTable',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course', models.CharField(max_length=200)),
                ('start_datetime', models.DateTimeField()),
                ('end_datetime', models.DateTimeField()),
                ('recurrence', recurrence.fields.RecurrenceField(blank=True, null=True)),
                ('room', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='timetables', to='booking.room')),
            ],
        ),
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('occurrence_date', models.DateField()),
                ('status', models.CharField(choices=[('pending', 'Pending'), ('confirmed', 'Confirmed'), ('cancelled', 'Cancelled')], default='pending', max_length=10)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='bookings', to=settings.AUTH_USER_MODEL)),
                ('timetable', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='bookings', to='booking.timetable')),
            ],
            options={
                'unique_together': {('timetable', 'occurrence_date')},
            },
        ),
    ]
