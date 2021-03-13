from django.contrib import admin
from .models import MailItem

class MailItemAdmin(admin.ModelAdmin):
    list_display = [field.name for field in MailItem._meta.get_fields()]

admin.site.register(MailItem, MailItemAdmin)

# Register your models here
