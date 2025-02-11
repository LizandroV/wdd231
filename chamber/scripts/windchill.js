const api = {
    key: "0d3d43ff64c667b6eb270ea5a34612b5",
    url: "https://api.openweathermap.org/data/2.5/weather"
}

async function getWeather(city){
    try{
        const response = await fetch(`${api.url}?q=${city}&appid=${api.key}&lang=en`)
        const data = await response.json();

        weather.innerHTML = toCelsius(data.main.temp);
        outside.innerHTML = data.weather[0].description;
        wind.innerHTML = data.wind.speed;
    }   
    catch(err){
        console.log(err);
    }
}

getWeather("Lima")

const weather = document.getElementById("current");
const outside = document.getElementById("outside");
const wind = document.getElementById("wind");

function toCelsius(kelvin){
    return Math.round(kelvin - 273.15);
}