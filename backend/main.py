from flask import Flask, request, jsonify
import hasher
import database as db


app = Flask(__name__)

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

    res = db.user_insert(json["username"], password)

    if res:
        return jsonify({})
    return jsonify({})

@app.route("/add-article", methods=["POST"])
def add_article():
    json = request.get_json()

    user_from_db = db.find_user(json["username"])
    if hasher.verify(json["username"], json["password"], user_from_db["password"]):
        db.add_article(json["username"], json["content"])

@app.route("/article", methods=["GET", "POST"])
def article():
    if request.method == "GET":
        pass
    elif request.method == "POST":
        pass
    else:
        return jsonify({
            "msg": "Invalid request!"
        })


if __name__ == "__main__":
    app.run(debug=True)
