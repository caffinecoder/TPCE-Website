// Load the navbar HTML into the page
fetch("/includes/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });

// Mobile dropdown toggle
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

// Dropdown toggle for mobile submenus
function toggleDropdown(id) {
  document.getElementById(id).classList.toggle("hidden");
}
