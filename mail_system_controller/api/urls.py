from django.urls import path
from .views import RoleView, CreateRoleView


urlpatterns = [
    path('role', RoleView.as_view()),
    path('role/create', CreateRoleView.as_view())
]
