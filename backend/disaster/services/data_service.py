def aggregate_disaster_data():
    """
    Fetches disaster-related data from different sources (e.g., Twitter) and formats it.
    Returns a list of structured data.
    """
    # Example of how you would fetch real data (assuming fetch_twitter_data is implemented)
    twitter_data = fetch_twitter_data()
    
    # Format the data into the required structure
    combined_data = []
    for tweet in twitter_data:
        combined_data.append({
            'source': 'Twitter',  # Data source: Twitter
            'content': tweet['text'],  # Tweet content
            'author': tweet['user']['name'],  # Author of the tweet
            'created_at': tweet['created_at'],  # Tweet creation date
            'location': tweet['user']['location'] or 'Unknown',  # User's location or 'Unknown'
            'url': f"https://twitter.com/{tweet['user']['screen_name']}/status/{tweet['id']}",  # Link to the tweet
        })

    # Return the formatted disaster data
    return combined_data


def categorize_disaster(content):
    """
    Categorizes the disaster based on keywords found in the content.
    Returns a disaster category string (e.g., 'Flood', 'Earthquake', etc.).
    """
    content_lower = content.lower()  # Case insensitive matching

    # Categorize based on specific keywords
    if 'flood' in content_lower:
        return 'Flood'
    elif 'earthquake' in content_lower:
        return 'Earthquake'
    elif 'hurricane' in content_lower:
        return 'Hurricane'
    elif 'wildfire' in content_lower:
        return 'Wildfire'
    else:
        return 'Other'  # Default to 'Other' if no keyword matches

