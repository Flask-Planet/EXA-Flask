from celery.result import AsyncResult
from flask import Blueprint

from . import tasks

celery_blueprint = Blueprint("celery_blueprint", __name__, url_prefix="/celery_blueprint")


@celery_blueprint.get("/check_task/<_id>")
def check_task(_id: str) -> dict[str, object]:
    result = AsyncResult(_id)
    ready = result.ready()
    return {
        "ready": ready,
        "successful": result.successful() if ready else None,
        "value": result.get() if ready else result.result,
    }


@celery_blueprint.get("/add/<int:a>/<int:b>")
def add(a, b) -> dict[str, object]:
    result = tasks.add.delay(a, b)
    return {"result_id": result.id}


@celery_blueprint.get("/block")
def block() -> dict[str, object]:
    result = tasks.block.delay()
    return {"result_id": result.id}


@celery_blueprint.get("/process/<int:total>")
def process(total) -> dict[str, object]:
    result = tasks.process.delay(total=total)
    return {"result_id": result.id}
