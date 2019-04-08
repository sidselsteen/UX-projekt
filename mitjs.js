var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

function hentData(url, callback_Funktion) {
    var xhttp = new XMLHttpRequest(); 
    xhttp.open("GET", url, true);
    xhttp.send();
    
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callback_Funktion(this);
        }
    };
}

function visData(jsonData) {
    var jsonElementer = JSON.parse(jsonData.responseText);
    var divIndhold = ""; 
    var raad = "";
         
    
    if (jsonElementer.weather[0].main === "Rain") {
        raad = 'Husk din paraply';
    } else {
        raad = 'Tag solcreme på';
    }
    
        divIndhold += '<p> Den nuværende tempratur i Århus: ' +
            jsonElementer.main.temp + ' Den nuværende vindhastighed: ' + jsonElementer.wind.speed +
            '</p>' + '<p>' + raad + '</p>';
        
    document.getElementById("vejrindhold").innerHTML = divIndhold; 
    
    document.getElementById("vejrindhold").insertAdjacentHTML('beforeEnd','<img src="'+jsonElementer.weather[0].icon+'.png"alt="'+ jsonElementer.weather[0].description +'">');
    
}


//Hovedprogramdel

hentData("http://api.openweathermap.org/data/2.5/weather?q=Aarhus%2Cdk&APPID=0c04386dc80ef40708a40b4cda8a402c&fbclid=IwAR0B0KX0ycyyvjeCwLikQ0_S8AJulvbUsuNKi8psKAd8VBryVr12_agtYug", visData);