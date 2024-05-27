from flask import Blueprint
from flask_rpc.version_1_0 import RPC, RPCResponse

from app.rpc.owners import owners

rpc = Blueprint("rpc", __name__, url_prefix="/rpc")
rpc.register_blueprint(owners)

rpc_rpc = RPC(rpc)
rpc_rpc.functions_auto_name([])

@rpc.route("/", defaults={"path": ""}, methods=["GET", "POST"])
@rpc.route("/<path:path>", methods=["GET", "POST"])
def catch_all(path):
    return RPCResponse.fail(
        "Path not found.",
        {"path": path},
    )
