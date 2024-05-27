from pprint import pprint

import click
import faker
import requests


@click.group("run")
def run():
    pass


@run.command("create-database")
def create():
    f = faker.Faker()

    click.echo("Creating a client...")
    response = requests.post(
        "http://127.0.0.1:5000/rpc/clients",
        json={
            "frpc": 1.0,  # Required
            "function": "create",
            "data": {
                "name": f.name()
            }
        }
    )
    pprint(response.json(), indent=2)


if __name__ == '__main__':
    run()
