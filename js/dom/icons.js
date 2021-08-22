// ** Create Icons
function createWeeklyIcon(weather) {
  const dom = [...document.querySelectorAll(".forecast-daily-icon")];
   // check and see if there is an item, if not remove previous icons
  for (const element of dom) {
    let nodes = element.childElementCount;
    if (nodes > 0) {
      element.removeChild(element.firstChild);
      let div = document.createElement("div");
      div.classList.add(weather.pop(), "icon");
      element.append(div);
    }
    else {
      let div = document.createElement("div");
      div.classList.add(weather.pop(), "icon");
      element.append(div);
    }
  }
}

function createTodaysIcon(data) {

 let weatherData = data.weather[0].main;
 const dom = document.querySelector(".weather-info-icon");
 // check and see if there is an item, if not remove previous icon
 let check = [...dom.children];
 if (check.length > 1) {
   const beGone = document.querySelector(".bigIcon");
   beGone.remove();
   let div = document.createElement("div");
   div.classList.add(weatherData, "bigIcon");
   dom.append(div);
 } else {
   let div = document.createElement("div");
   div.classList.add(weatherData, "bigIcon");
   dom.append(div);
 }
 return dom;
}

export { createTodaysIcon, createWeeklyIcon }