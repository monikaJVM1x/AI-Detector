# 🧠 AI-Detector: Multimodal Bite Risk Assessment System

Cutis-AI is an AI-powered healthcare assistance system designed to analyze skin images and provide early risk assessment for **insect bites and snake bites**. The system uses **deep learning and multimodal inputs (image + symptoms)** to assist in identifying bite types and suggesting medical guidance.

---

## 📌 Overview

Bites from insects and snakes can lead to serious medical complications if not identified early. Traditional diagnosis requires expert examination and laboratory tests, which may not always be accessible.

🚑 **Cutis-AI aims to provide a fast preliminary assessment using computer vision and machine learning.**

---

## 🧩 System Workflow

📷 Image Capture (Mobile Camera)
⬇
🧹 Image Preprocessing
⬇
🧠 Feature Extraction using CNN
⬇
📝 Symptom Input Processing
⬇
🔗 Multimodal Feature Fusion
⬇
📊 Bite Classification
⬇
⚠️ Risk Assessment & Medical Advice

---

## 🚀 Features

✅ Image-based bite detection using deep learning
✅ Multimodal analysis (image + symptom data)
✅ Classification categories:

* 🟢 Normal Skin
* 🐜 Insect Bite
* 🐍 Snake Bite

✅ Risk level estimation
✅ Medical guidance suggestions
✅ Lightweight AI model for mobile environments

---

## 🤖 AI Model

⚙️ Transfer Learning with **MobileNetV2 / EfficientNet**

📊 Model Pipeline:

📷 Input Image
⬇
🧠 Pretrained CNN (Feature Extraction)
⬇
🧮 Dense Layers
⬇
📈 Softmax Classification Layer

Output:

```id="nbh2tb"
Normal Skin
Insect Bite
Snake Bite
```

---

## 📂 Dataset

Dataset categories:

📁 normal
📁 insect_bite
📁 snake_bite

Images are collected from:

🌐 Public medical datasets
📚 Dermatology image libraries
🔬 Open medical resources

🧪 Data augmentation techniques used:

* rotation
* zoom
* flipping
* brightness adjustment

---

## 📊 Evaluation Metrics

Model performance is evaluated using:

📈 Accuracy
🎯 Precision
🔍 Recall
⚖️ F1 Score
📊 Confusion Matrix

Expected performance:

```id="nfl1zb"
Accuracy: 80% – 90%
```

---

## 🛠️ Technologies Used

🐍 Python
🧠 TensorFlow / Keras
⚡ FastAPI
📷 Computer Vision
🤖 Deep Learning
🌐 Git & GitHub

---

## 📱 Future Improvements

🔬 Add skin disease detection
🐍 Identify specific snake species
📱 Real-time mobile deployment
📊 Expand dataset size
🏥 Integration with healthcare systems

---

## ⚠️ Disclaimer

This system is developed for **educational and research purposes only** and should not replace professional medical diagnosis.

---

## 👨‍💻 Author

Developed as part of an **AI-based healthcare research project**.
