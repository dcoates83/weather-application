import get from "./getElement.js";
import { createTodaysIcon, createWeeklyIcon } from "../dom/icons.js";
import timeToUnix from "../utils/timeToUnix.js";

// ** Change Today Main Weather Temperature
function changeTodaysTempC(data) {
  const todaysTemp = get(".weather-info-temperature");
  todaysTemp.textContent = data.main.temp + " °C";
  createTodaysIcon(data)
}


// ** Weekly Change **
async function changeLastWeekTempC(lat,lon,key) {
  const dates = timeToUnix()
  const high = [
      ...document.querySelectorAll(".forecast-daily-temperature-high"),
  ];
  let temps = [];
  let weather = [];

  for (let i = 0; i < dates.length; i++) {
    let lastWeek = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dates[i]}${key}&units=metric`,
      { mode: "cors" }
    );
    const nData = await lastWeek.json();
    temps.push(nData.current.temp);
    weather.push(nData.current.weather[0].main);
  }
  high.forEach((i) => {
        i.textContent = temps.shift() + " °C";
  });
  createWeeklyIcon(weather);
}

export {
  changeTodaysTempC,
  changeLastWeekTempC,
};
