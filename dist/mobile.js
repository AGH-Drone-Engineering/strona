const btn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");
const links = document.querySelectorAll(".mobile-link");

// Toggle menu visibility
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Close menu when a link is clicked
links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});
