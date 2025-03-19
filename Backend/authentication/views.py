from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from django.http import HttpResponseNotFound
from django.shortcuts import redirect
from django.conf import settings

from .models import User

def verify_email_view(request, *args, **kwargs):
    """
    View accessed from URL send to the email
    Redirects to frontend url `/verify-email/<key>` passing token information in url params
    Frontend gets key/token from param and posts to `verify-email/` endpoint
    Email is verified on successful status.
    """
    key = kwargs.get("key", "")
    return redirect(f"{settings.FRONTEND_DOMAIN}verify-email/{key}/")

def password_reset_view(request, *args, **kwargs):
    """
    View accessed from URL send to the email for password reset
    Redirects to frontend url `/reset-password/<uid>/<key>` passing id and token information in url params
    Frontend gets id and key/token from param and posts to `password/reset/` endpoint along with new password on password reset
    Password is then reset on successful status.
    """
    uidb64 = kwargs.get("uidb64", "")
    key = kwargs.get("key", "")
    return redirect(f"{settings.FRONTEND_DOMAIN}reset-password/{uidb64}/{key}/")

class NotFoundView(APIView):
    def get(self, request):
        return HttpResponseNotFound()