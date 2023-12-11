const iconConversion = {
  "01d": "sun", // clear sky (day)
  "01n": "moon", // clear sky (night)
  "02d": "cloud-sun", // few clouds (day)
  "02n": "cloud-moon", // few clouds (night)
  "03d": "cloud", // scattered clouds (day)
  "03n": "cloud", // scattered clouds (night)
  "04d": "clouds", // broken clouds (day)
  "04n": "clouds", // broken clouds (night)
  "09d": "cloud-drizzle", // shower rain (day)
  "09n": "cloud-drizzle", // shower rain (night)
  "10d": "cloud-rain", // rain (day)
  "10n": "cloud-rain", // rain (night)
  "11d": "cloud-lightning", // thunderstorm (day)
  "11n": "cloud-lightning", // thunderstorm (night)
  "13d": "cloud-snow", // snow (day)
  "13n": "cloud-snow", // snow (night)
  "50d": "cloud-fog", // mist (day)
  "50n": "cloud-fog" // mist (night)
};

// Example usage:
const openWeatherIcon = "10d";
const lucideIcon = iconConversion[openWeatherIcon];
console.log(lucideIcon); // Output: cloud-rain
