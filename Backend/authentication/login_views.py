from dj_rest_auth.views import LoginView
from django.conf import settings
from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework import status
from .views import generate_verification_token  # Ensure this helper exists in your project

class CustomLoginView(LoginView):
    """
    Extends the default login view to enforce email verification.
    
    After a successful login, if the user's email is not verified,
    a verification token is generated and an email is sent to the user
    with instructions to verify their email address. An error response
    is returned, preventing full access until verification is complete.
    """
    def post(self, request, *args, **kwargs):
        # Perform the standard authentication via dj-rest-auth.
        response = super().post(request, *args, **kwargs)
        
        # Retrieve the authenticated user (dj-rest-auth sets self.user).
        user = self.user
        
        # Check if the user's email is verified. If not, send a verification email.
        if not getattr(user, 'is_verified', False):
            # Generate a signed token for email verification.
            token = generate_verification_token(user)
            # Build the verification URL that points to your frontend.
            verification_url = f"{settings.FRONTEND_DOMAIN}verify-email/{token}/"
            
            # Send the verification email (ensure your email settings are configured).
            send_mail(
                subject="Verify Your Email",
                message=f"Please verify your email by clicking on the following link: {verification_url}",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[user.email],
                fail_silently=False,
            )
            
            # Return an error response prompting the user to verify their email.
            return Response(
                {"detail": "Your email is not verified. A verification email has been sent to your address."},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # If the email is verified, proceed with the normal login response.
        return response
