from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import os

app = Flask(__name__)
CORS(app)

# Get correct model path
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(BASE_DIR, "..", "model", "bite_model.h5")

# Load trained model
model = tf.keras.models.load_model(model_path)

# Class labels
classes = ["Insect Bite", "Normal Skin", "Snake Bite"]


@app.route("/")
def home():
    return "AI Health Risk Detection Backend Running"


def predict_image(image):

    img = image.resize((224,224))
    img = np.array(img) / 255.0
    img = np.expand_dims(img, axis=0)

    prediction = model.predict(img)

    index = np.argmax(prediction)
    confidence = float(prediction[0][index])

    result = classes[index]

    # Risk calculation
    if result == "Normal Skin":
        risk = "No Risk"
    else:
        if confidence > 0.75:
            risk = "High Risk"
        elif confidence > 0.50:
            risk = "Medium Risk"
        else:
            risk = "Low Risk"

    # Emergency alert
    alert = ""
    if result == "Snake Bite" and risk == "High Risk":
        alert = "⚠️ EMERGENCY: Possible venomous snake bite. Seek medical help immediately."

    return result, risk, confidence, alert


@app.route("/predict", methods=["POST"])
def predict():

    file = request.files["image"]
    image = Image.open(file)

    result, risk, confidence, alert = predict_image(image)

    return jsonify({
        "prediction": result,
        "risk": risk,
        "confidence": confidence,
        "alert": alert
    })


if __name__ == "__main__":
    app.run(debug=True)