from sqlalchemy import select, insert, update, delete

from app.sql.models.owners import Owners


def query_create_owner(name: str):
    in_ = (
        insert(Owners)
        .values(
            name=name
        )
        .returning(Owners)
    )
    return in_


def query_get_all_owners():
    se_ = select(Owners)
    return se_


def query_get_owner(where: dict):
    wh_ = []
    for k, v in where.items():
        wh_.append(getattr(Owners, k) == v)
    if not wh_:
        return None
    se_ = select(Owners).where(*wh_)
    return se_


def query_update_owner(where: dict, values: dict):
    wh_ = []
    for k, v in where.items():
        wh_.append(getattr(Owners, k) == v)
    if not wh_:
        return None
    up_ = (
        update(Owners)
        .where(*wh_)
        .values(
            **{
                k: v
                for k, v in values.items()
                if hasattr(Owners, k)
            }
        )
        .returning(Owners)
    )
    return up_


def query_delete_owner(where: dict):
    wh_ = []
    for k, v in where.items():
        wh_.append(getattr(Owners, k) == v)
    if not wh_:
        return None
    de_ = (
        delete(Owners)
        .where(*wh_)
        .returning(Owners)
    )
    return de_
