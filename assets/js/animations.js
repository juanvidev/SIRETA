//HACER ANIMACIONES

var aux = document.getElementById("navbar-js");
var Lscrolltop = 0;

window.addEventListener("scroll", function() {
    var scrolltop = window.pageYOffset || document.documentElement.scrolltop;
    if (scrolltop > Lscrolltop) {

        aux.style.opacity = 0;
        aux.style.background = "transparent";

    } else {

        aux.style.opacity = 1;
        aux.style.background = "#fff";
        aux.style.transition = "250ms ease-in-out";

    }
    Lscrolltop = scrolltop;


})

$(document).ready(function() {
    new ActiveMenuLink(".navbar", {

        // selector of menu item
        itemTag: "li",

        // active class
        activeClass: "active",

        // in pixels
        scrollOffset: -100,

        // duration in ms
        scrollDuration: 800,

        // easing function
        ease: "out-circ",

        // specifies the header height
        headerHeight: null,

        // string
        default: null,

        // shows hash tag
        showHash: true

    });

    ScrollReveal().reveal('.tagline', {
        delay: 300,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-in-out',
        viewFactor: 0,
        interval: 200,
    });

    ScrollReveal().reveal('.sireta-animation', {
        delay: 300,
        origin: 'left',
        distance: '150px',
        easing: 'ease-in-out',

    });




});