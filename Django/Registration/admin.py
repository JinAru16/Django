from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import AbstractUser
from .models import User

# Register your models here.
admin.site.register(User, UserAdmin)
UserAdmin.fieldsets +=(("Custom fields", {"fields": ("nickname", )}), )