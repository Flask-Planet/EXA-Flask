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

### Info

This example contains a Flask context_processor that
is used to prevent caching of the CSS file that
tailwindcss generates.

The context_processor is located in `app/__init__.py`.

And is used like `{{ url_for('static', filename='index.css') }}{{ no_cache() }}`

`no_cache()` will append the current date, time (with secs) onto the end of the CSS f
ile only if Flask is in debug mode.

### Run

Terminal 1:

```bash
flask run --debug
```

Terminal 2:

```bash
npx tailwindcss -i ./tailwindcss/index.css -o ./app/static/index.css --watch
```