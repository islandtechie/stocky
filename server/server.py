from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SECRET_KEY'] = 'FE2F7488321C5D9C7063441D7882E8ADE772179B36C2F'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:secret123@localhost/trading'

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(), nullable=False)
    created = db.Column(db.DateTime)
    updated = db.Column(db.DateTime)

    def __repr__(self):
        return F"User('{self.email}')"

@app.route('/login', methods=['POST'])
def login():
    print(request)
    return 'hello'