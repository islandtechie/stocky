import datetime
from flask import request
from werkzeug.security import generate_password_hash, check_password_hash
from stocky import app, db, ma
from marshmallow import ValidationError
from stocky.models import User, UserSchema

@app.route('/login', methods=['POST'])
def login():
    print(request.form)
    return 'hello'

@app.route('/register', methods=['POST'])
def register():
    data = request.form
    if data['password'] == data['password2']:
        user = User(
            email=data['username'],
            password=data['password'],
            created=datetime.datetime.now(),
            updated=datetime.datetime.now()
        )

        try:
        
            db.session.add(user)
            db.session.commit()

            return 'added'
        except:
            db.session.rollback()
    return data