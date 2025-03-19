import datetime
from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Course, LectureTheatre, LectureReservation
from .serializers import CourseSerializer, LectureTheatreSerializer, LectureReservationSerializer
from .permissions import IsAdminOrFaculty, IsOwnerOrAdmin

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class LectureTheatreViewSet(viewsets.ModelViewSet):
    queryset = LectureTheatre.objects.all()
    serializer_class = LectureTheatreSerializer

class LectureReservationViewSet(viewsets.ModelViewSet):
    queryset = LectureReservation.objects.all()
    serializer_class = LectureReservationSerializer
    permission_classes = [IsAuthenticatedOrReadOnly, IsAdminOrFaculty, IsOwnerOrAdmin]
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['lecture_theatre', 'date', 'course']
    ordering_fields = ['date', 'start_time']

    def perform_create(self, serializer):
        serializer.save(reserved_by=self.request.user)

    @action(detail=False, methods=['get'], url_path='calendar')
    def calendar(self, request):
        """
        Returns a list of reservation events in a calendar-friendly format.
        Accepts optional query parameters:
          - lecture_theatre: theatre ID to filter by.
          - start: ISO date string (inclusive)
          - end: ISO date string (inclusive)
        """
        theatre_id = request.query_params.get('lecture_theatre')
        start_date_str = request.query_params.get('start')
        end_date_str = request.query_params.get('end')

        qs = self.get_queryset()
        if theatre_id:
            qs = qs.filter(lecture_theatre_id=theatre_id)

        events = []
        # Iterate through reservations and generate events for each occurrence
        for reservation in qs:
            try:
                occ_dates = reservation.get_occurrences()
            except Exception:
                occ_dates = [reservation.date]

            for occ_date in occ_dates:
                # Apply date filters if provided.
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
                    "reserved_by": reservation.reserved_by.username,
                }
                events.append(event)

        return Response(events)
