# Backend/booking/tests.py

import datetime
import pytz
from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from django.contrib.auth.models import User
from .models import Room, TimeTable, Booking

class TimeTableOccurrencesAPITestCase(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.room = Room.objects.create(name='Lecture Theatre 1', capacity=100, location='Building A')
        now = datetime.datetime.now(pytz.utc)
        # Set a start time for the timetable slot (e.g., next Monday at 08:00)
        next_monday = now + datetime.timedelta(days=((0 - now.weekday() + 7) % 7 or 7))
        start_time = next_monday.replace(hour=8, minute=0, second=0, microsecond=0).time()
        end_time = next_monday.replace(hour=9, minute=0, second=0, microsecond=0).time()
        recurrence_rule = "RRULE:FREQ=WEEKLY;BYDAY=MO,WE"
        self.timetable = TimeTable.objects.create(
            course='CHM 101',
            room=self.room,
            start_time=start_time,
            end_time=end_time,
            recurrence=recurrence_rule
        )
        self.client = APIClient()
        self.client.login(username='testuser', password='testpass')

    def test_occurrences_endpoint(self):
        url = reverse('timetable-occurrences', args=[self.timetable.id])
        # Define a date range covering 14 days from now
        start_range = (datetime.datetime.now(pytz.utc) - datetime.timedelta(days=1)).date().isoformat()
        end_range = (datetime.datetime.now(pytz.utc) + datetime.timedelta(days=14)).date().isoformat()
        response = self.client.get(url, {'start': start_range, 'end': end_range})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        data = response.data
        self.assertIn('occurrences', data)
        self.assertTrue(len(data['occurrences']) > 0)

    def test_create_booking_valid_occurrence(self):
        url = reverse('booking-list')
        # Pick a valid occurrence date from the recurrence rule. For example, next Monday:
        valid_date = self.timetable.recurrence.occurrences(datetime.datetime.now(pytz.utc) - datetime.timedelta(days=1),
                                                            datetime.datetime.now(pytz.utc) + datetime.timedelta(days=7))[0].date()
        data = {
            'timetable_id': self.timetable.id,
            'occurrence_date': valid_date.isoformat(),
            'status': 'confirmed'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Booking.objects.count(), 1)
        booking = Booking.objects.first()
        self.assertEqual(booking.user, self.user)

    def test_create_booking_invalid_occurrence(self):
        url = reverse('booking-list')
        # Choose an invalid date (e.g., a day not in the recurrence rule)
        invalid_date = (datetime.date.today() + datetime.timedelta(days=2)).isoformat()
        data = {
            'timetable_id': self.timetable.id,
            'occurrence_date': invalid_date,
            'status': 'confirmed'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
