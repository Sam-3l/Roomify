# booking/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RoomViewSet, TimeTableViewSet, BookingViewSet, TimeTableOccurrencesView

router = DefaultRouter()
router.register(r'rooms', RoomViewSet, basename='room')
router.register(r'timetable', TimeTableViewSet, basename='timetable')
router.register(r'bookings', BookingViewSet, basename='booking')

urlpatterns = [
    path('', include(router.urls)),
    path('timetable/<int:pk>/occurrences/', TimeTableOccurrencesView.as_view(), name='timetable-occurrences'),
]
