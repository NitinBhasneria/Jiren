from django.conf.urls import url
from .views import UserAPIView, RegisterAPIView, LoginAPIView
from knox.views import LogoutView

urlpatterns = [
    url('user/', UserAPIView.as_view()),
    url('register/', RegisterAPIView.as_view()),
    url('login/', LoginAPIView.as_view()),
    url('logout/', LogoutView.as_view(), name='knox_logout')
]