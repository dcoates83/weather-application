import searchLocation from "../locationServices/searchLocation.js"

export default function storeSearchValue() {
  const btn = document.querySelector(".btn");
  
btn.addEventListener("click", function (e) {
  e.preventDefault();

  const form = document.querySelector(".form");
  const search = document.querySelector("#search").value;

  searchLocation(search);
  form.reset();
});
}