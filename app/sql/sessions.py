from sqlalchemy.orm import Session

from .engines import main_db


class _MainSession:
    def __init__(self):
        pass

    def __enter__(self):
        with Session(main_db) as session:
            return session

    def __exit__(self, exc_type, exc_val, exc_tb):
        pass


MainSession = _MainSession()
