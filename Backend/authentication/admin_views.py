from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser
from .models import User
from .serializers import AppUserDetailsSerializer

class UserManagementViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('id')
    serializer_class = AppUserDetailsSerializer
    permission_classes = [IsAdminUser]
