from django.conf import settings
from django.shortcuts import redirect
from django.core.signing import TimestampSigner, SignatureExpired, BadSignature
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.utils.timezone import localdate
from django.urls import reverse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.core.mail import send_mail
import logging

logger = logging.getLogger(__name__)

@method_decorator(csrf_exempt, name='dispatch')
class EmailConfirmView(APIView):
    """
    Open to unauthenticated users for email confirmation.
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

    def get(self, request, *args, **kwargs):
        # Allow GET requests for email confirmation as well.
        return self.post(request, *args, **kwargs)

def password_reset_view(request, *args, **kwargs):
    uidb64 = kwargs.get("uidb64", "")
    key = kwargs.get("key", "")
    logger.info(f"Password reset requested for uidb64: {uidb64}")
    return redirect(f"{settings.FRONTEND_DOMAIN}reset-password/{uidb64}/{key}/")

def generate_verification_token(user):
    signer = TimestampSigner()
    token = signer.sign(user.email)
    return token

class AdminDashboardView(APIView):
    """
    Comprehensive admin dashboard displaying detailed system information.
    Provides:
      - Overall system statistics (total users, reservations, courses, theatres)
      - A breakdown of reservations per course and total occurrences per course
      - Detailed list of upcoming reservations (including recurrence and occurrences)
      - Detailed recent user registrations
      - Dynamic management links using URL reversing with a namespace
      - Extra meta information such as the current system date.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        from booking.models import LectureReservation, Course, LectureTheatre
        from authentication.models import User

        # Basic counts
        total_users = User.objects.count()
        total_reservations = LectureReservation.objects.count()
        total_courses = Course.objects.count()
        total_theatres = LectureTheatre.objects.count()

        # Breakdown: reservations per course and occurrences per course
        reservations_by_course = {}
        occurrences_by_course = {}
        for course in Course.objects.all():
            reservations = LectureReservation.objects.filter(course=course)
            reservations_by_course[course.name] = reservations.count()
            occurrences_by_course[course.name] = sum(len(res.get_occurrences()) for res in reservations)

        # Detailed upcoming reservations
        upcoming_reservations = LectureReservation.objects.filter(date__gte=localdate()).order_by('date')
        detailed_reservations = []
        for res in upcoming_reservations:
            detailed_reservations.append({
                "course": res.course.name,
                "reserved_by": res.reserved_by.email,
                "date": res.date,
                "start_time": res.start_time,
                "end_time": res.end_time,
                "lecture_theatre": res.lecture_theatre.name,
                "recurrence_rule": res.recurrence_rule,
                "occurrences": res.get_occurrences(),
                "created_at": res.created_at,
            })

        # Detailed recent users (last 10 registrations)
        recent_users = User.objects.order_by('-id')[:10]
        detailed_users = []
        for u in recent_users:
            detailed_users.append({
                "email": u.email,
                "first_name": u.first_name,
                "last_name": u.last_name,
                "role": u.role,
                "is_verified": u.is_verified,
            })

        # Dynamic management links using namespacing
        management_links = {
            "manage_users": reverse("admin_api:users-list"),
            # Additional links can be added once other viewsets are registered.
        }

        dashboard = {
            "role": "admin",
            "message": "Welcome, admin! Here are the detailed system metrics.",
            "overview": {
                "total_users": total_users,
                "total_reservations": total_reservations,
                "total_courses": total_courses,
                "total_lecture_theatres": total_theatres,
                "reservations_by_course": reservations_by_course,
                "occurrences_by_course": occurrences_by_course,
            },
            "detailed_reservations": detailed_reservations,
            "detailed_users": detailed_users,
            "management_links": management_links,
            "meta": {
                "system_date": str(localdate()),
            },
        }
        return Response(dashboard)

class GenericDashboardView(APIView):
    """
    Generic dashboard for lecturers and students (including class reps).
    - Students/Class Reps see upcoming reservations (and attendance history placeholder).
    - Lecturers see their reservations and a placeholder for tracking student attendance.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        dashboard = {"role": user.role}

        if user.role in ['student', 'class_rep']:
            from booking.models import LectureReservation
            upcoming = LectureReservation.objects.filter(reserved_by=user, date__gte=localdate()).order_by('date')
            dashboard.update({
                "message": "Welcome! Book lecture halls and check your attendance history.",
                "upcoming_reservations": [
                    {
                        "course": res.course.name,
                        "date": res.date,
                        "start_time": res.start_time,
                        "end_time": res.end_time,
                        "lecture_theatre": res.lecture_theatre.name,
                        "occurrences": res.get_occurrences(),
                    }
                    for res in upcoming
                ],
                "attendance_history": []  # Replace with actual attendance data when available.
            })
        elif user.role == 'lecturer':
            from booking.models import LectureReservation
            upcoming = LectureReservation.objects.filter(reserved_by=user, date__gte=localdate()).order_by('date')
            dashboard.update({
                "message": "Welcome! Manage your reservations and track student attendance.",
                "reservations_to_manage": [
                    {
                        "course": res.course.name,
                        "date": res.date,
                        "start_time": res.start_time,
                        "end_time": res.end_time,
                        "lecture_theatre": res.lecture_theatre.name,
                        "occurrences": res.get_occurrences(),
                    }
                    for res in upcoming
                ],
                "student_attendance": []  # Replace with actual data when available.
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
