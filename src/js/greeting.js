import { config } from "./config.js";

const date = new Date();
const hour = date.getHours();
const name = config.name;
const greeting = document.querySelector("#greeting");

const greeting1 = config.greetingMorning;
const greeting2 = config.greetingAfternoon;
const greeting3 = config.greetingEvening;
const greeting4 = config.greetingNight;

if (hour >= 22 || hour < 6) {
  setGreeting(greeting4);
} else if (hour >= 6 && hour < 12) {
  setGreeting(greeting1);
} else if (hour >= 12 && hour < 17) {
  setGreeting(greeting2);
} else {
  setGreeting(greeting3);
}
function setGreeting(greet) {
  greeting.innerText = `${greet} ${name}`;
}
