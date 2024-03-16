# app.py
from flask import Flask, request, jsonify

import dns.resolver
dns.resolver.default_resolver=dns.resolver.Resolver(configure=False)
dns.resolver.default_resolver.nameservers=['8.8.8.8']

from bson.json_util import dumps

import pymongo
client = pymongo.MongoClient("url")

app = Flask(__name__)
# database for hands-on
db = pymongo.database.Database(client, 'test')

# test collection 
collection = pymongo.collection.Collection(db, 'testerdetails')

@app.get("/testers")
def get_testers():
    testers = collection.find()

    testerList = []

    for tester in testers:
        testerList.append(tester)
        print(tester)

    return dumps(testerList)

@app.post("/testers")
def add_testers():
    if request.is_json:
        tester = request.get_json()
        collection.insert_one(tester)
        return tester, 201
    return {"error": "Request must be JSON"}, 415
