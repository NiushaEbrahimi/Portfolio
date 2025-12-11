from django.db import models

class Technologies(models.Model):
    techName = models.CharField(max_length=50)
    percent = models.PositiveIntegerField()
    category = models.CharField(max_length=50)


class MenuItem(models.Model):
    title = models.CharField(max_length=100)  
    svg_icon = models.TextField()  
    order = models.PositiveIntegerField(default=0)  
    is_active = models.BooleanField(default=True) 