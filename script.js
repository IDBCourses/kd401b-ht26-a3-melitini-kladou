const stylesheet= document.querySelector("#palette");
const button = document.querySelector("#theme");

button.addEventListener("click", function () {
if (stylesheet.getAttribute("href") == "light.css") {
    stylesheet.setAttribute("href","dark.css");
    button.textContent=" Light Mode ";
}else{
     stylesheet.setAttribute("href","light.css");
     button.textContent =" Dark Mode ";
}

});