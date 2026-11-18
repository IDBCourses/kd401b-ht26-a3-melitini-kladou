const link= document.querySelector("#palette");
const button = document.querySelector("#theme");

button.addEventListener("click", function () {
    const dark = link.getAttribute("href") === "dark.css";
    console.log("Button clicked!");
    link.setAttribute("href", dark ? "style.css" : "dark.css");

    console.log(link.getAttribute("href"));
});