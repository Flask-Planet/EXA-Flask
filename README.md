# EXA-Flask

(EXA, Example)

**This example contains a working example of...**

- Flask
- TailwindCSS

Check branches, and select an example you're interested in.

### Attribution

[CheeseCake87 (David Carmichael)](https://github.com/CheeseCake87)

### License

See: [LICENSE](LICENSE)

Viewing the source code of this project acknowledges that you have read and understood the license.

### Celery Routes

#### Start a task that adds two numbers

`http://127.0.0.1:5000/celery_blueprint/add/<int:a>/<int:b>`

#### Loop a number of tasks (warning: this will create a task that sleeps for a range(1, total))

`http://127.0.0.1:5000/celery_blueprint/process/<int:total>`

#### Check the progress of a task

`http://127.0.0.1:5000/celery_blueprint/check_task/<_id>`

`add` and `process` will return a task id that can be used to check the progress of the task.

### Setup

(This assumes you have Python and Node installed)

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

#### npm

```bash
npm install
```

### Run

Terminal 1:

```bash
flask run --debug
```

Terminal 2:

```bash
npx tailwindcss -i ./tailwindcss/index.css -o ./app/static/index.css --watch
```