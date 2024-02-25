from pymongo import MongoClient
import os
from dotenv import load_dotenv
import certifi
from typing import TypedDict

ca = certifi.where()
load_dotenv()

mongo_uri = os.getenv('MONGO_URI2')

client = MongoClient(mongo_uri, tls=True, tlsAllowInvalidCertificates=True)
# db = client.User_Credentials_Database
# user_credentials = db.user_credentials

user_credentials = client["User_Credentials_Database"]["user_credentials"]
articles = client["UserArticles"]["articles"]
recipes = client["Recipes"]["recipes"]


class articleReturnType(TypedDict):
    created_by: str
    title: str
    body: str


class recipeReturnType(TypedDict):
    created_by: str
    title: str
    body: str


def user_insert(username: str, password: str, culture: str):
    user_data = {
        'username': username,
        'password': password,
        "culture": culture
    }

    user_credentials.insert_one(user_data)


def find_user(username):
    user_data = user_credentials.find_one({'username': username})
    return user_data


def add_article(username: str, title: str, body: str, culture: str):
    to_insert = {
        "username": username,
        "title": title,
        "body": body,
        "culture": culture
    }
    articles.insert_one(to_insert)


def add_recipe(username: str, title: str, body: str, culture: str):
    to_insert = {
        "username": username,
        "title": title,
        "body": body,
        "culture": culture
    }

    recipes.insert_one(to_insert)


def get_all_articles() -> list[articleReturnType]:
    all_articles = articles.find({})
    r = []

    for i in all_articles:
        r.append({
            "created_by": i["username"],
            "title": i["title"],
            "body": i["body"],
            "culture": i["culture"]
        })
    print(type(all_articles))
    return r


def get_article_for_user(username: str) -> list[articleReturnType]:
    cursor = articles.find({"username": username})

    r = []

    for i in cursor:
        r.append({
            "username": i["username"],
            "title": i["title"],
            "body": i["body"],
            "culture": i["culture"]
        })

    return r


def get_articles_for_culture(culture: str):
    cursor = articles.find({"culture": culture})

    r = []

    for i in cursor:
        r.append({
            "username": i["username"],
            "title": i["title"],
            "body": i["body"],
            "culture": i["culture"]
        })

    return r


def get_all_recipes() -> list[recipeReturnType]:
    all_recipes = recipes.find({})

    r = []

    for i in all_recipes:
        r.append({
            "created_by": i["username"],
            "title": i["title"],
            "body": i["body"]
        })

    return r


def get_recipe_for_user(username: str):
    return articles.find({"username": username})


def get_culture_from_user(username: str) -> str:
    u = user_credentials.find_one({"username": username})

    culture = u["culture"]

    return culture


if __name__ == "__main__":
    # user_insert("testing", "123")
    # print(find_user("testing"))
    add_article("testing", "Title123", "body456")
    get_all_articles()
    get_article_for_user("testing")
