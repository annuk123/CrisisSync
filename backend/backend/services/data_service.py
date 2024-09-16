from django.db.models import Count
#from .models import DisasterData  # Ensure this import matches your actual model path


# services/data_service.py

#from .models import DisasterData  # Import your model

def aggregate_disaster_data():
    """
    Aggregates disaster data from the database and performs summarization.
    """
    # Example aggregation: Count the number of disasters by type
    disaster_summary = DisasterData.objects.values('disaster_type').annotate(total_count=Count('id'))

    return disaster_summary

# services/data_service.py

#from .models import DisasterData  # Import your model

def categorize_disaster(disaster_id):
    """
    Categorizes a specific disaster by its ID.
    
    Args:
        disaster_id (int): The ID of the disaster to categorize.
        
    Returns:
        dict: A dictionary with disaster details and category.
    """
    try:
        disaster = DisasterData.objects.get(id=disaster_id)
        # Example categorization logic
        if disaster.severity > 7:
            category = 'High'
        elif disaster.severity > 4:
            category = 'Medium'
        else:
            category = 'Low'
        
        return {
            'id': disaster.id,
            'type': disaster.disaster_type,
            'severity': disaster.severity,
            'category': category,
        }
    except DisasterData.DoesNotExist:
        return {'error': 'Disaster not found'}
