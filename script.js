//var api for main card
const apiKey = "8b5ee27329fcb62e4bd97be8164c9ddd";
const urlApiMainCard = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=odesa&appid=${apiKey}`;

//var api for hours
const urlApiForHour = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=odesa&appid=${apiKey}`;


// var date
const currentDate = new Date()
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();


// func for main card
async function checkWeatherMainCard() {
    try {
        const response = await fetch(urlApiMainCard);
        const data = await response.json();
        console.log(data)
        document.querySelector(".weather-card__temp--title").textContent = Math.round(data.main.temp) + "°";
        document.querySelector(".weather-card__desc").textContent = data.weather[0].description.toUpperCase();
        document.querySelector(".weather-card__location").textContent = data.name;
        document.querySelector(".weather-card__data").textContent = `${day}.${month}.${year}`;
        document.getElementById("feels-like").textContent = Math.round(data.main.feels_like)
        
    } catch(error) {
        console.error(error)
    }
    
}

async function checkWeatherForHours() {
    try {





    } catch(error) {
        console.error(error)

    }
}


// document.querySelector(".mini-forecast--now").textContent = Math.round(data.main.temp)+ "°";
checkWeatherMainCard();