# booking/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.permissions import AllowAny
from .views import RoomViewSet, TimeTableViewSet, BookingViewSet, TimeTableOccurrencesView

class PublicRootRouter(DefaultRouter):
    def get_root_view(self):
        root_view = super().get_root_view()
        root_view.cls.permission_classes = [AllowAny]
        return root_view

router = PublicRootRouter()
router.register(r'rooms', RoomViewSet, basename='room')
router.register(r'timetable', TimeTableViewSet, basename='timetable')
router.register(r'bookings', BookingViewSet, basename='booking')

urlpatterns = [
    path('', include(router.urls)),
    path('timetable/<int:pk>/occurrences/', TimeTableOccurrencesView.as_view(), name='timetable-occurrences'),
]
