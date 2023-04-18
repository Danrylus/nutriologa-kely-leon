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


function toggleSection(id) {
  const selectedSection = document.getElementById(id);
  if (selectedSection.style.height) {
    selectedSection.style.height = null;
  } else {
    selectedSection.style.height = selectedSection.scrollHeight + 'px';
  }
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({
    behavior: 'smooth'
  });
}