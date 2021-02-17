from django.shortcuts import render
from rest_framework import generics, status
from .serializers import RoleSerializer, CreateRoleSerializer
from .models import Role
from rest_framework.views import APIView
from rest_framework.response import Response


class RoleView(generics.ListAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer


class CreateRoleView(APIView):
    serializer_class = CreateRoleSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            role_name = serializer.data.get('role_name')

            role = Role(role_name=role_name)
            role.save()

            return Response(RoleSerializer(role).data,
                            status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
