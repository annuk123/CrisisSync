# services/news_service.py
import requests
from bs4 import BeautifulSoup

def fetch_news_articles(keywords=['disaster', 'earthquake', 'flood']):
    articles = []
    for keyword in keywords:
        url = f'https://news.google.com/rss/search?q={keyword}'
        response = requests.get(url)
        soup = BeautifulSoup(response.content, 'xml')
        
        for item in soup.findAll('item'):
            articles.append({
                'source': 'Google News',
                'title': item.title.text,
                'url': item.link.text,
                'published_at': item.pubDate.text
            })
    return articles
