from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from django.http import JsonResponse

#from .models import DisasterData  # Import the DisasterData model
# from .services.data_service import aggregate_disaster_data, categorize_disaster
# backend/views.py

# backend/views.py

from backend.services.data_service import aggregate_disaster_data, categorize_disaster



# Serializer for the token response
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# Registration API
@api_view(['POST'])
def register(request):
    data = request.data
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    confirm_password = data.get('confirmPassword')

    if password != confirm_password:
        return Response({"error": "Passwords do not match"}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response({"error": "Username already taken"}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=username, email=email, password=password)
    user.save()
    
    return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)

# Login API
@api_view(['POST'])
def login(request):
    data = request.data
    email = data.get('email')
    password = data.get('password')
    
    user = authenticate(request, email=email, password=password)
    if user is None:
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

    refresh = RefreshToken.for_user(user)
    return Response({
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    })
    
    
def fetch_and_save_disaster_data(request):
    aggregated_data = aggregate_disaster_data()
    
    for data in aggregated_data:
        category = categorize_disaster(data['content'])
        
        DisasterData.objects.create(
            source=data['source'],
            content=data['content'],
            category=category,
            author=data.get('author'),
            created_at=data['created_at'],
            location=data.get('location', 'Unknown'),
            url=data['url']
        )
    
    return render(request, 'dashboard.html', {'data': DisasterData.objects.all()})

def disaster_data_view(request):
    data = {
        "disasters": [
            {"type": "earthquake", "severity": 5},
            {"type": "flood", "severity": 7},
        ]
    }
    return JsonResponse(data)

def disaster_map_view(request):
    return render(request, 'index.html')
