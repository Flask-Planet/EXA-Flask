from flask_rpc.exceptions import DataException
from flask_rpc.validation import DataDict
from flask_rpc.version_1_0 import RPCResponse

from app.sql import MainSession
from app.sql.queries.owners import query_get_owner


def get_owner(data):
    d = DataDict(data)
    try:
        where = d.get_ensure_key("where")
    except DataException:
        return RPCResponse.fail("Missing required data.", {"where": "{field: value}"})

    with MainSession as s:
        query = query_get_owner(where)

        if query is None:
            return RPCResponse.fail(
                "No valid where clause provided.", {"where": "{field: value}"}
            )

        result = s.execute(query).scalars().all()
        if not result:
            return RPCResponse.fail("No owner found.")

        return RPCResponse.success(
            [
                {
                    "owner_id": r.owner_id,
                    "owner_name": r.name,
                }
                for r in result
            ],
            "Owner found.",
        )
