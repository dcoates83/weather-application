import get from "./getElement.js";

function getDate() {
  const html = get(".weather-info-date");
  const today = new Date();
  const dd = String(today.getDate());
  const dEnding = addEnding(dd);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const mon = months[today.getMonth()];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekday = days[today.getDay()];
  const todaysDate = weekday + ", " + mon + " " + dEnding;
  html.textContent = todaysDate;
}

function addEnding(i) {
  var j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
}

// ** Create each weekly days' name
function days() {
  const weekdays = [...document.querySelectorAll(".forecast-daily-day")];
  let day = new Date();
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let counter = 0;
  for (let i = 0; i < 5; i++) {
    let newDay = week[day.getDay() + i + 2];
    if (newDay == undefined) {
      newDay = week[counter];
      counter++;
    }
    weekdays[i].textContent = newDay;
  }
}
days();
getDate();

export default getDate;
