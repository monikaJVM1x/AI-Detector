/* Image preview */

let input = document.getElementById("imageInput");
let preview = document.getElementById("preview");

input.addEventListener("change", function(){

if(input.files && input.files[0]){
preview.src = URL.createObjectURL(input.files[0]);
}

});


/* Predict function */

function predict(){

let file = document.getElementById("imageInput").files[0];

if(!file){
alert("Please upload an image");
return;
}

let formData = new FormData();
formData.append("image", file);


/* Send request to Flask backend */

fetch("http://127.0.0.1:5000/predict",{
method:"POST",
body:formData
})

.then(response => {

if(!response.ok){
throw new Error("Server error");
}

return response.json();

})

.then(data => {


/* Show prediction */

document.getElementById("prediction").innerText =
"Prediction: " + data.prediction;


/* Risk circle */

let riskCircle = document.getElementById("riskCircle");
let riskText = document.getElementById("riskText");

riskText.innerText = data.risk;


/* Highlight risk segment */

if(data.risk === "Low Risk"){

riskCircle.style.background =
"conic-gradient(#4CAF50 0deg 120deg,#ddd 120deg 360deg)";

}

else if(data.risk === "Medium Risk"){

riskCircle.style.background =
"conic-gradient(#ddd 0deg 120deg,#FF9800 120deg 240deg,#ddd 240deg 360deg)";

}

else if(data.risk === "High Risk"){

riskCircle.style.background =
"conic-gradient(#ddd 0deg 240deg,#f44336 240deg 360deg)";

}


/* Confidence */

document.getElementById("confidence").innerText =
"Confidence: " + (data.confidence * 100).toFixed(2) + "%";


/* Emergency alert */

let alertBox = document.getElementById("emergency");

if(data.prediction === "Snake Bite"){

alertBox.style.display = "block";

alertBox.innerText =
"⚠ Snake bite detected! Please go to the nearest hospital immediately.";

}

else{

alertBox.style.display = "none";

}

})

.catch(error => {

console.error("Error:", error);

alert("Error connecting to backend. Make sure Flask server is running.");

});

}


/* Find nearby hospitals */

function findHospital(){

window.open(
"https://www.google.com/maps/search/hospitals+near+me",
"_blank"
);

}