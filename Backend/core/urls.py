# Backend/core/urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # admin
    path('admin/', admin.site.urls),

    # core apis
    path('api/', include('booking.urls')),

    # auth
    path('auth/', include('authentication.urls')),
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/registration/', include('dj_rest_auth.registration.urls')),

    # docs
    path('docs/', include('core.swagger_urls')),
]