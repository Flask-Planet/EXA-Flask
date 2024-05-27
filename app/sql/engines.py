from sqlalchemy import create_engine

main_db = create_engine(
    "sqlite+pysqlite:///database.db",
)
