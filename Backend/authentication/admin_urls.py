from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .admin_views import UserManagementViewSet

router = DefaultRouter()
router.register(r'users', UserManagementViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
