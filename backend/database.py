from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.User_Credentials_Database
user_credentials = db.user_credentials 


