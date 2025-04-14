from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .models import Enquiry

class EnquirySubmitView(APIView):
    def post(self, request):
        name = request.data.get("name")
        email = request.data.get("email")
        phone = request.data.get("phone")
        service = request.data.get("service")
        message = request.data.get("message")

        # Save to DB
        try:
            enquiry = Enquiry.objects.create(
                name=name,
                email=email,
                phone=phone,
                service=service,
                message=message
            )
        except Exception as e:
            return Response({"error": "Failed to save enquiry to database."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        # Prepare email
        full_message = f"""
        New Enquiry Received:

        Name: {name}
        Email: {email}
        Phone: {phone}
        Service: {service}
        Message:
        {message}
        """

        try:
            send_mail(
                subject=f"New Enquiry from {name}",
                message=full_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=["your-email@gmail.com"],  # replace with real admin email(s)
                fail_silently=False,
            )
            return Response({"message": "Enquiry submitted successfully"}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": "Enquiry saved, but failed to send email."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
