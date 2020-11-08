window.addEventListener('load',()=>{
let long;
let lat;
let temperatureDescription=document.querySelector(".temperature-description");
let temperatureDegree=document.querySelector(".temperature-degree");
let locationTimezone=document.querySelector(".location-timezone");
let temperatureSection=document.querySelector(".temperature");
const temperatureSpan=document.querySelector(".temperature span")
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(
      position=>{
          long=position.coords.longitude;
          lat=position.coords.latitude;
          
         const api = `http://api.weatherapi.com/v1/current.json?key=080b2d2bd9944d6b981170428202310&q=${lat},${long}`;
         fetch(api)
        .then(response=>{
            return response.json();
        }) .then(data=>{
            console.log(data);
            const {temp_c,temp_f,condition}=data.current;
            const {name,region}=data.location;
            temperatureDegree.textContent=temp_f;
            temperatureDescription.textContent = condition.text;
            locationTimezone.textContent = name+"/"+region;
           temperatureSection.addEventListener("click",()=>{
           
               if(temperatureSpan.textContent==="F"){
                   temperatureSpan.textContent= "C";
                   temperatureDegree.textContent=temp_c;
               }
              else{
                  temperatureSpan.textContent="F";
                  temperatureDegree.textContent=temp_f;
              }
           });





            setIcon(condition.icon,document.querySelector(".icon"))
            function setIcon(icon,code){

                return(condition.icon,condition.code);
            }
        });
 
        });
        
}else{
    h1.textContent="not working"}
});