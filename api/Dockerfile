FROM python:3.10-alpine

WORKDIR /server

COPY requirements.txt . 

RUN pip3 install -r requirements.txt

COPY . .

EXPOSE 5432

CMD ["python3", "server.py", "--host=0.0.0.0", port=5432]