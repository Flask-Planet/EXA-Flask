# EXA-Flask

(EXA, Example)

**This example contains a working example of...**

- Flask
- Celery
- Gunicorn
- Supervisor
- Docker

Check branches, and select an example you're interested in.

### Celery Routes

#### Start a task that adds two numbers

`http://127.0.0.1:5000/celery_blueprint/add/<int:a>/<int:b>`

#### Loop a number of tasks (warning: this will create a task that sleeps for a range(1, total))

`http://127.0.0.1:5000/celery_blueprint/process/<int:total>`

#### Check the progress of a task

`http://127.0.0.1:5000/celery_blueprint/check_task/<_id>`

`add` and `process` will return a task id that can be used to check the progress of the task.

### Setup

(This assumes you have Python installed)

#### Linux/Darwin

```bash 
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

#### Windows

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

### .env

You will need to create a `.env` file in the root 
of the project. 

There is an example `.env.example` 
file to help you get started.


### Run

Terminal 1:

```bash
gunicorn
```

Terminal 2:

```bash
celery -A make_celery worker --loglevel=info
```

### Docker

```bash
docker-compose up --build -d
```
