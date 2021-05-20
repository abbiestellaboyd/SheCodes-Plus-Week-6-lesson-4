let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let dayTime = document.querySelector("#dayTime");
dayTime.innerHTML = `${day} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-form");

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function convertTemperature(event) {
  event.preventDefault();
  let temperatureConvert = document.querySelector("#celcius");
  temperatureConvert.innerHTML = `46°F Precipitation: 2% Humidity: 74% Wind: 5 mph`;
  let convertTempButton = document.querySelector("#fahrenheit");
  convertTempButton.addEventListener("click", convertTemperature);
}
