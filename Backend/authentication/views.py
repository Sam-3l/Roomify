from django.conf import settings
from django.shortcuts import redirect
from django.http import HttpResponseBadRequest, HttpResponseNotFound
from django.core.signing import TimestampSigner, SignatureExpired, BadSignature
from rest_framework.views import APIView
import logging
import time

logger = logging.getLogger(__name__)

def verify_email_view(request, *args, **kwargs):
    """
    Verifies the user's email using a signed token.
    The token should contain the user's email address.
    If valid, marks the user as verified.
    Redirects to a frontend success or error page without exposing the token.
    """
    key = kwargs.get("key", "")
    signer = TimestampSigner()
    try:
        # Unsign the token; valid for 24 hours (86400 seconds)
        email = signer.unsign(key, max_age=86400)
    except SignatureExpired:
        logger.error("Verification link expired for token: %s", key)
        return redirect(f"{settings.FRONTEND_DOMAIN}verify-email/error/?msg=expired")
    except BadSignature:
        logger.error("Invalid verification signature for token: %s", key)
        return redirect(f"{settings.FRONTEND_DOMAIN}verify-email/error/?msg=invalid")

    from .models import User
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        logger.error("User with email %s does not exist.", email)
        return redirect(f"{settings.FRONTEND_DOMAIN}verify-email/error/?msg=user_not_found")

    if not getattr(user, 'is_verified', False):
        user.is_verified = True
        user.save()
        logger.info("User %s verified successfully.", email)
    else:
        logger.info("User %s was already verified.", email)

    # Redirect to a frontend success page to prevent token exposure.
    return redirect(f"{settings.FRONTEND_DOMAIN}verify-email/success")


def password_reset_view(request, *args, **kwargs):
    """
    Redirects to the frontend password reset page.
    """
    uidb64 = kwargs.get("uidb64", "")
    key = kwargs.get("key", "")
    logger.info("Password reset requested for uidb64: %s", uidb64)
    return redirect(f"{settings.FRONTEND_DOMAIN}reset-password/{uidb64}/{key}/")


class NotFoundView(APIView):
    def get(self, request):
        return HttpResponseNotFound("Page not found.")


def generate_verification_token(user):
    """
    Generates a signed token for email verification using the user's email.
    The token is valid for 24 hours.
    """
    signer = TimestampSigner()
    token = signer.sign(user.email)
    return token
