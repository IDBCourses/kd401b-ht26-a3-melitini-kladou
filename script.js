



const link = document.querySelector("#palette");
const button = document.querySelector("#theme");

button.addEventListener("click", function () {
  const dark = link.getAttribute("href") === "dark.css";
  link.setAttribute("href", dark ? "light.css" : "dark.css");

  button.textContent = dark ? "Dark Mode" : "Light Mode";

});


const type = document.querySelector("#type");
const readingButton = document.querySelector("#reading");

readingButton.addEventListener("click", function () {
  const reading = type.getAttribute("href") === "reading.css";

  type.setAttribute("href", reading ? "" : "reading.css");
})