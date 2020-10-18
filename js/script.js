/* Navbar */

// get the hamburger element
var hambuger = document.getElementById("hamburger");

// get the menu element
var menu = document.getElementById("menu");

// get the overlay element
var menu = document.getElementById("overlay");

// define toggle function
// either adds or removes active class from element
function toggleMenu() {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
}

// execute toggle function from hamburger on click
hamburger.addEventListener("click", toggleMenu);
// execute toggle function from overlay on click
overlay.addEventListener("click", toggleMenu);

// execute toggle function from menu on click
menu.addEventListener("click", toggleMenu);

/* Navbar */
