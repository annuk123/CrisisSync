"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.contrib import admin
# from django.urls import path, include

# urlpatterns = [
#     path('admin/', admin.site.urls),
#      path('api/', include('aggregator.urls')),
#         path('dashboard/', include('dashboard.urls')), 
# ]

# backend/urls.py

from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
from django.urls import path
from .views import MyTokenObtainPairView, register, login
from rest_framework_simplejwt.views import TokenRefreshView
from .views import fetch_and_save_disaster_data
from . import views
#from .views import disaster_tweets_view
# You can define a simple view for the root URL
def home(request):
    return HttpResponse("Welcome to the home page!")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),  # This adds the root URL
    path('api/', include('aggregator.urls')),
    path('dashboard/', include('dashboard.urls')),
        path('api/register/', register, name='register'),
    path('api/login/', login, name='login'),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
     path('dashboard/', fetch_and_save_disaster_data, name='dashboard'),
     path('disaster/', include('disaster.urls')),
      path('api/disaster-data/', views.disaster_data_view, name='disaster-data'),
        path('map/', views.disaster_map_view, name='disaster_map'),

]





