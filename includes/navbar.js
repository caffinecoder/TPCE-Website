// Load the navbar HTML into the page using absolute path
fetch("/includes/navbar.html")
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