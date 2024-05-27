from flask import Flask, render_template

from app.config import Config
from app.extensions import vite_transporter
from app.rpc import rpc


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    vite_transporter.init_app(
        app,
        cors_allowed_hosts=[
            "http://127.0.0.1:6601",
        ],
    )

    app.register_blueprint(rpc)

    @app.route("/", defaults={"path": ""})
    @app.route("/<path:path>")
    def catch_all(path):
        _ = path
        return render_template("index.html")

    @app.cli.command("init-db")
    def init_db():
        from app.sql.engines import main_db
        from app.sql.models import MainBaseModel

        MainBaseModel.metadata.create_all(main_db)

    return app
