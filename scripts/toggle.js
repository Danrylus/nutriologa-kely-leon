const toggleMenuBtn = document.getElementById('toggle-menu');
const menuContainer = document.getElementById('menu-container');

toggleMenuBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('show');
});

function closeMenu() {
    menuContainer.classList.remove('show');
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