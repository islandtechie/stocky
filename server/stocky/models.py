from stocky import db
from stocky import ma

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(), nullable=False)
    created = db.Column(db.DateTime)
    updated = db.Column(db.DateTime)

    def __repr__(self):
        return F"User('{self.email}')"

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User


class UserTrades(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    stock_name = db.Column(db.String(6), nullable=False)
    stock_price = db.Column(db.Integer, nullable=False)
    owned = db.Column(db.Boolean, nullable=False)
    status = db.Column(db.Boolean, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    created = db.Column(db.DateTime)
    updated = db.Column(db.DateTime)

