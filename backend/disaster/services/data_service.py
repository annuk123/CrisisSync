# disaster/services/data_service.py

def aggregate_disaster_data():
    # This function should fetch disaster-related data from different sources
    # For example, from APIs, databases, or web scraping
    # Example placeholder return:
    return [
        {
            'source': '',
            'content': '',
            'author': '',
            'created_at': '',
            'location': '',
            'url': ''
        },
        
    ]

def categorize_disaster(content):
    # This function will categorize the disaster based on content
    # For example, based on keywords such as "flood", "earthquake", etc.
    
    if 'flood' in content.lower():
        return 'Flood'
    elif 'earthquake' in content.lower():
        return 'Earthquake'
    else:
        return 'Other'
