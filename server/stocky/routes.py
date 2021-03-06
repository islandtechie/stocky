import datetime, urllib, jwt
from jwt.exceptions import ExpiredSignatureError
from flask import request, flash, make_response, jsonify
from flask_cors import cross_origin
from sqlalchemy import exc
from werkzeug.security import generate_password_hash, check_password_hash
from stocky import app, db, ma
from stocky.models import User, UserTrades

@app.route('/login', methods=['POST'])
@cross_origin()
def login():
    responseObject = ''
    try:
        user = User.query.filter_by(email=request.form['email']).first()

        #check user creds
        is_authenticated = check_password_hash(user.password, request.form['password'])
        
        if is_authenticated:
            print('PASS')
            #create token for user
            payload = {
                'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1, seconds=0),
                'iat': datetime.datetime.utcnow(),
                'sub': user.id
            }
            token = jwt.encode(
                payload,
                app.config.get('SECRET_KEY'),
                algorithm='HS256'
            )
            print(bytes.decode(token))
            # return user token 
            responseObject = {
                'status': 'success',
                'message': 'logged in',
                'token': bytes.decode(token),
                'code': 200
            }

    except Exception as e:
        print(e)
        responseObject= {
            'message': 'Please checkl you Email and/or Password.', 
            'code': 404
        }

    return make_response(jsonify(responseObject)), responseObject['code']

@app.route('/buy-stock', methods=['POST'])
@cross_origin()
def buy_stock():
    data = None
    trades = None
    response = None
    print(request.form)
    # if 'x-access-token' in request.headers:
    #     data = request.headers['x-access-token']
    # else:
    #     return "Unauthorized", 401
        
    try:
        data = jwt.decode(data, app.config.get('SECRET_KEY'),algorithm='HS256')

        user =  user = User.query.filter_by(id=data['sub']).first_or_404(description="user does not exist")

        if user:
            #check if user already owns this stock
            #trades = UserTrades.query.filter_by(id=user.id, stock_name='aapl').first()
            trade = UserTrades(
                stock_name = request.form['symbol'],
                stock_price = int(request.form['price']),
                owned = true,
                status = true,
                user_id = user.id,
                created = datetime.datetime.now(),
                updated = datetime.datetime.now()
            )
            
            db.session.add(trade)
            db.session.commit()
            responseObject = {'status': 'success', 'message': 'Trade Successful', 'code': 201}
            return make_response(jsonify(responseObject)), responseObject['code']
    except ExpiredSignatureError as e:
        return 'Something went wrong', 401
    except Exception as e:
        response = {
            'message' : f'{e}'
        }
        return make_response(jsonify(response), 404)



@app.route('/register', methods=['POST'])
def register():

    data = request.form
    
    responseObject = ''

    user = User.query.filter_by(email=data['email']).first()
    print(user)
    if user is None:
        try:
            user = User(email=data['email'],password= generate_password_hash(data['password'], 'sha256'),created=datetime.datetime.now(), updated=datetime.datetime.now(),)
            
            db.session.add(user)
            db.session.commit()
            responseObject = {'status': 'success', 'message': 'Account Created', 'code': 201}
        except Exception as e:
            responseObject = {'status': 'failed', 'message': 'Something went wrong', 'code': 401}
    else:
        responseObject = {
            'status': 'failed',
            'message': 'User already exists.',
            'code' : 404
        }

    return make_response(jsonify(responseObject)), responseObject['code']


