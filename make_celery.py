from pathlib import Path

from app import create_app

# Create instance directory
instance_dir = Path(__file__).parent / "app" / "instance"
instance_dir.mkdir(exist_ok=True)

flask_app = create_app()
celery_app = flask_app.extensions["celery"]
