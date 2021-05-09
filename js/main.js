//JQUERY NAVBAR TOGGLE
$(document).ready(function() {
    $("#hamburger-menu").click(function() {
        $(".sideBar").toggleClass("active");

    });
    //JQUERY ANIMATE TEXT ON PORTFOLIO WEBSITE
    $(".weh").hover(function() {
        $(".fadeAnimate").toggleClass("addanimate");
        $(".wehtext h4, .wehtext p").fadeToggle("slow");
    })
    $(".blkpx").hover(function() {
        $(".fadeAnimate").toggleClass("addanimate");
        $(".blkpxtext h4, .blkpxtext p").fadeToggle("slow");
    })
    $(".fantasy").hover(function() {
        $(".fadeAnimate").toggleClass("addanimate");
        $(".fantasytext h4, .fantasytext p").fadeToggle("slow");
    })
    $(".popexadora").hover(function() {
        $(".fadeAnimate").toggleClass("addanimate");
        $(".popexadoratext h4, .popexadoratext p").fadeToggle("slow");
    })
    $(".pgm").hover(function() {
        $(".fadeAnimate").toggleClass("addanimate");
        $(".pgmtext h4, .pgmtext p").fadeToggle("slow");
    })
    $(".hoc").hover(function() {
        $(".fadeAnimate").toggleClass("addanimate");
        $(".hoctext h4, .hoctext  p").fadeToggle("slow");
    })

})

//JAVASCRIPT ANIMATE HAMBURGER MENU
function myFunction(x) {
    x.classList.toggle("change");
}

//JAVASCRIPT BACK TO THE TOP BTN

//JAVASCRIPT YEAR GENERATOR FOR EACH YEAR
var d = new Date();
var year = d.getFullYear();
document.getElementById("date").innerHTML = year;

// Formspree Javascript settings

window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        button.style = "display: none ";
        status.innerHTML = "Message sent. Thanks!";
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}