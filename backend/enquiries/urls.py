from django.urls import path
from enquiries.views import EnquirySubmitView

urlpatterns = [
    path('enquiry/submit/', EnquirySubmitView.as_view(), name='enquiry-submit'),
]
