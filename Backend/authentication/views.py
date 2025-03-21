from django.conf import settings
from django.shortcuts import redirect
from django.core.signing import TimestampSigner, SignatureExpired, BadSignature
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.core.mail import send_mail
import logging

logger = logging.getLogger(__name__)

@method_decorator(csrf_exempt, name='dispatch')
class EmailConfirmView(APIView):
    """
    Exempt from CSRF and open to unauthenticated users for email confirmation.
    """
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        key = kwargs.get("key", "")
        signer = TimestampSigner()
        try:
            email = signer.unsign(key, max_age=86400)
        except SignatureExpired:
            logger.error(f"Verification link expired for token: {key}")
            return redirect(f"{settings.FRONTEND_DOMAIN}verify-email/error/?msg=expired")
        except BadSignature:
            logger.error(f"Invalid verification signature for token: {key}")
            return redirect(f"{settings.FRONTEND_DOMAIN}verify-email/error/?msg=invalid")
        
        from .models import User
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            logger.error(f"User with email {email} does not exist.")
            return redirect(f"{settings.FRONTEND_DOMAIN}verify-email/error/?msg=user_not_found")
        
        if not getattr(user, 'is_verified', False):
            user.is_verified = True
            user.save()
            logger.info(f"User {email} verified successfully.")
        else:
            logger.info(f"User {email} was already verified.")
        return redirect(f"{settings.FRONTEND_DOMAIN}verify-email/success")

def password_reset_view(request, *args, **kwargs):
    uidb64 = kwargs.get("uidb64", "")
    key = kwargs.get("key", "")
    logger.info(f"Password reset requested for uidb64: {uidb64}")
    return redirect(f"{settings.FRONTEND_DOMAIN}reset-password/{uidb64}/{key}/")

def generate_verification_token(user):
    signer = TimestampSigner()
    token = signer.sign(user.email)
    return token

class DashboardView(APIView):
    """
    Returns a role-specific dashboard view.
    """
    from rest_framework.permissions import IsAuthenticated
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        dashboard = {"role": user.role}
        if user.role in ['student', 'class_rep']:
            dashboard.update({
                "message": "Welcome, student! Here are your upcoming reservations and attendance history.",
                "upcoming_reservations": [],
                "attendance_history": [],
            })
        elif user.role == 'lecturer':
            dashboard.update({
                "message": "Welcome, lecturer! Manage your room reservations and track student attendance here.",
                "reservations_to_manage": [],
            })
        elif user.role == 'admin':
            dashboard.update({
                "message": "Welcome, admin! Oversee the system and manage users.",
                "system_overview": {},
            })
        else:
            dashboard.update({
                "message": "Welcome! Your role is not specifically configured.",
            })
        return Response(dashboard)

class ResendVerificationEmailView(APIView):
    """
    Allows authenticated users to request a new email verification link.
    """
    from rest_framework.permissions import IsAuthenticated
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        if user.is_verified:
            return Response({"detail": "Your email is already verified."})
        token = generate_verification_token(user)
        verification_url = f"{settings.FRONTEND_DOMAIN}verify-email/{token}/"
        send_mail(
            subject="Verify Your Email",
            message=f"Please verify your email by clicking the following link: {verification_url}",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[user.email],
            fail_silently=False,
        )
        return Response({"detail": "Verification email resent."})

class NotFoundView(APIView):
    def get(self, request):
        from django.http import HttpResponseNotFound
        return HttpResponseNotFound("Page not found.")
