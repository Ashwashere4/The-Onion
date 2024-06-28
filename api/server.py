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
api.add_resource(flaskRestful.AddRecipes, "/recipes/add")
api.add_resource(flaskRestful.UpdateRecipes, "/recipes/<int:primaryid>")



if __name__ == '__main__':
    print("Loading DB")
    utility.connect()
    print("DataBase loaded")
    print("Starting Flask")
    app.run(host = '192.168.50.228') 
    print("Flask Closed")
