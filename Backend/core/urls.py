from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # admin
    path('admin/', admin.site.urls),

    # core apis
    path('', include('booking.urls')),

    # auth
    path('api/auth/', include('authentication.urls')),
    path('api/auth/', include('dj_rest_auth.urls')),
    path('api/auth/registration/', include('dj_rest_auth.registration.urls')),

    # docs
    path('docs/', include('urecover.swagger_urls')),
