import time
import psycopg2
import yaml
import os

def connect():
    config = {}
    conn = None
    yml_path = os.path.join(os.path.dirname(__file__), 'db.yml')
    with open(yml_path, 'r') as file:
        config = yaml.load(file, Loader=yaml.FullLoader)

    print("Attempting to Connect... ")
    while not conn:
        try:
            conn = psycopg2.connect(dbname=config['database'],
                            user=config['user'],
                            password=config['password'],
                            host=config['host'],
                            port=config['port'])
            
            print("Database Connection successful")
        except psycopg2.OperationalError as e:
            print(e)
            time.sleep(5)

    return conn
    # 
    # psycopg2.connect(dbname=config['database'],
    #                         user=config['user'],
    #                         password=config['password'],
    #                         host=config['host'],
    #                         port=config['port'])

def exec_sql_file(path):
    full_path = os.path.join(os.path.dirname(__file__), f'{path}')
    conn = connect()
    cur = conn.cursor()
    with open(full_path, 'r') as file:
        cur.execute(file.read())
    conn.commit()
    conn.close()

def exec_get_one(sql, args={}):
    conn = connect()
    cur = conn.cursor()
    cur.execute(sql, args)
    one = cur.fetchone()
    conn.close()
    return one

def exec_get_all(sql, args={}):
    conn = connect()
    cur = conn.cursor()
    cur.execute(sql, args)
    # https://www.psycopg.org/docs/cursor.html#cursor.fetchall

    list_of_tuples = cur.fetchall()
    conn.close()
    return list_of_tuples

def exec_commit(sql, args={}):
    conn = connect()
    cur = conn.cursor()
    result = cur.execute(sql, args)
    conn.commit()
    conn.close()
    return result


def main():
    exec_sql_file('onionDatabase.sql')


if __name__ == "__main__":
    main()