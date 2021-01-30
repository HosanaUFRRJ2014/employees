import uuid
from datetime import date, datetime
from django.db import models
from django.contrib.auth.models import AbstractUser


class Employee(AbstractUser):
    id = models.BigAutoField(primary_key=True)
    birthdate = models.DateField(auto_now=False, auto_now_add=False)
    position = models.CharField(max_length=60)

    REQUIRED_FIELDS = [
        'first_name',
        'last_name',
        'birthdate'
    ]

    @property
    def age(self):
        today = date.today()
        return today.year - self.birthdate.year - (
            (today.month, today.day) < (self.birthdate.month, self.birthdate.day)
        )