from django.db import models

# Create your models here.
from django.db import models

class Enquiry(models.Model):
    name = models.CharField(max_length=255)  
    email = models.EmailField()
    phone = models.CharField(max_length=20)  
    message = models.TextField() 
    service = models.CharField(max_length=255) 

    def __str__(self):
        return f"Enquiry from {self.name}" 