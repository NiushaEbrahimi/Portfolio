from django.db import models

# Create your models here.
class Technologies(models.Model):
    techName = models.TextField(max_length=30)
    percent = models.IntegerField()
    category = models.TextField()
