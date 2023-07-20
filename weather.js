
let inputCity = document.querySelector(".input")
let temprature = document.querySelector(".temp")
let feelsLike = document.querySelector(".feels")
let cityName = document.querySelector(".city-name")
let weatherType = document.querySelector(".weather-span-1")

let humidity = document.querySelector(".humidity")
let pressure = document.querySelector(".pressure")
let wind = document.querySelector(".wind")
let visiblity = document.querySelector(".visiblity")
let minTemp = document.querySelector(".minTemp")
let maxTemp = document.querySelector(".maxTemp")

let main = document.querySelector("main")
let weatherIcon = document.querySelector(".weatherType")
let searchIcon = document.querySelector(".searchIcon")

async function checkWeather(city){
    
    const apiKey = "72259316f5ffbbe58905490ab8945725"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const weatherReport = await fetch(`${url}`).then(response=> response.json())

    console.log(weatherReport)
    if(weatherReport.cod === "404"){
        alert("Enter A Vaild City Name")
        return;
    }
    cityName.innerHTML = weatherReport.name+", "+weatherReport.sys.country
    temprature.innerHTML = Math.round(weatherReport.main.temp - 273)+" &#xb0;C"
    feelsLike.innerHTML = "Feels like "+Math.round(weatherReport.main.feels_like - 273)+" &#xb0;C"
    weatherType.innerHTML = weatherReport.weather[0].main

    humidity.innerHTML = weatherReport.main.humidity+"%"
    pressure.innerHTML = weatherReport.main.pressure+"Pha"
    wind.innerHTML = weatherReport.wind.speed+"Km/hr"
    visiblity.innerHTML = weatherReport.visibility/1000+"Kms"
    minTemp.innerHTML = Math.round(weatherReport.main.temp_min - 273)+" &#xb0;C"
    maxTemp.innerHTML = Math.round(weatherReport.main.temp_max - 273)+" &#xb0;C"


    if(weatherReport.weather[0].main =="Clouds"){
       main.style.backgroundImage = `url("img/Clouds.jpg")`
       weatherIcon.src = "./img/icons/cloud.png"
    }
    else if(weatherReport.weather[0].main =="Clear"){
        main.style.backgroundImage = `url("img/Clear.jpg")`
        weatherIcon.src = "./img/icons/sun.png"
    }
    else if(weatherReport.weather[0].main =="Dust"){
        main.style.backgroundImage = `url("img/Dust.jpg")`
        weatherIcon.src = "./img/icons/cloudsun1.png"
    }
    else if(weatherReport.weather[0].main =="Mist"){
        main.style.backgroundImage = `url("img/Mist.jpg")`
        weatherIcon.src = "./img/icons/cloudsun1.png"
   }
    else if(weatherReport.weather[0].main =="Snow"){
        main.style.backgroundImage = `url("img/Snow.jpg")`
        weatherIcon.src = "./img/icons/cloud.png"
   }
    else if(weatherReport.weather[0].main =="Rain"){
        main.style.backgroundImage = `url("img/Rain.jpg")`
        weatherIcon.src = "./img/icons/rain.png"
   }
    else if(weatherReport.weather[0].main =="Thunderstorm" || weatherReport.weather[0].main =="Storm"){
        main.style.backgroundImage = `url("img/Thunder.jpg")`
        weatherIcon.src = "./img/icons/thunder.png"
   }
    else{
        main.style.backgroundImage = `url("img/default.webp")`
        weatherIcon.src = "./img/icons/cloudsun.png"
   }

}

searchIcon.addEventListener('click',()=>{
    checkWeather(inputCity.value)
})