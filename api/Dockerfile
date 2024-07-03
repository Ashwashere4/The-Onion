FROM python:3.10-alpine

COPY requirements.txt . 

RUN pip3 install -r requirements.txt

COPY . .

EXPOSE 5432

CMD ["python3", "server.py", "--host=172.18.0.2", port=5432]