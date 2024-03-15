FROM python:3.11-alpine
ENV TZ=Europe/London
ENV IS_DOCKER true

RUN apk add --update --no-cache linux-headers tzdata

WORKDIR /main
COPY app app
COPY make_celery.py make_celery.py
COPY requirements.txt requirements.txt
COPY gunicorn.conf.py gunicorn.conf.py
COPY supervisor.apps.ini supervisor.apps.ini
COPY supervisord.conf supervisord.conf

RUN python -m pip install --upgrade pip
RUN python -m pip install -r requirements.txt

ENTRYPOINT ["supervisord", "-c", "/main/supervisord.conf"]
