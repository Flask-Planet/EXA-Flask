class Config:
    TESTING = False
    CELERY = {
        "broker_url": "sqla+sqlite:///app/instance/celery.sqlite",
        "result_backend": "db+sqlite:///app/instance/celery.sqlite",
        "task_ignore_result": True,
        "broker_connection_retry_on_startup": True
    }


class ProductionConfig(Config):
    pass


class DevelopmentConfig(Config):
    pass


class TestingConfig(Config):
    TESTING = True
