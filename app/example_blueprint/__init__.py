from flask import Blueprint, render_template

example_blueprint = Blueprint(
    "example_blueprint",
    __name__,
    url_prefix="/example-blueprint",
    template_folder="templates",
    static_folder="static",
)


@example_blueprint.get("/")
def index():
    stringv = "value"
    intv = 1
    floatv = 1.1
    boolv = True
    listv = ["value1", "value2", "value3"]
    dictv = {"key1": "value1", "key2": "value2", "key3": "value3"}

    return render_template(
        "example_blueprint/index.html",
        stringv=stringv,
        intv=intv,
        floatv=floatv,
        boolv=boolv,
        listv=listv,
        dictv=dictv,
    )
