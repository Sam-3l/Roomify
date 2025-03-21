# Backend/authentication/login_views.py

from dj_rest_auth.views import LoginView
from django.conf import settings
from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework import status
from rest_framework.throttling import UserRateThrottle
from .views import generate_verification_token
import logging

logger = logging.getLogger(__name__)

class LoginRateThrottle(UserRateThrottle):
    rate = '5/min'  # Allow 5 login attempts per minute

class CustomLoginView(LoginView):
    throttle_classes = [LoginRateThrottle]

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        user = self.user
        logger.info(f"User {user.email} attempted login.")
        
        if not getattr(user, 'is_verified', False):
            token = generate_verification_token(user)
            verification_url = f"{settings.FRONTEND_DOMAIN}verify-email/{token}/"
            send_mail(
                subject="Verify Your Email",
                message=f"Please verify your email by clicking on the following link: {verification_url}",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[user.email],
                fail_silently=False,
            )
            logger.warning(f"User {user.email} is not verified. Verification email sent.")
            return Response(
                {"detail": "Your email is not verified. A verification email has been sent to your address."},
                status=status.HTTP_400_BAD_REQUEST
            )
        return response
