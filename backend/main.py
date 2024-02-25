from flask import Flask, request, jsonify
import hasher
<<<<<<< HEAD
import database as db
import moderator
from flask_cors import CORS


app = Flask(__name__)

CORS(app)

=======

app = Flask(__name__)

def foo(*args):
    pass
>>>>>>> anreet3

@app.route("/")
def home():
    return "Hello World!"


<<<<<<< HEAD
@app.route("/login", methods=["POST"])
def login():
    json = request.get_json()

    user_from_db = db.find_user(json["username"])
    print(json)
    if hasher.verify(json["username"], json["password"], user_from_db["password"]):
=======
@app.route("/login")
def login():
    json = request.get_json()

    password = hasher.hashpw(json["username"], json["password"])

    if hasher.verify(json["username"], json["password"], password):
>>>>>>> anreet3
        return jsonify({
            "msg": "Success"
        })
    return jsonify({
        "msg": "Denied"
    })

<<<<<<< HEAD

@app.route("/signup", methods=["POST"])
=======
@app.route("/signup")
>>>>>>> anreet3
def signup():

    json = request.get_json()

    password = hasher.hashpw(json["username"], json["password"])

<<<<<<< HEAD
    res = db.user_insert(json["username"], password, json["culture"])
=======
    res = foo(json["username"], password)
>>>>>>> anreet3

    if res:
        return jsonify({})
    return jsonify({})

<<<<<<< HEAD

@app.route("/add-article", methods=["POST"])
def add_article():
    json = request.get_json()
    print(f"Evaluating with json {json}")
    title_is_offensive = moderator.classify(json["title"])
    print(f"Classified title {json['title']}")
    content_is_offensive = moderator.classify(json["content"])
    print("Done Evaluating")
    print(f"{title_is_offensive=},{content_is_offensive=}")
    if title_is_offensive or content_is_offensive:
        return jsonify({
            "msg": "Hate speech detected!"
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


=======
>>>>>>> anreet3
if __name__ == "__main__":
    app.run(debug=True)
