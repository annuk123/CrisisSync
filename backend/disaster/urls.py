from django.urls import path
from . import views

urlpatterns = [
    path('fetch/', views.fetch_and_save_disaster_data, name='fetch_disaster_data'),
    path('api/', views.disaster_data_api, name='disaster_data_api'),
    path('tweets/', views.disaster_tweets_view, name='disaster_tweets_view'),
]
