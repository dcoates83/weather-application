

// ** Change Title Location
function changeCity(weatherData) {
  const city = document.querySelector(".weather-info-city");
  city.textContent = weatherData.name;
  return city;
}
function changeCityDesc(weatherData) {
  const cityDesc = document.querySelector(".weather-info-description");
  cityDesc.textContent =  weatherData.weather[0].description;
  return cityDesc;
}

// ** Change sidebar Text
function changeFeelsLike(weatherData) {
  const text = document.querySelector("#feels-like");
  text.textContent = weatherData.main.feels_like;
  return text;
}
function changeHumidty(weatherData) {
  const text = document.querySelector("#humidity");
  text.textContent = weatherData.main.humidity + "%";
  return text;
}
function changeRainChance(weatherData) {
  const text = document.querySelector("#chance-of-rain");
  text.textContent = weatherData.minutely[0].precipitation + "mm";

  return text;
}
function changeWindSpeed(weatherData) {
  const text = document.querySelector("#wind-speed");
  text.textContent = weatherData.wind.speed + "km/h";
  return text;
}

export {
  changeCity,
  changeCityDesc,
  changeFeelsLike,
  changeHumidty,
  changeRainChance,
  changeWindSpeed,
};
                                                        