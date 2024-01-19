from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=300)
    price_start = models.CharField(max_length=8, blank=True)
    image = models.CharField(max_length=100)
    video_card = models.CharField(max_length=100)
    cpu = models.CharField(max_length=150)
    memory = models.CharField(max_length=15)
    resolutions_supported = models.CharField(max_length=15)

    def __str__(self):
        return f'{self.title}'