let input = document.getElementById("imageInput");
let preview = document.getElementById("preview");

input.addEventListener("change", function(){
    preview.src = URL.createObjectURL(input.files[0]);
});

function predict(){

let file = document.getElementById("imageInput").files[0];

let formData = new FormData();
formData.append("image", file);

fetch("http://127.0.0.1:5000/predict",{
method:"POST",
body:formData
})

.then(response => response.json())

.then(data => {

document.getElementById("result").innerText =
"Prediction: " + data.prediction;

})

.catch(error => {

document.getElementById("result").innerText =
"Error connecting to backend";

});

}