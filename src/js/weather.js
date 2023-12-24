import { config } from "./config";

handleCurrentWeatherData();
async function getWeatherData() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=	51.5142449&lon=7.468429&
    &units=${config.units}&lang=de&appid=${config.api_key}`
  );
  const data = response.json();
  return data;
}

async function handleCurrentWeatherData() {
  const data = await getWeatherData();

  const currentTemp = data.current.temp;
  const currentDescription = data.current.weather[0].description;
  const currentIconId = data.current.weather[0].icon;

  setCurrentWeather(currentTemp, currentDescription, currentIconId);
  display(data);
}

function setCurrentWeather(temp, description, iconId) {
  const iconElement = document.querySelector(".weatherIcon");
  const tempElement = document.querySelector(".weatherValue p");
  const descElement = document.querySelector(".weatherDescription p");
  const icon = require("../icons/" + iconId + ".png");
  iconElement.src = icon;
  tempElement.innerHTML = `${temp.toFixed(0)} - °<span class="g">c</span> `;
  descElement.innerHTML = description;
}

async function display(data) {
  // Console log the data in another function, because Promises ¯\_(ツ)_/¯
  const log = await data;
  console.log(log);
}
