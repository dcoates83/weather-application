import API_KEY from "../apikey.js";
import setLocation from "./setLocation.js"


async function searchLocation(value) {
const key = API_KEY;
if (!value == "") {
  let city = value;
  let api = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}${key}`,
    { mode: "cors" }
  );
  let data = await api.json();
  let location = data.cod;
  if (location == 404) {
    const error = document.querySelector(".error-msg");
    error.style.display = "inline";
  } else {
    let lat = data.coord.lat;
    let lon = data.coord.lon;
    setLocation(lat, lon);
  }
}

return location;
}

export default searchLocation