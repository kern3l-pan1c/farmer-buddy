from flask import Flask
from flask_cors import CORS
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from copy import deepcopy
from pprint import pprint

app = Flask(__name__)
CORS(app)
data = pd.read_csv('app/dataset/data.csv')
models = dict()
models_rain = dict()
crops = dict()
soils = dict()
seasons = dict()
states = data.groupby(by='State')
for state, state_data in states:
    district = state_data.groupby(by='District')
    for dist, dist_data in district:
        dist_data_orig = deepcopy(dist_data)
        del dist_data['Year']
        df_data = pd.get_dummies(dist_data, drop_first=True)
        col_y = 'Production'
        X = df_data.drop(col_y, axis=1)
        X = X.fillna(X.mean())
        y = df_data[col_y]
        y = y.fillna(y.mean())
        crop = []
        soil = []
        season = []
        for col in X.columns:
            if str(col).startswith('Crop'):
                crop.append(str(col).split('_')[1])
            if str(col).startswith('SoilType'):
                soil.append(str(col).split('_')[1])
            if str(col).startswith('Season'):
                season.append(str(col).split('_')[1])
        # X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42)
        model = RandomForestRegressor(n_estimators=100, random_state=20)
        model.fit(X, y)
        del dist_data_orig['Crop']
        del dist_data_orig['Area']
        del dist_data_orig['Production']
        del dist_data_orig['SoilType']
        df_data = pd.get_dummies(dist_data_orig, drop_first=True)
        col_y = ['Avg Rainfall', 'Avg Temperature']
        X = df_data.drop(col_y, axis=1)
        X = X.fillna(X.mean())
        y = df_data[col_y]
        y = y.fillna(y.mean())
        model_rain = RandomForestRegressor()
        model_rain.fit(X, y)
        dist_name = (state + '_' + dist).lower()
        models[dist_name] = model
        models_rain[dist_name] = model_rain
        crops[dist_name] = crop
        soils[dist_name] = soil
        seasons[dist_name] = season

from app import routes
