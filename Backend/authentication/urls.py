from django.urls import path
from . import views, login_views

urlpatterns = [
    path('login/', login_views.CustomLoginView.as_view(), name='login'),
    # Use EmailConfirmView for email confirmation (CSRF exempt)
    path("registration/account-confirm-email/<str:key>/", views.EmailConfirmView.as_view(), name="email-verification"), 
    path("registration/account-email-verification-sent/", views.NotFoundView.as_view(), name="not-found"),
    path("reset/<int:uidb64>/<str:key>/", views.password_reset_view, name="password_reset_confirm"),
    path('dashboard/', views.DashboardView.as_view(), name='dashboard'),
    path('resend-verification/', views.ResendVerificationEmailView.as_view(), name='resend-verification'),
]
