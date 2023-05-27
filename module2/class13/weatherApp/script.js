const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

let target = "London"

form.addEventListener("submit",function(e){
    e.preventDefault();
    target = searchField.value;
    console.log(target);
    fetchData(target);
})


async function fetchData(target){
    try{
        let url = `https://api.weatherapi.com/v1/current.json?key=882f1adb930a45d7852160114232705&q=${target}&aqi=no`
        let response = await fetch(url);
        // console.log(response);
        let data = await response.json();
        // console.log(data);
        let currentTemp = data.current.temp_c;
        let currentCondition = data.current.condition.text;
        let locationName = data.location.name
        let localTime = data.location.localtime
        let conditionEmoji = data.current.condition.icon
        // console.log(locationName,currentTemp,currentCondition,localTime,conditionEmoji);
        updateDOM(currentTemp,locationName,localTime,conditionEmoji,currentCondition)
    }
    catch(error){
        console.log(error);
    }
}

function updateDOM(temp,locationName,time,emoji,condition){
    // console.log(time);
    // console.log(time.split(" "));
    let exactTime = time.split(" ")[1];
    let exactDate = time.split(" ")[0];
    // console.log(exactDate);
    let countOfDay = new Date(exactDate).getDay();
    // console.log(countOfDay);
    let nameOfDay = getNameOfDay(countOfDay);
    console.log(nameOfDay);
    dateField.innerText = `${exactTime} ${nameOfDay} ${exactDate}`
    temperatureField.innerText = temp;
    cityField.innerText = locationName;
    emojiField.src = emoji;
    weatherField.innerText = condition;
}

let dayObject = {
    0:"Sunday",
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday",
    4:"Thursday",
    5:"Friday",
    6:"Saturday"
}

function getNameOfDay(num){
    // return dayObject[num];

    switch(num){
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday"
        default:
            return "Don't Know" 
    }
    
}


fetchData(target);

