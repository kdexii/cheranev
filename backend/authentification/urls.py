from django.urls import path
from . import views
from .api import RegisterApi

urlpatterns = [
     path('home/', views.HomeView.as_view(), name ='home'),
     path('logout/', views.LogoutView.as_view(), name ='logout'),
     path('api/register', RegisterApi.as_view()),

]