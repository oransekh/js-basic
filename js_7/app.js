// Script to Toggle Mobile Menu

document.getElementById("menu-toggle").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
});


    // Define an async function to fetch products from the API
    async function fetchProducts() {
        try {
          // Send a GET request to the API
          const response = await fetch('https://fakestoreapi.com/products');
          
          // Check if the response is successful (status 200-299)
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
          // Parse the JSON data from the response
          const products = await response.json();
          
          // Get the product container element
          const productList = document.getElementById('productList');
          
          // Loop through the products and display them on the page
          products.forEach(product => {
            // Create a div for each product
            const productDiv = document.createElement('div');
            productDiv.classList.add('lg:w-1/4', 'md:w-1/2', 'p-4', 'w-full');
            
            // Add product details inside the div
            productDiv.innerHTML = `
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="${product.title}" class="object-cover object-center w-full h-full block" src="${product.image}">
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">${product.title}</h2>
                <p class="mt-1">$${product.price}</p>
              </div>
            `;
            
            // Append the product div to the product list container
            productList.appendChild(productDiv);
          });
          
        } catch (error) {
          // Log any errors that occurred during the fetch or processing
          console.error('Error fetching data:', error);
        }
      }
  
      // Call the function to fetch products
      fetchProducts();