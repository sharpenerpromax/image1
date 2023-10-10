


camera = document.getElementById("camera");

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality: 90
});
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri) { 
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; 
    });
}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/w-1No6Zbt/model.json',modelLoaded);

function modelLoaded(){
    console.log("Modelo cargado")
}

function check(){
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error)
    } else {
        console.log(results)
        console.log(results[0].label);
        console.log(results[0].confidence);

        document.getElementById("result_object_name").innerHTML = results[0].label
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence
    }
}
