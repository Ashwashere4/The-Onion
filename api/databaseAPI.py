from utility import *

def getTagsFromRecipe(primaryid):

    tagList = []

    result = exec_get_all('select recipe, tag from recipes inner join tags on tags.id = ANY(tags) where recipes.id = %s', [primaryid])

    for i in result:
        tagList.append(i[1])

    return tagList


def getRecipeIDByName(name):

    result = exec_get_one('select id from recipes where recipes.recipe = %s', [name])

    return result


def getTagIDByName(name):

    result = exec_get_one('select id from tags where tags.tag = %s', [name])

    return result


def search(input):
    
    seachDict = {}

    result = exec_get_all('select recipe from recipes inner join tags on tags.id = ANY(tags) where recipes.recipe Like %s or tags.tag Like %s', ['%'+input+'%', '%'+input+'%'])

    for i in result:
        seachDict[i[0]] = getTagsFromRecipe(getRecipeIDByName(i[0]))

    return seachDict


def addRecipe(name, rating, url, tags):
    exec_commit('INSERT INTO recipes(recipe, rating, url, tags) VALUES (%s, %s, %s, %s)', [name.lower(), rating, 'https://www.justtherecipe.com/?url='+url, tags])


def addTag(tag):
    exec_commit('INSERT INTO tags(tag) VALUES (%s)', [tag.lower()])


def removeTag(id):
    exec_commit('Delete from tags where id = %s', [id])


def getRecipes():
    result = exec_get_all('select recipe, rating FROM recipes')

    return result

def getTags():
    result = exec_get_all('select tag FROM tags')

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
