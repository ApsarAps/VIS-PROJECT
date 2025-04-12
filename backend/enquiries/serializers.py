from rest_framework import serializers
from .models import Enquiry

class EnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquiry  
        fields = ['name', 'email', 'phone', 'message', 'service'] 
