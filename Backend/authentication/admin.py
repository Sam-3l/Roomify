# Backend/authentication/admin.py

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

class CustomUserAdmin(UserAdmin):
    """Custom admin panel to manage users using email."""
    model = User
    list_display = ("email", "first_name", "last_name", "role", "is_staff", "is_active")
    search_fields = ("email", "first_name", "last_name", "role")
    ordering = ("email",)
    fieldsets = (
        (None, {"fields": ("email", "username", "password")}),
        ("Personal Info", {"fields": ("first_name", "last_name", "role", "is_verified")}),
        ("Permissions", {"fields": ("is_staff", "is_active", "is_superuser", "groups", "user_permissions")}),
    )
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("email", "role", "password1", "password2", "is_staff", "is_active"),
        }),
    )

admin.site.register(User, CustomUserAdmin)
