function hamburger() {

// declare variables
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// display hamburger menu when clicked
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");

// remove menu if a link is clicked
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
}));
}