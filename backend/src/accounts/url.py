from django.conf.urls import url
from . import views

urlpatterns = [
    url('signup/', views.UserCreate.as_view()),
]