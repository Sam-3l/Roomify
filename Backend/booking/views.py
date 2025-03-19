from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly
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
