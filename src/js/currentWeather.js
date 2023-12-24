import getData from "./wheaterData";

export default async function getCurrentWeatherData() {
  const data = await getData();

  const currentTemp = data.current.temp;
  const currentDescription = data.current.weather[0].description;
  const currentIconId = data.current.weather[0].icon;

  setCurrentWeather(currentTemp, currentDescription, currentIconId);
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
