from utility import *


def getTags(primaryid):

    tagList = []

    result = exec_get_all('select recipe, tag from recipes inner join tags on tags.id = ANY(tags) ', [primaryid])

    for i in result:
        tagList.append(i[1])

    return result[0][0], tagList


def addRecipe(name, rating, url, tags):
    exec_commit('INSERT INTO recipes(recipe, rating, url, tags) VALUES (%s, %s, %s, %s)', [name, rating, 'https://www.justtherecipe.com/?url='+url, tags])

    
def getRecipes():
    result = exec_get_all('select recipe, rating FROM recipes')

    return result


def getRating(primaryid):

    result = exec_get_one('select rating from recipes where id = %s', [primaryid])

    return result


def deleteRecipe(primaryid):

    exec_commit('Delete From recipes where id = %s', [primaryid])


# def updateRecipe(primaryid):  TO BE DEVELOPED

#     return 

def getURL(primaryid):

    result = exec_get_one('select url from recipes where id = %s', [primaryid])

    return result 
