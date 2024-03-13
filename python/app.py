# app.py
from flask import Flask, request, jsonify

app = Flask(__name__)

countries = [
    {"id": 1, "name": "India", "capital": "Delhi"} 
]

def _find_next_id():
    return max(country["id"] for country in countries) + 1

def _find_country(id):
    for country in countries:
        if country["id"] == id :
            return country
    return "no country found"

@app.get("/countries")
def get_countries():
    return jsonify(countries)

@app.post("/countries")
def add_country():
    if request.is_json:
        country = request.get_json()
        country["id"] = _find_next_id()
        countries.append(country)
        return country, 201
    return {"error": "Request must be JSON"}, 415

@app.get("/countries/<int:country_id>")
def get_selected_country(country_id):
    return jsonify(_find_country(country_id))

@app.route("/countries/<int:country_id>", methods=['PUT'])
def replace_country(country_id):
    if request.is_json:
        newcountry = request.get_json()
        searchedCountry = _find_country(country_id)
        if searchedCountry != "no country found":
            countries.remove(searchedCountry)
            countries.append(newcountry)
        else :
            return jsonify(searchedCountry), 203
        return newcountry, 201
    return {"error": "Request must be JSON"}, 415