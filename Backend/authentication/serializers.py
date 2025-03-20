# Backend/authentication/serializers.py

from dj_rest_auth.registration.serializers import RegisterSerializer
from dj_rest_auth.serializers import UserDetailsSerializer, LoginSerializer
from rest_framework.serializers import ModelSerializer, ValidationError
from django.contrib.auth.password_validation import validate_password

from .models import User

class RegistrationSerializer(RegisterSerializer, ModelSerializer):
    class Meta:
        model = User
        fields = ["first_name", "last_name", "email", "password1", "password2"]

    def validate_email(self, email):
        if User.objects.filter(email=email).exists():
            raise ValidationError("A user was found with this email.")
        return email

    def validate_password1(self, password):
        # Enforce strong password policy.
        validate_password(password)
        return password

    def save(self, request):
        user = super().save(request)
        user.first_name = self.validated_data.get("first_name", "")
        user.last_name = self.validated_data.get("last_name", "")
        user.save()
        return user

class AppUserDetailsSerializer(UserDetailsSerializer, ModelSerializer):
    class Meta:
        model = User
        fields = ['pk', 'first_name', 'last_name', 'email', 'role']
        read_only_fields = ['pk', 'email']

class AppLoginSerializer(LoginSerializer, ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password']
