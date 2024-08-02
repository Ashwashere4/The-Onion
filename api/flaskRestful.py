from flask_restful import Resource, request, reqparse
import databaseAPI

"""Using the flaskAPI returns all recipes"""
class GetRecipes(Resource):

    def get(self):

        recipeList = []
        recipe = databaseAPI.getRecipes()

        for i in recipe:
            recipeList.append(i)


        
        return (recipeList, 201)
    

"""Using the flaskAPI deletes a recipe when given an"""
class DeleteRecipes(Resource):
    def delete(self, primaryid:int):

        if (primaryid != None):
            print(primaryid)
            databaseAPI.deleteRecipe(primaryid)

            return ("Course Deleted", 202)
        
        else:
            return ("ERROR, COURSE DOES NOT EXIST")


"""Using the flaskAPI adds a recipe"""
class AddRecipes(Resource):
    def put(self):

        parser = reqparse.RequestParser()
        parser.add_argument('recipe', type = str)
        parser.add_argument('url', type= str)
        parser.add_argument('tags')

        args = parser.parse_args()

        databaseAPI.addRecipe(args['recipe'], args['url'], args['tags'])

        return ("Recipe Created")
        

"""Using the flaskAPI updates a recipe when given an id"""
class UpdateRecipes(Resource):
    def put(self, primaryid:int):

        if primaryid != None:
            parser = reqparse.RequestParser()
            parser.add_argument('recipe', type = str)
            parser.add_argument('url', type = str)
            parser.add_argument('tags')


            args = parser.parse_args()

            databaseAPI.updateRecipe(primaryid, args['recipe'], args['url'], args['tags'])

            return("Recipe Updated", 202)

        else:
            return("Recipe, Course Doesn't Exist", 406)