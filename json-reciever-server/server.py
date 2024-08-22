from flask import Flask, request, jsonify
import json
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Ensure the JSON data file exists
DATA_FILE = 'media_data.json'
if not os.path.exists(DATA_FILE):
    with open(DATA_FILE, 'w') as file:
        json.dump([], file)

@app.route('/api/save_media', methods=['POST'])
def save_media():
    data = request.get_json()
    
    # Append the new data to the existing JSON file
    with open(DATA_FILE, 'r+') as file:
        file_data = json.load(file)
        file_data.append(data)
        file.seek(0)  # Move the cursor to the beginning of the file
        json.dump(file_data, file, indent=4)
    
    return jsonify({"status": "success", "message": "Data saved successfully"}), 200

@app.route('/api/get_media', methods=['GET'])
def get_media():
    # Return the entire JSON data from the file
    with open(DATA_FILE, 'r') as file:
        file_data = json.load(file)
    
    return jsonify(file_data), 200

if __name__ == '__main__':
    app.run(debug=True)  # Runs the server in debug mode
