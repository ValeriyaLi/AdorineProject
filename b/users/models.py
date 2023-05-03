from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    ...


class UserInfo(models.Model):
    user = models.OneToOneField(to=User, on_delete=models.CASCADE)
    country = models.CharField(max_length=120)
    city = models.CharField(max_length=120)
    street = models.CharField(max_length=120)
    house = models.FloatField()
