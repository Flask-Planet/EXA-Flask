from os import getenv

from dotenv import load_dotenv

load_dotenv()

bind = "127.0.0.1:5000"
workers = 3
wsgi_app = "app:create_app()"

if getenv("FLASK_ENV") == "development":
    capture_output = True
    loglevel = "debug"
    enable_stdio_inheritance = True
