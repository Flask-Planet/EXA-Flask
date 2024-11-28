# EXA-Flask

(EXA, Example)

**This example contains a working example of...**

- Flask
- SQLAlchemy
- SolidJS
- Vite
- Vite-Transporter
- WeeRPC

Check branches, and select an example you're interested in.

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

### Create Database

```bash
flask init-db
```

### Run

Terminal 1:

This will run the Flask server (http://127.0.0.1:6600).

```bash
pyqwe flask
```

Terminal 2:

This will run the Vite server (http://127.0.0.1:6001).

```bash
pyqwe vite
```

Terminal 3:

This will compile the vite app and provide it to the Flask app.

```bash
vt compile
```

