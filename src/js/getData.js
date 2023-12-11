import { config } from "./config";

// Redundant, because weather API takes city as query parameter
// async function getGeoData() {
//   const response = await fetch(
//     `http://api.openweathermap.org/geo/1.0/direct?q=${config.city}&appid=${config.api_key}`
//   );
//   const data = await response.json();
//   const lat = data[0].lat;
//   const lon = data[0].lon;
//   return { lat, lon };
// }

async function getWeatherData() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${config.city}&units=${config.units}&lang=de&appid=${config.api_key}`
  );
  const data = response.json();
  return data;
}

export default async function exportWeatherData() {
  const data = await getWeatherData();
  const main = data.main;
  const weather = data.weather[0];
  const wind = data.wind;
  console.log({ main, weather, wind });
  return { main, weather, wind };
}
