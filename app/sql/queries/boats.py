from sqlalchemy import select, insert, update, delete

from app.sql.models.boats import Boats


def query_create_boat(make: str, model: str):
    in_ = (
        insert(Boats)
        .values(
            make=make,
            model=model
        )
        .returning(Boats)
    )
    return in_


def query_get_all_boats():
    se_ = select(Boats)
    return se_


def query_get_boat(where: dict):
    wh_ = []
    for k, v in where.items():
        wh_.append(getattr(Boats, k) == v)
    if not wh_:
        return None
    se_ = select(Boats).where(*wh_)
    return se_


def query_update_boat(where: dict, values: dict):
    wh_ = []
    for k, v in where.items():
        wh_.append(getattr(Boats, k) == v)
    if not wh_:
        return None
    up_ = (
        update(Boats)
        .where(*wh_)
        .values(
            **{
                k: v
                for k, v in values.items()
                if hasattr(Boats, k)
            }
        )
        .returning(Boats)
    )
    return up_


def query_delete_boat(where: dict):
    wh_ = []
    for k, v in where.items():
        wh_.append(getattr(Boats, k) == v)
    if not wh_:
        return None
    de_ = (
        delete(Boats)
        .where(*wh_)
        .returning(Boats)
    )
    return de_
