# services/categorization_service.py
import re

CATEGORIES = {
    'Earthquake': ['earthquake', 'seismic'],
    'Flood': ['flood', 'heavy rain'],
    'Wildfire': ['wildfire', 'forest fire']
}

def categorize_disaster(content):
    for category, keywords in CATEGORIES.items():
        if any(re.search(rf'\b{keyword}\b', content, re.IGNORECASE) for keyword in keywords):
            return category
    return 'Other'
