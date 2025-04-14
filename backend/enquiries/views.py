from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings

class EnquirySubmitView(APIView):
    def post(self, request):
        name = request.data.get("name")
        email = request.data.get("email")
        phone = request.data.get("phone")
        service = request.data.get("service")
        message = request.data.get("message")

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
                recipient_list=["your-email@gmail.com"],
                fail_silently=False,
            )
            return Response({"message": "Enquiry sent successfully"}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
