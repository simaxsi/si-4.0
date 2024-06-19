function boton_si(){
    navigator.mediaDevices.getUserMedia({ audio: true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/MCtZIz67i/model.json",si)
}

function si(){
    classifier.classify(no);
}

function no(error,a){
    if (error) {
        console.log(error);
    } else {
        console.log(a);
        document.getElementById(
            "si"
        ).innerHTML=a[0].label;
        document.getElementById("melon").innerHTML=a[0].confidence;
        var uva=document.getElementById("sandia");
        var naranja=document.getElementById("piña");
        var fresa=document.getElementById("pera");
        var mora=document.getElementById("mango");
        if(a[0].label=="engrapadora"){
            uva.src="aliens-01.gif";
            naranja.src="aliens-02.png";
            fresa.src="aliens-03.png";
            mora.src="aliens-04.png";
        }
        if(a[0].label=="alcancia"){
            naranja.src="aliens-02.gif";
            uva.src="aliens-01.png";
            fresa.src="aliens-03.png";
            mora.src="aliens-04.png";
        }
        if(a[0].label=="Ruido de fondo"){
            fresa.src="aliens-03.gif";
            naranja.src="aliens-02.png";
            uva.src="aliens-01.png";
            mora.src="aliens-04.png";
        }
        if(a[0].label=="vapopatch"){
            mora.src="aliens-04.gif";
            naranja.src="aliens-02.png";
            fresa.src="aliens-03.png";
            uva.src="aliens-01.png";
    }
}
}
