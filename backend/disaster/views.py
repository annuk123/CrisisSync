# from django.shortcuts import render
# from .models import DisasterData
# from .services.aggregator_service import aggregate_disaster_data
# from .services.categorization_service import categorize_disaster
# from django.http import JsonResponse

# from django.http import JsonResponse
# from .services.twitter_service import fetch_disaster_tweets

# # Create your views here.
# def fetch_and_save_disaster_data(request):
#     aggregated_data = aggregate_disaster_data()
    
#     for data in aggregated_data:
#         category = categorize_disaster(data['content'])
        
#         DisasterData.objects.create(
#             source=data['source'],
#             content=data['content'],
#             category=category,
#             author=data.get('author'),
#             created_at=data['created_at'],
#             location=data.get('location', 'Unknown'),
#             url=data['url']
#         )
    
#     return render(request, 'dashboard.html', {'data': DisasterData.objects.all()})

# def disaster_data_api(request):
#     # Query all disaster data
#     disaster_data = DisasterData.objects.all()
    
#     # Serialize the data to JSON format
#     data = [{
#         'source': item.source,
#         'category': item.category,
#         'content': item.content,
#         'author': item.author,
#         'location': item.location,
#         'created_at': item.created_at,
#         'url': item.url
#     } for item in disaster_data]
    
#     return JsonResponse({'disasters': data})


# def disaster_tweets_view(request):
#     tweets = fetch_disaster_tweets()
#     return JsonResponse({'tweets': tweets})


from django.shortcuts import render
from django.http import JsonResponse
from .models import DisasterData
from .services.twitter_service import fetch_disaster_tweets
from .services.data_service import aggregate_disaster_data, categorize_disaster


#from disaster.views import fetch_and_save_disaster_data  # If it's part of your 'disaster' app


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

def disaster_data_api(request):
    # Query all disaster data
    disaster_data = DisasterData.objects.all()
    
    # Serialize the data to JSON format
    data = [{
        'source': item.source,
        'category': item.category,
        'content': item.content,
        'author': item.author,
        'location': item.location,
        'created_at': item.created_at,
        'url': item.url
    } for item in disaster_data]
    
    return JsonResponse({'disasters': data})

def disaster_tweets_view(request):
    tweets = fetch_disaster_tweets()
    return JsonResponse({'tweets': tweets})


