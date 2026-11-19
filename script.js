

/*if (stylesheet.getAttribute("href") == "light.css") {
    stylesheet.setAttribute("href","dark.css");
    button.textContent=" Light Mode ";
}else{
     stylesheet.setAttribute("href","light.css");
     button.textContent =" Dark Mode ";*/


const link = document.querySelector("#palette");
const button = document.querySelector("#theme");

button.addEventListener("click", function () {
  const dark = link.getAttribute("href") === "dark.css";
  link.setAttribute("href", dark ? "light.css" : "dark.css");
});