from django.db import models

# Create your models here.
# myapp/models.py
class DisasterReport(models.Model):
    report_id = models.AutoField(primary_key=True)
    location = models.CharField(max_length=255)
    disaster_type = models.CharField(max_length=100)
    description = models.TextField()
    reported_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.disaster_type} in {self.location}"
