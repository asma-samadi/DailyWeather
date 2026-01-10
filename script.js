function updateData(response) {
  console.log(response);
  let temperature = document.querySelector("#degree");
  let h1Tag = document.querySelector("#h1-tag");
  let weatherSituation = document.querySelector("#situation");
  let weatherHumidity = document.querySelector("#humidity");
  let weatherWind = document.querySelector("#wind");
  let temperatureValue = response.data.temperature.current;
  temperature.innerHTML = Math.round(temperatureValue);
  h1Tag.innerHTML = response.data.city;
  weatherSituation.innerHTML = response.data.condition.description;
  weatherHumidity.innerHTML = response.data.temperature.humidity;
  weatherWind.innerHTML = response.data.wind.speed;
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
