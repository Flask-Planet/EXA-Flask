from flask_rpc.version_1_0 import RPCResponse

from app.sql import MainSession
from app.sql.queries.owners import query_get_all_owners


def get_all_owners(_):
    with MainSession as s:
        query = query_get_all_owners()

        result = s.execute(query).scalars().all()
        if not result:
            return RPCResponse.fail("No owners found.")

        return RPCResponse.success([
            {
                "owner_id": r.owner_id,
                "name": r.name,
            }
            for r in result
        ], "Owners.")
