function toggleMenu() {
  var menu = document.querySelector(".navbar-ul");
  menu.classList.toggle("active");
}

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", toggleMenu);
