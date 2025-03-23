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



function addProductToCart(product) {
  const cartContainer = document.querySelector('#cartMenu .flex-col');
  
  const newProduct = document.createElement('div');
  newProduct.className = 'flex items-start space-x-4 py-4';
  newProduct.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="w-20 h-20 object-cover border">
    <div class="flex-1">
      <h3 class="text-lg font-semibold text-gray-800">${product.name}</h3>
      <p class="text-gray-700">${product.price}</p>
      <div class="flex items-center space-x-2 mt-2">
        <button class="px-3 py-1 border border-black bg-gray-100 hover:bg-gray-200">-</button>
        <span class="px-4 py-1 border border-black bg-white">1</span>
        <button class="px-3 py-1 border border-black bg-gray-100 hover:bg-gray-200">+</button>
      </div>
    </div>
  `;
  
  cartContainer.appendChild(newProduct);
}

