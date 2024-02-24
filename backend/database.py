from pymongo import MongoClient
import os
from dotenv import load_dotenv
import certifi
from typing import TypedDict

ca = certifi.where()
load_dotenv()

mongo_uri = os.getenv('MONGO_URI2')

client = MongoClient(mongo_uri, tls=True, tlsAllowInvalidCertificates=True)
#db = client.User_Credentials_Database
#user_credentials = db.user_credentials

user_credentials = client["User_Credentials_Database"]["user_credentials"]
articles = client["UserArticles"]["articles"]


class articleReturnType(TypedDict):
    created_by: str
    title: str
    body: str





def user_insert(username, password):
    user_data ={
        'username': username,
        'password': password
    }

    user_credentials.insert_one(user_data)


def find_user(username):
    user_data = user_credentials.find_one({'username': username})
    return user_data


def add_article(username: str, title: str, body: str):
    to_insert = {
        "username": username,
        "title": title,
        "body": body
    }
    articles.insert_one(to_insert)


def get_all_articles() -> list[articleReturnType]:
    all_articles = articles.find({})
    r = []

    for i in all_articles:
        r.append({
            "created_by": i["username"],
            "title": i["title"],
            "body": i["body"]
        })
    print(type(all_articles))
    print(r)

def get_article_for_user(username: str) -> articleReturnType:
    print(articles.find_one({"username": username}))


if __name__ == "__main__":
    #user_insert("testing", "123")
    #print(find_user("testing"))
    add_article("testing", "Title123", "body456")
    get_all_articles()
    get_article_for_user("testing")