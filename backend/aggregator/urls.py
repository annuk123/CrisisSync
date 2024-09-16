# aggregator/urls.py

# aggregator/urls.py

from django.urls import path
from . import views  # Ensure this line is present

urlpatterns = [
    path('', views.home, name='home'),
    # Add other URL patterns here
]

