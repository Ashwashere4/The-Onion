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

        print(primaryid)

        if (primaryid != None):
            databaseAPI.deleteRecipe(primaryid)

            return ("Course Deleted", 202)
        
        else:
            return ("ERROR, COURSE DOES NOT EXIST")
        

class SearchRecipes(Resource):

    def get(self, search): 

        searchResult = []
        recipes = databaseAPI.search(search)

        for i in recipes:
            searchResult.append(i)
        
        return searchResult