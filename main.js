"use strict"

const key = "80d2ff5f959352f4319d73dc1f0171ce"
 const weatherDiv = document.querySelector("#weather")
 let weatherResponse = "waiting..."
 weatherDiv.innerText= weatherResponse
 const tempDiv = document.querySelector("#temp")
 let tempResponse="waiting..."
 tempDiv.innerText= tempResponse
 const windDiv = document.querySelector("#wind")
 let windResponse="Waiting..."
 windDiv.innerText= windResponse
 const humDiv= document.querySelector("#hum")
 let humResponse="waiting..."
 humDiv.innerText=humResponse
 let city_select
 








 function getWeather(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city_select},gr&lang=el&units=metric&appid=${key}`,
    {method: 'GET'}
    )
      .then(response => response.json())
      .then(json => {
         weatherDiv.innerText = json.weather[0].description;
         tempDiv.innerHTML=`${json.main.temp} <sup>o</sup>c `;
         windDiv.innerText=`Wind: ${json.wind.speed} Km/h`; 
         humDiv.innerText=`dampness: ${json.main.humidity}%`;    
         } )
      .then(setWeatherText())
      .catch(error => console.error('error:' ,error))
   }

function setWeatherText(){
   weatherDiv.innerText=weatherResponse;
   tempDiv.innerText=tempResponse;
   windDiv.innerText=windResponse;
   humDiv.innerText=humResponse;

}


function myFunction(){
   city_select=  document.getElementById("city").value;
   getWeather()
   document.querySelector("#h2").innerText=`Weather in ${city_select}`

}


function showTime(){
   var date = new Date();
   var h = date.getHours(); // 0 - 23
   var m = date.getMinutes(); // 0 - 59
   var s = date.getSeconds(); // 0 - 59
   var session = "AM";
   
   if(h == 0){
       h = 12;
   }
   
   if(h > 12){
       h = h - 12;
       session = "PM";
   }
   
   h = (h < 10) ? "0" + h : h;
   m = (m < 10) ? "0" + m : m;
   s = (s < 10) ? "0" + s : s;
   
   var time = h + ":" + m + ":" + s + " " + session;
   document.getElementById("MyClockDisplay").innerText = time;
   document.getElementById("MyClockDisplay").textContent = time;
   
   setTimeout(showTime, 1000);
   
}

showTime();
