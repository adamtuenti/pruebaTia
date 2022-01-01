from django.db import models

# Create your models here.

class Informacion(models.Model):
    cliente = models.CharField(max_length = 50)
    token = models.CharField(max_length = 50)
    date = models.TimeField()

class TokenInfo(models.Model):
    cliente = models.CharField(max_length = 50)
    token = models.CharField(max_length = 50)
    date = models.TimeField()
    segundos = models.FloatField()
