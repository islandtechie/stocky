import datetime
import urllib
from flask import request, flash
from flask_cors import cross_origin
from sqlalchemy import exc
from werkzeug.security import generate_password_hash, check_password_hash
from stocky import app, db, ma
from stocky.models import User

@app.route('/login', methods=['POST'])
@cross_origin()
def login():

        user = User.query.filter_by(email=request.form['email']).first()

        if user:
            print('hello')
            return 'user exists', 200
        else:
            return 'Please Check Your credentials', 404

@app.route('/register', methods=['POST'])
def register():
    data = request.form
    return 'you made it'

    # user = User(
    #     email=data['email'],
    #     password= generate_password_hash(data['password'], method='pbkdf2:sha256', salt_length=12),
    #     created=datetime.datetime.now(),
    #     updated=datetime.datetime.now()
    # )

    # try:
    #     db.session.add(user)
    #     db.session.commit()

    #     return 'User created sucessfully', 201

    # except exc.DBAPIError as e:
    #     print(e.)
    #     return 'Please try again. SOmething went wrong', 500

    #     pass

