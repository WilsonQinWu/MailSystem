from django.db import models
from django.utils.timezone import now


class Role(models.Model):
    role_name = models.CharField(max_length=20, unique=True, null=False)
    created_at = models.DateTimeField(default=now, editable=False)


class Profile(models.Model):
    email = models.CharField(max_length=128, null=False)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=now, editable=False)
    owner = models.OneToOneField('auth.User', on_delete=models.CASCADE)


class MailItem(models.Model):
    mail_addressed_to = models.CharField(max_length=64, null=False)
    legal_entity_name = models.CharField(max_length=64, null=False)
    description = models.CharField(max_length=128)
    entry_date = models.DateTimeField(default=now, editable=False)
    institution = models.CharField(max_length=64, null=False)
    account_number = models.CharField(max_length=32)
    document_date = models.DateField(auto_now_add=True)
    cld = models.CharField(max_length=32)
    suffix = models.CharField(max_length=32)
    tax_year = models.IntegerField()
    file_path = models.CharField(max_length=64, null=False)
    creator = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=now, editable=False)

