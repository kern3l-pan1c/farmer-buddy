from app import app, models, models_rain, crops, soils
from flask import request, Response
import json
from datetime import datetime


@app.route('/')
@app.route('/index')
def index():
    return "Invalid call. Do not mess with this app."


@app.route('/crop_list', methods=['POST'])
def get_crop_list_for_dist():
    data = json.loads(request.data)
    location = json.loads(data['location'])
    print(data)
    state = location['administrativeArea'].lower()
    dist = location['subAdministrativeArea'].lower().replace('bangalore', 'bengaluru')
    dist_name = state + '_' + dist
    crop_list = crops.get(dist_name, None)
    print(crop_list)
    return Response(status=200, response=json.dumps(crop_list))


@app.route('/soil_list', methods=['POST'])
def get_soil_list_for_dist():
    print(request.data)
    data = json.loads(request.data)
    location = json.loads(data['location'])
    print(data)
    state = location['administrativeArea'].lower()
    dist = location['subAdministrativeArea'].lower().replace('bangalore', 'bengaluru')
    dist_name = state + '_' + dist
    soil_list = soils.get(dist_name, None)
    return Response(status=200, response=json.dumps(soil_list))


@app.route('/yield/unsure', methods=['POST'])
def predict_all():
    data = json.loads(request.data)
    print(data)
    location = json.loads(data['location'])
    state = location['administrativeArea'].lower()
    dist = location['subAdministrativeArea'].lower().replace('bangalore', 'bengaluru')
    area = float(data['area'])
    soil = data['soil']
    year = datetime.utcnow().year
    dist_name = state + '_' + dist
    model = models.get(dist_name, None)
    model_rain = models_rain.get(dist_name, None)
    crop_list = crops.get(dist_name, None)
    soil_list = soils.get(dist_name, None)
    rain_pred = model_rain.predict([[year, 0, 1]])
    rain = rain_pred[0][0]
    temp = rain_pred[0][1]
    response_dict = {}
    soil_val = {}
    for s in soil_list:
        if s == soil:
            soil_val[s] = 1
        else:
            soil_val[s] = 0
    for crop in crop_list:
        crop_val = {}
        for c in crop_list:
            if c == crop:
                crop_val[c] = 1
            else:
                crop_val[c] = 0
        pred_list = [[area, rain, temp, 0, 1]]
        for c in crop_list:
            pred_list[0].append(crop_val[c])
        for s in soil_list:
            pred_list[0].append(soil_val[s])
        yeild_pred = model.predict(pred_list)
        response_dict[crop] = yeild_pred.tolist()[0]
    return Response(status=200, response=json.dumps(response_dict))


@app.route('/yield/sure', methods=['POST'])
def predict_crop():
    print(request.data)
    data = json.loads(request.data)
    location = json.loads(data['location'])
    print(data)
    state = location['administrativeArea'].lower()
    dist = location['subAdministrativeArea'].lower().replace('bangalore', 'bengaluru')
    if dist == 'bangalore' or dist == 'bengaluru':
        dist = 'bengaluru urban'
    area = float(data['area'])
    crop = data['crop']
    soil = data['soil']
    year = datetime.utcnow().year
    dist_name = state + '_' + dist
    model = models.get(dist_name, None)
    model_rain = models_rain.get(dist_name, None)
    crop_list = crops.get(dist_name, None)
    soil_list = soils.get(dist_name, None)
    crop_val = {}
    for c in crop_list:
        if c == crop:
            crop_val[c] = 1
        else:
            crop_val[c] = 0
    soil_val = {}
    for s in soil_list:
        if s == soil:
            soil_val[s] = 1
        else:
            soil_val[s] = 0
    rain_pred = model_rain.predict([[year, 0, 1]])
    rain = rain_pred[0][0]
    temp = rain_pred[0][1]
    pred_list = [[area, rain, temp, 0, 1]]
    for c in crop_list:
        pred_list[0].append(crop_val[c])
    for s in soil_list:
        pred_list[0].append(soil_val[s])
    yeild_pred = model.predict(pred_list)
    response_dict = dict({crop: yeild_pred.tolist()[0]})
    return Response(status=200, response=json.dumps(response_dict))
