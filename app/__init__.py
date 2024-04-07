from datetime import datetime

from flask import Flask


def setup_routes(app: Flask) -> None:
    from app.routes.index import index_routes

    index_routes(app)


def setup_blueprints(app: Flask) -> None:
    from app.example_blueprint import example_blueprint

    app.register_blueprint(example_blueprint)


def create_app():
    app = Flask(__name__)

    app.config.from_object("app.config.TestingConfig")

    # Pulls config from app/config.py

    @app.context_processor
    def no_cache_processor():
        def no_cache():
            if app.debug:
                dt = datetime.now().strftime("%Y%m%d%H%M%S")
                return f"?{dt}"
            return ""

        return dict(no_cache=no_cache)

    setup_blueprints(app)
    setup_routes(app)

    return app
