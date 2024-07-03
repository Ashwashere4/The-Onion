from flask import Flask
from flask_restful import Api
from flask_cors import CORS
import utility
import flaskRestful
import databaseAPI

print("this is me when i get into the server", flush=True)
app = Flask(__name__)
CORS(app)
api = Api(app)


api.add_resource(flaskRestful.GetRecipes, "/recipes")
api.add_resource(flaskRestful.DeleteRecipes, "/recipes/<int:primaryid>")
api.add_resource(flaskRestful.AddRecipes, "/recipes/add")
api.add_resource(flaskRestful.UpdateRecipes, "/recipes/<int:primaryid>")


print("This is me before I eat main.", flush=True)

if __name__ == '__main__':
    print("Loading DB", flush=True)
    utility.connect()
    print("DataBase loaded", flush=True)
    print("Starting Flask", flush=True)
    app.run(host = '0.0.0.0', port= 5000)
