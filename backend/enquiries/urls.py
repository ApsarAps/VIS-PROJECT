from django.urls import path
from .views import EnquirySubmitView

urlpatterns = [
    path('api/enquiry/submit/', EnquirySubmitView.as_view(), name='enquiry-submit'),
]
