# backend/models.py

from django.db import models
from .models import DisasterData

class DisasterData(models.Model):
    source = models.CharField(max_length=255)
    content = models.TextField()
    category = models.CharField(max_length=255)
    author = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField()
    location = models.CharField(max_length=255, blank=True, null=True)
    url = models.URLField()

    def __str__(self):
        return self.content
