function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Ui2OBLJcq/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else {
        random_number_r=Math.floor(Math.random()*225)+1;
        random_number_g=Math.floor(Math.random()*225)+1;
        random_number_b=Math.floor(Math.random()*225)+1;
        console.log(results);
        document.getElementById("result_label").innerHTML="I Can Hear- "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        img1=document.getElementById("animal_image");


        if(results[0].label=="barking"){
            img1.src="Barking.gif";
        }
        if(results[0].label=="meowing"){
            img1.src="meowing.gif";
        }
        if(results[0].label=="mooing"){
            img1.src="mooing.gif";
        }
        else{     
            img1.src="background-noise.gif";
 }
        
    }
}
