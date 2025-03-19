from django.urls import path
from . import views


urlpatterns = [
    path("registration/account-confirm-email/<str:key>/", views.verify_email_view, name="email-verification"), 
    path("registration/account-email-verification-sent/", views.NotFoundView().as_view(), name="not-found"),
    path("reset/<int:uidb64>/<str:key>/", views.password_reset_view, name="password_reset_confirm"),
]