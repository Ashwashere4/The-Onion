from flask_restful import Resource, request, reqparse
import databaseAPI


class GetRecipes(Resource):

    def get(self):

        recipeList = []
        recipe = databaseAPI.getRecipes()

        for i in recipe:
            recipeList.append(i)


        
        return (recipeList, 201)
    
class DeleteRecipes(Resource):
    def delete(self, primaryid):

        if (primaryid != None):
            print(primaryid)
            databaseAPI.deleteRecipe(primaryid)

            return ("Course Deleted", 202)
        
        else:
            return ("ERROR, COURSE DOES NOT EXIST")



class AddRecipes(Resource):
    def put(self):

        parser = reqparse.RequestParser()
        parser.add_argument('recipe', type = str)
        parser.add_argument('url', type= str)
        parser.add_argument('tags')

        args = parser.parse_args()

        databaseAPI.addRecipe(args['recipe'], args['url'], args['tags'])

        return ("Recipe Created")
        


class UpdateRecipes(Resource):
    def put(self, primaryid):

        if primaryid != None:
            parser = reqparse.RequestParser()
            parser.add_argument('recipe', type = str)
            parser.add_argument('url', type = str)
            parser.add_argument('tags')


            args = parser.parse_args()

            databaseAPI.updateRecipe(primaryid, args['recipe'], args['url'], args['tags'])

            return("Course Updated", 202)

        else:
            return("Error, Course Doesn't Exist", 406)