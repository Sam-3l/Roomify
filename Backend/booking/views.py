# Backend/booking/views.py

import datetime
import logging
from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Course, LectureTheatre, LectureReservation
from .serializers import CourseSerializer, LectureTheatreSerializer, LectureReservationSerializer

logger = logging.getLogger(__name__)

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all().order_by('name')
    serializer_class = CourseSerializer
    # Add permission_classes if needed.

class LectureTheatreViewSet(viewsets.ModelViewSet):
    queryset = LectureTheatre.objects.all().order_by('name')
    serializer_class = LectureTheatreSerializer
    # Add permission_classes if needed.

class LectureReservationViewSet(viewsets.ModelViewSet):
    queryset = LectureReservation.objects.all().order_by('date', 'start_time')
    serializer_class = LectureReservationSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['lecture_theatre', 'date', 'course']
    ordering_fields = ['date', 'start_time']

    def perform_create(self, serializer):
        serializer.save(reserved_by=self.request.user)

    @action(detail=False, methods=['get'], url_path='calendar')
    def calendar(self, request):
        theatre_id = request.query_params.get('lecture_theatre')
        start_date_str = request.query_params.get('start')
        end_date_str = request.query_params.get('end')

        qs = self.get_queryset()
        if theatre_id:
            qs = qs.filter(lecture_theatre_id=theatre_id)

        events = []
        for reservation in qs:
            try:
                occ_dates = reservation.get_occurrences()
            except Exception as e:
                logger.error(f"Error getting occurrences for reservation {reservation.id}: {e}")
                occ_dates = [reservation.date]

            for occ_date in occ_dates:
                if start_date_str:
                    start_date = datetime.date.fromisoformat(start_date_str)
                    if occ_date < start_date:
                        continue
                if end_date_str:
                    end_date = datetime.date.fromisoformat(end_date_str)
                    if occ_date > end_date:
                        continue

                event = {
                    "id": reservation.id,
                    "title": f"{reservation.course.name} in {reservation.lecture_theatre.name}",
                    "start": datetime.datetime.combine(occ_date, reservation.start_time).isoformat(),
                    "end": datetime.datetime.combine(occ_date, reservation.end_time).isoformat(),
                    "reserved_by": reservation.reserved_by.email,
                }
                events.append(event)
        return Response(events)
