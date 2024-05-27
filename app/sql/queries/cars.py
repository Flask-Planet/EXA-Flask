from sqlalchemy import select, insert, update, delete

from app.sql.models.cars import Cars


def query_create_car(make: str, model: str):
    in_ = (
        insert(Cars)
        .values(
            make=make,
            model=model
        )
        .returning(Cars)
    )
    return in_


def query_get_all_cars():
    se_ = select(Cars)
    return se_


def query_get_car(where: dict):
    wh_ = []
    for k, v in where.items():
        wh_.append(getattr(Cars, k) == v)
    if not wh_:
        return None
    se_ = select(Cars).where(*wh_)
    return se_


def query_update_car(where: dict, values: dict):
    wh_ = []
    for k, v in where.items():
        wh_.append(getattr(Cars, k) == v)
    if not wh_:
        return None
    up_ = (
        update(Cars)
        .where(*wh_)
        .values(
            **{
                k: v
                for k, v in values.items()
                if hasattr(Cars, k)
            }
        )
        .returning(Cars)
    )
    return up_


def query_delete_car(where: dict):
    wh_ = []
    for k, v in where.items():
        wh_.append(getattr(Cars, k) == v)
    if not wh_:
        return None
    de_ = (
        delete(Cars)
        .where(*wh_)
        .returning(Cars)
    )
    return de_
