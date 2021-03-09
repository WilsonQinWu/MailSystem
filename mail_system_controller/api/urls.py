from django.urls import path
from .views import RoleView, CreateRoleView, UserList, UserDetail, ProfileList, ProfileDetail


urlpatterns = [
    path('role', RoleView.as_view()),
    path('role/create', CreateRoleView.as_view()),
    path('profile', ProfileList.as_view()),
    path('profile/edit', ProfileDetail.as_view()),
    path('users/', UserList.as_view()),
    path('users/<int:pk>/', UserDetail.as_view()),
]
