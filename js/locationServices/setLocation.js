import API_KEY from "../api/apikey.js";

import {
changeTodaysTempC,
changeLastWeekTempC,
} from "../utils/changeTempUnits.js";
import {
changeCity,
changeCityDesc,
changeFeelsLike,
changeHumidty,
changeWindSpeed,
} from "../dom/dom.js";


async function setLocation(lat, lon) {
  const key = API_KEY;

let location = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`,
  { mode: "cors" }
);
  const latitude = lat;
  const longitude = lon;

// Fetch current Data
  let data = await location.json();

  changeWindSpeed(data);
  changeHumidty(data);
  changeFeelsLike(data);
  changeCity(data);
  changeCityDesc(data);
  changeLastWeekTempC(latitude, longitude, key);
  changeTodaysTempC(data)
}

export default setLocation;