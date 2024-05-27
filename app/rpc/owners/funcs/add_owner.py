from flask_rpc.exceptions import DataException
from flask_rpc.validation import DataDict
from flask_rpc.version_1_0 import RPCResponse

from app.sql import MainSession
from app.sql.queries.owners import query_create_owner


def add_owner(data):
    d = DataDict(data)
    try:
        name = d.get_ensure_key("name")
    except DataException:
        return RPCResponse.fail(
            "Missing required data.",
            {
                "name": "str"
            }
        )

    with MainSession as s:
        query = query_create_owner(name)
        result = s.execute(query).scalar_one_or_none()
        s.commit()

        return RPCResponse.success(
            {
                "owner_id": result.owner_id,
                "owner_name": result.name,
            },
            "Owner Added.",
        )
