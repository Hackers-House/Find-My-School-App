from flask import Flask

app = Flask(__name__)


@app.route("/api", methods=["GET"])
def api():
    return{
        "id": 123,
        "teamName": "Hacker House",
        "projectName": "Find My School",
        "hackathon": "New Year New Hack"
    }
