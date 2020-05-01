from django.conf.urls import url
from .views import UserAPIView, RegisterAPIView, LoginAPIView
from knox.views import LogoutView

urlpatterns = [
    url('auth/user/', UserAPIView.as_view()),
    url('auth/register/', RegisterAPIView.as_view()),
    url('auth/login/', LoginAPIView.as_view()),
    url('auth/logout/', LogoutView.as_view(), name='knox_logout')
]