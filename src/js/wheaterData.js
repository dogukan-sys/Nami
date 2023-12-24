import { config } from "./config";

export default async function getWeatherData() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=	51.5142449&lon=7.468429&
    &units=${config.units}&lang=de&appid=${config.api_key}`
  );
  const data = response.json();
  display(data);
  return data;
}

async function display(data) {
  // Console log the data in another function, because Promises ¯\_(ツ)_/¯
  const log = await data;
  console.log(log);
}
