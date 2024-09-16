from django.shortcuts import render

# Create your views here.
# dashboard/views.py

from django.http import HttpResponse

def dashboard_home(request):
    return HttpResponse("Welcome to the Dashboard!")
