from flask import Blueprint

example_blueprint_api = Blueprint("example_blueprint_api", __name__, url_prefix="/example-blueprint-api")


@example_blueprint_api.get("/")
def get():
    return {"request_success": True, "message": "Hello World!"}
