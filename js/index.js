
import getDate from "./utils/getDate.js";
import { successLocation, deniedLocation } from "./locationServices/locationResponse.js";
import storeSearchValue from "./utils/storeSearchValue.js";


function getLocation() {
  navigator.geolocation
    .getCurrentPosition(
    successLocation, deniedLocation
  );
}

window.addEventListener("DOMContentLoaded", getLocation());
storeSearchValue();
