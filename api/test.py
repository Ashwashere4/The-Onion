from utility import *
from databaseAPI import *


def main():
    exec_sql_file('onionDatabase.sql')

    connect()

    print(getTags())

    addTag('Healthy')

    print(getTags())

    removeTag(getTagIDByName('healthy'))

    print(getTags())

main()