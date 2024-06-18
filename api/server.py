from flask import Flask
from flask_restful import Api
from flask_cors import CORS
import utility
import flaskRestful
import databaseAPI

app = Flask(__name__)
CORS(app)
api = Api(app)


api.add_resource(flaskRestful.GetRecipes, "/recipes")
api.add_resource(flaskRestful.DeleteRecipes, "/recipes/<int:primaryid>")
api.add_resource(flaskRestful.SearchRecipes, "/search/<string:search>")


if __name__ == '__main__':
    print("Loading DB")
    utility.exec_sql_file('onionDatabase.sql')
    print("DataBase loaded")
    print("Starting Flask")
    app.run(debug=True) 
    print("Flask Closed")
