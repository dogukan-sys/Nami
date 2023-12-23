import { config } from "./config";

exportWeatherData();

async function getWeatherData() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${config.city}&units=${config.units}&lang=de&appid=${config.api_key}`
  );
  const data = response.json();
  return data;
}

async function exportWeatherData() {
  const data = await getWeatherData();
  const temp = data.main.temp;
  const description = data.weather[0].description;
  const iconId = data.weather[0].icon;
  setWeather(temp, description, iconId);
}

function setWeather(temp, description, iconId) {
  const iconElement = document.querySelector(".weatherIcon");
  const tempElement = document.querySelector(".weatherValue p");
  const descElement = document.querySelector(".weatherDescription p");
  const icon = require("../icons/" + iconId + ".png");
  iconElement.src = icon;
  tempElement.innerHTML = `${temp.toFixed(0)} - °<span class="g">c</span> `;
  descElement.innerHTML = description;
}
