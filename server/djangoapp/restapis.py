import requests
import json
import os

backend_url = 'http://localhost:3030'
sentiment_analyzer_url = 'http://localhost:5000/'

def get_request(endpoint, **kwargs):
    params = ""
    if(kwargs):
        for key, value in kwargs.items():
            params = params + key + "=" + value + "&"
    
    request_url = backend_url + endpoint
    if params:
        request_url = request_url + "?" + params
        
    print("GET from {} ".format(request_url))
    try:
        response = requests.get(request_url)
        return response.json()
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return []

def analyze_review_sentiments(review_text):
    request_url = sentiment_analyzer_url + "analyze/" + review_text
    try:
        response = requests.get(request_url)
        return response.json()
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return {"sentiment": "neutral"}

def post_review(data_dict):
    request_url = backend_url + "/insert_review"
    try:
        response = requests.post(request_url, json=data_dict)
        return response.json()
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        return None
        