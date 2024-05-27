import sqlalchemy as s

from .__base_model__ import MainBaseModel


class Cars(MainBaseModel):
    __tablename__ = "cars"

    # PriKey
    car_id = s.Column(s.Integer, primary_key=True)

    # ForKey
    fk_owner_id = s.Column(
        s.Integer, s.ForeignKey("owners.owner_id", onupdate="CASCADE", ondelete="CASCADE")
    )

    make = s.Column(s.String(64), default="", nullable=True)
    model = s.Column(s.String(64), default="", nullable=True)
