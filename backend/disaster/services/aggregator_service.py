# services/aggregator_service.py
from .twitter_service import fetch_disaster_tweets
from .news_service import fetch_news_articles

def aggregate_disaster_data():
    tweets = fetch_disaster_tweets()
    news = fetch_news_articles()
    
    # Combine tweets and news
    data = tweets + news
    return data
