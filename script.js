document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector("nav ul");

  // Toggle the menu visibility when the hamburger is clicked
  hamburgerMenu.addEventListener("click", function () {
    navMenu.classList.toggle("hidden");
    navMenu.classList.toggle("visible");
  });
});
