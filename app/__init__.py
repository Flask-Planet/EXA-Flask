from celery import Celery
from celery import Task
from flask import Flask


# Load extensions here, example:
# from app.extensions import db


def setup_routes(app: Flask) -> None:
    from app.routes.index import index_routes
    from app.routes.more import more_routes

    index_routes(app)
    more_routes(app)


def setup_blueprints(app: Flask) -> None:
    from app.example_blueprint import example_blueprint
    from app.example_blueprint_api import example_blueprint_api
    from app.celery_blueprint import celery_blueprint

    app.register_blueprint(example_blueprint)
    app.register_blueprint(example_blueprint_api)
    app.register_blueprint(celery_blueprint)


def create_app():
    app = Flask(__name__)

    app.config.from_object("app.config.TestingConfig")
    # Pulls config from app/config.py
    celery_init_app(app)

    setup_blueprints(app)
    setup_routes(app)

    return app


def celery_init_app(app: Flask) -> Celery:
    class FlaskTask(Task):
        def __call__(self, *args: object, **kwargs: object) -> object:
            with app.app_context():
                return self.run(*args, **kwargs)

    celery_app = Celery(app.name, task_cls=FlaskTask)
    celery_app.config_from_object(app.config["CELERY"])
    celery_app.set_default()
    app.extensions["celery"] = celery_app
    return celery_app
