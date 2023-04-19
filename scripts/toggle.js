const toggleMenuBtn = document.getElementById('toggle-menu');
const menuContainer = document.getElementById('navbarNavAltMarkup');

function showMenu() {
  var menu = document.getElementById("navbarNavAltMarkup");
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  } else {
    menu.classList.add("show");
  }
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({
    behavior: 'smooth'
  });
}