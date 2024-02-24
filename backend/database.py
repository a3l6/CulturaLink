from pymongo import MongoClient
import os

mongo_uri = os.environ.get('MONGO_URI')
client = MongoClient(mongo_uri)
db = client.User_Credentials_Database
user_credentials = db.user_credentials 

def user_insert(self, username, password):
    user_data ={
        'username': username,
        'passowrd': password
    }

    self.collection.insert_one(user_data)

def find_user(self, username):
    user_data = self.collection.find_one({'username': username})
    return user_data

