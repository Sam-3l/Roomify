from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, LectureTheatreViewSet, LectureReservationViewSet

router = DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'theatres', LectureTheatreViewSet)
router.register(r'reservations', LectureReservationViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
