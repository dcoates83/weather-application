import API_KEY from "../api/apikey.js";
import setLocation from "./setLocation.js";

// set location if successful
function successLocation(position) {
// current location
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  setLocation(lat, lon);
}
// Set Default location if denied
async function deniedLocation(info) {
  const city = "Calgary";
  const key = API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=`;
  const response = await fetch(`${url}${city}${key}&units=metric`, {
    mode: "cors",
  });
  const data = await response.json();
  const lat = await data.coord.lat;
  const lon = await data.coord.lon;
  setLocation(lat,lon)
}




export { successLocation, deniedLocation };
