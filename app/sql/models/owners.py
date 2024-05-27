import sqlalchemy as s

from .__base_model__ import MainBaseModel


class Owners(MainBaseModel):
    __tablename__ = "owners"

    # PriKey
    owner_id = s.Column(s.Integer, primary_key=True)

    name = s.Column(s.String(64), default="", nullable=True)
