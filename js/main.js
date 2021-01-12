//JQUERY NAVBAR TOGGLE
$(document).ready(function() {
    $("#hamburger-menu").click(function() {
        $(".sideBar").toggleClass("active");

    });
})

//JAVASCRIPT ANIMATE HAMBURGER MENU
function myFunction(x) {
    x.classList.toggle("change");
}

//JAVASCRIPT BACK TO THE TOP BTN
window.onscroll = function() { scrollFunction() };
var topBtn = document.getElementById("myTopBTN");

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//JAVASCRIPT YEAR GENERATOR FOR EACH YEAR
var d = new Date();
var year = d.getFullYear();
document.getElementById("date").innerHTML = year;