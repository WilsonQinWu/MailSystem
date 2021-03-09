from django.urls import path
from .views import RoleView, CreateRoleView, UserList, UserDetail, ProfileList, ProfileDetail, MailItemList, MailItemDetail


urlpatterns = [
    path('role', RoleView.as_view()),
    path('role/create', CreateRoleView.as_view()),
    path('profile/list', ProfileList.as_view()),
    path('profile', ProfileDetail.as_view()),
    path('users/', UserList.as_view()),
    path('users/<int:pk>/', UserDetail.as_view()),
    path('mail/list', MailItemList.as_view()),
    path('mail/', MailItemDetail.as_view()),
]
