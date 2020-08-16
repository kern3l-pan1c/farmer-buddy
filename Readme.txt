1. Checkout the codebase from https://github.com/kern3l-pan1c/farmer-buddy at a desired location.

(For this setup, we assume the codebase is checked out at C:\farmer_buddy) 


###########################################
# Setting up the backend python Flask app #
###########################################

1. Install python from https://www.python.org/downloads/
2. Open a command prompt and navigate to the check put folder using command -> cd C:\farmer_buddy
3. Install the python virtual environment package using command -> pip install virtualenv
4. Create a virtual environment using command -> virtualenv venv
5. Activate the virtual environment using the command -> venv\Scripts\activate
6. Navigate to flask app directory using command -> cd backend
7. Install the project dependencies using the command -> pip install -r requirements.txt
8. Set the flask app using command -> set FLASK_APP=farmer_buddy.py
9. Note the IP address of your machine using command -> ipconfig
10. Start the flask server using command -> flask run --host=0.0.0.0



######################################
# Setting up the Front end ionic app #
######################################

1. Install node.js from https://nodejs.org/en/download/
2. Install ionic using command ->  npm install -g @ionic/cli --save
3. Install cordova using command -> npm install -g cordova
4. Install native run using command -> npm install -g native-run
5. Navigate to ionic app folder using command -> cd C:\farmer_buddy\frontend\myApp
6. Install project dependencies using commad -> npm install
7. Install all ionic plugins by using the following commands
		ionic cordova plugin add cordova-plugin-android-permissions
		ionic cordova plugin add cordova-plugin-request-location-accuracy
		ionic cordova plugin add cordova-plugin-geolocation
		ionic cordova plugin add cordova-plugin-nativegeocoder
8. Add android platform to the app using command -> ionic cordova platform add android
9. Open file C:\farmer_buddy\frontend\myApp\src\app\config.ts in a text editor and replace "192.168.43.59" with the IP address of your machine; and save the file.
10. Install native android SDKs for Windows.
11. Connect an android phone to your machine using USB. (Make sure developer mode and USB debugging is enabled on your phone. Also, the phone should be on the same network as the running flask app)
12. Build the application using the command -> ionic cordova build android
13. Run the application on your phone using -> ionic cordova run android --ssl (Make sure your phone is not locked/on standby mode)



This repository is authored by: Kumar Shaurya (https://github.com/kern3l-pan1c), Karuna Rohilla (https://github.com/KarunaRohilla1), Anmol (https://github.com/Anmol-Mehta97) and B R Aishwayra (https://github.com/Aishwarya-br)
