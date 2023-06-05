var load;
var showElements;
var navBar;
var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 2000);
}
function showPage() {
    load = document.querySelector(".loader").style.display = "none";

    showElements = document.querySelectorAll(".navbar,.hero,.testimonials,.container,.featured,.backdrop-header,.backdrop,.backdrop2,.faq,.page-footers");

    for (let count = 0; count < showElements.length; count++) {
        showElements[count].classList.add("show");
    }

}