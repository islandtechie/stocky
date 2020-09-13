from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow


app = Flask(__name__)
app.config['SECRET_KEY'] = 'FE2F7488321C5D9C7063441D7882E8ADE772179B36C2F'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:secret123@localhost/trading'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

from stocky import routes
