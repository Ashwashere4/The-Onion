from utility import *
from databaseAPI import *


def main():
    exec_sql_file('onionDatabase.sql')

    connect()

    print(getRecipes())

    addRecipe('Cookies', 5, 'https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/', [1, 2, 3])

    print(getRecipes())

    deleteRecipe(1)

    print(getRecipes())

    print(getURL(2)[0])

    print(getTags(2))



main()