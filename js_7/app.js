// Desktop Cart Toggle
const toggleButton = document.getElementById("add");
const cartMenu = document.getElementById("cartMenu");
const closeButton = document.getElementById("close");

toggleButton.addEventListener("click", (e) => {
  e.preventDefault();
  cartMenu.classList.remove("hidden");
  setTimeout(() => {
    cartMenu.classList.remove("translate-x-full");
  }, 10);
});

closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  cartMenu.classList.add("translate-x-full");
  setTimeout(() => {
    cartMenu.classList.add("hidden");
  }, 1000);
});

// Get references to the toggle button and the mobile menu
const menuToggleButton = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// Toggle the menu on button click
menuToggleButton.addEventListener("click", () => {
  console.log("Button clicked");

  // Toggle the visibility and translate classes
  if (mobileMenu.classList.contains("-translate-y-full")) {
    mobileMenu.classList.remove("hidden", "-translate-y-full");
    mobileMenu.classList.add("translate-y-0");
  } else {
    mobileMenu.classList.add("-translate-y-full");
    setTimeout(() => mobileMenu.classList.add("hidden"), 700); // Ensure animation completes before hiding
    mobileMenu.classList.remove("translate-y-0");
  }
});

// Optional: Close menu if clicked outside (e.g., on a menu item)
mobileMenu.addEventListener("click", (e) => {
  e.preventDefault();
  
  mobileMenu.classList.add("-translate-y-full");
  setTimeout(() => mobileMenu.classList.add("hidden"), 700);
  mobileMenu.classList.remove("translate-y-0");
});
