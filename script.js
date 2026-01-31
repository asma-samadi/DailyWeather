function updateData(response) {
  let temperature = document.querySelector("#degree");
  let temperatureValue = response.data.temperature.current;
  let h1Tag = document.querySelector("#h1-tag");
  let weatherSituation = document.querySelector("#situation");
  let weatherHumidity = document.querySelector("#humidity");
  let weatherWind = document.querySelector("#wind");
  let weatherTime = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let weatherIcon = document.querySelector("#icon");

  temperature.innerHTML = Math.round(temperatureValue);
  h1Tag.innerHTML = response.data.city;
  weatherSituation.innerHTML = response.data.condition.description;
  weatherTime.innerHTML = updateDate(date);
  weatherHumidity.innerHTML = response.data.temperature.humidity;
  weatherWind.innerHTML = response.data.wind.speed;
  weatherIcon.innerHTML = `<img src ="${response.data.condition.icon_url}" class = "icon-tag" />`;
}

function updateDate(date) {
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `<span style = "font-size:28px; height:150px; margin-bottom:30px;">${day} </span> <br /> Time: ${hour}:${minutes}`;
}

function apiFunc(city) {
  let apiKey = "191267e8a45boa553174aa6t3cfa2930";
  apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateData);
}

function formFunction(event) {
  event.preventDefault();
  let firstInput = document.querySelector("#first-input");
  apiFunc(firstInput.value);
}

let formElement = document.querySelector("#form-element");
formElement.addEventListener("submit", formFunction);

apiFunc("Kabul");
