from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    birth_year = models.IntegerField(null=True)
    birth_month = models.IntegerField(null=True)
    birth_date = models.IntegerField(null=True)

    def __str__(self):
        return self.email
