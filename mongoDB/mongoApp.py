import pymongo
from pymongo import MongoClient
client = MongoClient("mongodb://localhost:27017/")

# database for hands-on
db = client['testers']

# test collection 
collection = db.testerNames

# insert tester info
testerDetails = {
    "name": "tester 3",
    "age": 25
}
testerId = collection.insert_one(testerDetails)
print('Tester with id:' + str(testerId) + 'is created')

# read all exiting testers
allTesters = collection.find()
print('all user -')
for tester in allTesters:
    print(tester)

# search tester with filter
searchedTester = collection.find({"age" : 25})
print('searched user -')
for tester in searchedTester:
    print(tester)