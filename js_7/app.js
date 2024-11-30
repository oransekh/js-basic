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

