from flask import Flask, request, jsonify
import hasher
import database as db
import moderator
from flask_cors import CORS


app = Flask(__name__)

CORS(app)


@app.route("/")
def home():
    return "Hello World!"


@app.route("/login", methods=["POST"])
def login():
    json = request.get_json()

    user_from_db = db.find_user(json["username"])
    print(json)
    if hasher.verify(json["username"], json["password"], user_from_db["password"]):
        return jsonify({
            "msg": "Success"
        })
    return jsonify({
        "msg": "Denied"
    })


@app.route("/signup", methods=["POST"])
def signup():

    json = request.get_json()

    password = hasher.hashpw(json["username"], json["password"])

    res = db.user_insert(json["username"], password, json["culture"])

    if res:
        return jsonify({})
    return jsonify({})


@app.route("/add-article", methods=["POST"])
def add_article():
    json = request.get_json()
    print(f"Evaluating with json {json}")
    title_is_offensive = moderator.classify(json["title"].strip())
    print(f"Classified title {json['title']}")
    content_is_offensive = moderator.classify(json["content"].strip())
    print("Done Evaluating")
    print(f"{title_is_offensive=},{content_is_offensive=}")
    if title_is_offensive or content_is_offensive:
        return jsonify({
            "msg": "Hate speech detected! Please change your Title/Body as hate speech is not allowed on our platform."
        })
    user_from_db = db.find_user(json["username"])
    if hasher.verify(json["username"], json["password"], user_from_db["password"]):
        db.add_article(json["username"], json["title"], json["content"],
                       db.get_culture_from_user(json["username"]))

    return jsonify({})


@app.route("/article", methods=["GET", "POST"])
def article():
    if request.method == "GET":
        articles = db.get_all_articles()

        return jsonify({
            "articles": articles
        })
    elif request.method == "POST":
        json = request.get_json()

        if "username" in json:
            article = db.get_article_for_user(json["username"])

            return jsonify({
                "article": article
            })
        elif "culture" in json:
            articles = db.get_articles_for_culture(json["culture"])

            return jsonify({
                "article": articles
            })
    else:
        return jsonify({
            "msg": "Invalid request!"
        })


@app.route("/add-recipe", methods=["POST"])
def add_recipe():
    json = request.get_json()

    user_from_db = db.find_user(json["username"])
    if hasher.verify(json["username"], json["password"], user_from_db["password"]):
        db.add_recipe(json["username"], json["title"],
                      json["body"], json["culture"])


if __name__ == "__main__":
    app.run(debug=True)
