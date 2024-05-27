from flask import Blueprint
from flask_rpc.version_1_0 import RPC, RPCResponse

from .funcs import get_all_owners, get_owner, add_owner

owners = Blueprint("owners", __name__, url_prefix="/owners")

owners_rpc = RPC(owners)
owners_rpc.functions_auto_name([get_all_owners, get_owner, add_owner])


@owners.errorhandler(404)
@owners.errorhandler(405)
def route_404(_):
    return RPCResponse.fail("Page or method not found.")
