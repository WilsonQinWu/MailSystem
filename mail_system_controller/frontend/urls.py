from django.urls import path
from .views import index


urlpatterns = [
    path('', index),
    path('auth', index),
    path('auth/login', index),
    path('dashboard', index),
    path('error', index),
]
