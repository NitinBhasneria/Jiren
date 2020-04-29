from django.conf.urls import url
from coachroom import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url('organization/<int:pk>', views.OrganisationDetail.as_view()),
]
# urlpatterns = format_suffix_patterns(urlpatterns)