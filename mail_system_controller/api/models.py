from django.db import models
from django.utils.timezone import now


class Role(models.Model):
    role_name = models.CharField(max_length=20, unique=True, null=False)
    created_at = models.DateTimeField(default=now, editable=False)

