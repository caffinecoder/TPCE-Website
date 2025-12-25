// Load the navbar HTML into the page
// Use relative path instead of absolute path
const navbarPath = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? "/includes/navbar.html"
  : "./includes/navbar.html";

fetch(navbarPath)
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.text();
  })
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  })
  .catch(error => {
    console.error('Error loading navbar:', error);
    // Fallback: try alternate path
    fetch("includes/navbar.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("navbar").innerHTML = data;
      })
      .catch(err => console.error('Fallback also failed:', err));
  });

// Mobile dropdown toggle
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
}

// Dropdown toggle for mobile submenus
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  if (dropdown) {
    dropdown.classList.toggle("hidden");
  }
}