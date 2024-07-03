FROM python:3-alpine3.15

WORKDIR /server

COPY . /server 

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5432

CMD ["python", "app.py"]