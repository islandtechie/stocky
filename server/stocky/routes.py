import datetime
import urllib
from flask import request, flash, make_response
from flask_cors import cross_origin
import jwt
from sqlalchemy import exc
from werkzeug.security import generate_password_hash, check_password_hash
from stocky import app, db, ma
from stocky.models import User

@app.route('/login', methods=['POST'])
@cross_origin()
def login():

    try:
        user = User.query.filter_by(email=request.form['email']).first_or_404()

        #check user creds
        if (user and check_password_hash(user.password, request.form['password'])):
            #create token for user
            payload = {
                'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, seconds=5),
                'iat': datetime.datetime.utcnow(),
                'sub': user.id
            }

            token = jwt.encode(
                payload,
                app.config.get('SECRET_KEY'),
                algorithm='HS256'
            )
            #return user token 
            response = {
                'status': 'sucess',
                'message': 'logged in',
                'token': token
            }
            return response
    except Exception as e:
        print(f"hello {e}".format(e))
        return 'Please check you Email and/or Password.', 404
    

# if user:
    
#     return 'user exists', 200
# else:
#     return 'Please Check Your credentials', 404
    return 'something'

@app.route('/register', methods=['POST'])
def register():
    data = request.form

    user = User.query.filter_by(email=request.form['email']).first()

    if user is not None;
         user = User(
            email=data['email'],
            password= generate_password_hash(data['password'], method='pbkdf2:sha256', salt_length=12),
            created=datetime.datetime.now(),
            updated=datetime.datetime.now()
        )

        db.session.add(user)
        db.session.commit()

        responseObject = {
            'status': 'success',
            'message': 'Successfully registered.'
        }

        return make_response(jsonify(responseObject)), 201

    else:
        response = {
                'status': 'failed',
                'message': 'User already exist'
        }

        return response

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

