from django.db import models
from django.utils.timezone import now


class Role(models.Model):
    role_name = models.CharField(max_length=20, unique=True, null=False)
    created_at = models.DateTimeField(default=now, editable=False)


class Profile(models.Model):
    email = models.CharField(max_length=128, null=False)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    token = models.CharField(max_length=32, default="")
    token_expiry = models.DateTimeField(default=now, editable=False)
    created_at = models.DateTimeField(default=now, editable=False)
    owner = models.OneToOneField('auth.User', on_delete=models.CASCADE)

