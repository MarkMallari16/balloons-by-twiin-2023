var loader;
var elements;

function myFunction() {
    loader = document.querySelector(".loader");
    elements = document.querySelector(".show-elements");
    loader.style.display = "block";

    setTimeout(showPage,1000);
}
function showPage() {
    loader.style.display = "none"
    elements.classList.add("show");
}