# services/twitter_service.py
import tweepy
from django.conf import settings

def get_twitter_client():
    auth = tweepy.OAuth1UserHandler(
        settings.TWITTER_API_KEY,
        settings.TWITTER_API_SECRET,
        settings.TWITTER_ACCESS_TOKEN,
        settings.TWITTER_ACCESS_SECRET
    )
    return tweepy.API(auth)

def fetch_disaster_tweets(keywords=['disaster', 'earthquake', 'flood']):
    api = get_twitter_client()
    query = ' OR '.join(keywords)
    tweets = api.search_tweets(q=query, count=100, lang='en', tweet_mode='extended')
    
    return [{
        'source': 'Twitter',
        'content': tweet.full_text,
        'author': tweet.user.screen_name,
        'created_at': tweet.created_at,
        'location': tweet.user.location or 'Unknown',
        'url': f"https://twitter.com/{tweet.user.screen_name}/status/{tweet.id}"
    } for tweet in tweets]
