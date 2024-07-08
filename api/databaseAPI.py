from utility import *

def getTagsFromRecipe(
        primaryid: int):

    tagList = []

    result = exec_get_all('select recipe, tag from recipes \
                          inner join tags on tags.id = ANY(tags) \
                          where recipes.id = %s', [primaryid])

    for i in result:
        tagList.append(i[1])

    return tagList


def getRecipeIDByName(
        name: str):

    result = exec_get_one('select id from recipes where recipes.recipe = %s', [name])

    return result


def getTagIDByName(
        name: str):

    result = exec_get_one('select id from tags where tags.tag = %s', [name])

    return result


def search(
        input: str):

    result = exec_get_all('select DISTINCT(recipes.id), recipe from recipes \
                          inner join tags on tags.id = ANY(tags) \
                          where recipes.recipe ILike %s or tags.tag ILike %s', 
                          ['%'+input+'%', '%'+input+'%'])

    return result

def addRecipe(
        name: str, url:str, tags:list[int]):

    exec_commit('INSERT INTO recipes(recipe,url, tags) \
                VALUES (%s, %s, %s)', [name.lower(), url, tags])


def addTag(
        tag: str):
    
    exec_commit('INSERT INTO tags(tag) VALUES (%s)', [tag.lower()])


def removeTag(
        id: int):
    
    exec_commit('Delete from tags where id = %s', [id])


def getRecipes():
    result = exec_get_all("select json_agg(t) from ( \
                          select recipes.id, recipe, url, STRING_AGG(tag, ', ' ORDER BY tag) \
                          AS tags from recipes \
                          inner join tags on tags.id = ANY(tags) \
                          GROUP BY recipes.id, url) t")

    return result[0][0]

def getTags():
    result = exec_get_all('select tag FROM tags')

    return result

def getRating(
        primaryid: int):

    result = exec_get_one('select rating from recipes \
                          where id = %s', 
                          [primaryid])

    return result


def deleteRecipe(
        primaryid: int):

    exec_commit('Delete From recipes \
                where id = %s', 
                [primaryid])


def updateRecipe(
        primaryid: int, name: str, url: str, tags: list[int]):

    exec_commit('UPDATE recipes \
                SET recipe = %s, url = %s, tags = %s \
                WHERE id = %s', 
                [name, url, tags, primaryid])
 

def getURL(
        primaryid: int):

    result = exec_get_one('select url from recipes \
                          where id = %s', 
                          [primaryid])

    return result 
