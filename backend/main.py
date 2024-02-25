from flask import Flask, request, jsonify
import hasher

app = Flask(__name__)

def foo(*args):
    pass

@app.route("/")
def home():
    return "Hello World!"


@app.route("/login")
def login():
    json = request.get_json()

    password = hasher.hashpw(json["username"], json["password"])

    if hasher.verify(json["username"], json["password"], password):
        return jsonify({
            "msg": "Success"
        })
    return jsonify({
        "msg": "Denied"
    })

@app.route("/signup")
def signup():

    json = request.get_json()

    password = hasher.hashpw(json["username"], json["password"])

    res = foo(json["username"], password)

    if res:
        return jsonify({})
    return jsonify({})

if __name__ == "__main__":
    app.run(debug=True)
