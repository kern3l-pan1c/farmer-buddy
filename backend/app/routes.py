from app import app
from flask import request, Response
import json

@app.route('/')
@app.route('/index')
def index():
    return "Invalid call. Do not mess with this app."

@app.route('/yield/unsure',methods=['POST'])
def predict_all():
    # TODO add prediction algorithm here
    print(request.data)
    response_dict = dict({'data': 'you reached api'})
    return Response(status=200, response=json.dumps(response_dict))