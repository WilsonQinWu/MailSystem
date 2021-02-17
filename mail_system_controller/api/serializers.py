from rest_framework import serializers
from .models import Role


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ('id', 'role_name', 'created_at')


class CreateRoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ['role_name']


