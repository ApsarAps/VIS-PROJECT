from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Enquiry
from .serializers import EnquirySerializer

@api_view(['POST'])
def submit_enquiry(request):
    serializer = EnquirySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Enquiry submitted successfully'}, status=201)
    return Response(serializer.errors, status=400)
