from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import os

app = Flask(__name__)

# Enable CORS
CORS(app)

# Load model
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(BASE_DIR, "..", "model", "bite_model.h5")

model = tf.keras.models.load_model(model_path)

classes = ["Insect Bite", "Normal Skin", "Snake Bite"]

@app.route("/")
def home():
    return "AI Health Risk Detection Backend Running"


def predict_image(image):
    img = image.resize((224,224))
    img = np.array(img)/255.0
    img = np.expand_dims(img, axis=0)

    prediction = model.predict(img)
    result = classes[np.argmax(prediction)]

    return result


@app.route("/predict", methods=["POST"])
def predict():

    file = request.files["image"]
    image = Image.open(file)

    result = predict_image(image)

    return jsonify({"prediction": result})


if __name__ == "__main__":
    app.run(debug=True)