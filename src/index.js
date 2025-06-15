// Feature 1
function formatDateTime(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let day = days[date.getDay()];

  return `${day} ${hours}:${minutes}`;
}

let dateTimeElement = document.querySelector("#current-date-time");
let now = new Date();
dateTimeElement.innerHTML = formatDateTime(now);

// Feature 2
let form = document.querySelector("form");
let cityInput = document.querySelector(".search-input");
let cityElement = document.querySelector(".current-city");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let city = cityInput.value.trim();

  if (city) {
    cityElement.innerHTML = city;
  }
});
