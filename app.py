from flask import Flask
from flask import render_template
from pymongo import MongoClient
import json
from bson import json_util
from bson.json_util import dumps


app = Flask(__name__)


mongoDB_host = 'localhost'
mongoDB_port = 27017
nameDB = 'enroll_v2'
collectionDB = 'race'
fields = {'category': True, 'values': True}

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/data")
def data():
    conn = MongoClient(mongoDB_host, mongoDB_port)
    collection = conn[nameDB][collectionDB]
    projects = collection.find(projection=fields)
    json_projects= []
    for project in projects:
        json_projects.append(project)
    json_projects = json.dumps(json_projects, default=json_util.default)
    conn.close()
    return json_projects

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)