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
// promo and note hide and unhide
function togglePromo() {
  const promoSection = document.getElementById("promoSection");
  promoSection.classList.toggle("hidden");
}

function toggleNote() {
  const noteSection = document.getElementById("noteSection");
  noteSection.classList.toggle("hidden");
}

