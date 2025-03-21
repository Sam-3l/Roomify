# Backend/authentication/admin_urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .admin_views import UserManagementViewSet

app_name = 'admin_api'  # Namespace for admin API URLs

router = DefaultRouter()
router.register(r'users', UserManagementViewSet, basename="users")

urlpatterns = [
    path('', include(router.urls)),
]
