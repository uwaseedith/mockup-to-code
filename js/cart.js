function handleCartAction(productId) {
    // Get the product from the products array
    const product = products.find(item => item.id === productId);

    // Check if the product is already in the cart
    const isProductInCart = function(productId) {
        // Get the cart data from localStorage
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    
        // Check if the product exists in the cart data
        const productInCart = cartData.find(item => item.id === productId);
    
        // Return true if the product is in the cart, otherwise return false
        return productInCart ? true : false;
    };

    // Check if the product is already in the cart
    const productAlreadyInCart = isProductInCart(productId);

    // If the product is not in the cart, add it
    if (!productAlreadyInCart) {
        function addToCart(product) {
            // Get the cart data from localStorage
            const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        
            // Add the product to the cart data
            cartData.push(product);
        
            // Update the cart data in localStorage
            localStorage.setItem('cart', JSON.stringify(cartData));

            console.log(`Product "${product.title}" added to cart.`);
        }
        // Add product to cart
        addToCart(product);
        // Update button text to "Remove from Cart"
        const cartButton = document.getElementById(`cart-button-${productId}`);
        cartButton.textContent = "Remove from Cart";
    } else {
        function removeFromCart(productId) {
            // Get the cart data from localStorage
            const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        
            // Find the index of the product in the cart data
            const index = cartData.findIndex(item => item.id === productId);
        
            // If the product is found in the cart, remove it
            if (index !== -1) {
                cartData.splice(index, 1);
        
                // Update the cart data in localStorage
                localStorage.setItem('cart', JSON.stringify(cartData));
                console.log('Product Removed from Cart')
            }
        }
        // Remove product from cart
        removeFromCart(productId);
        // Update button text to "Add to Cart"
        const cartButton = document.getElementById(`cart-button-${productId}`);
        cartButton.textContent = "Add to Cart";
    }
}
// Function to render products in the cart
function renderCartProducts() {
    // Get the cart data from localStorage
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Get a reference to the product container
    const productContainer = document.getElementById("product-container");
    
    // Clear the existing content of the container
    productContainer.innerHTML = "";

    // Check if there are any products in the cart
    if (cartData.length === 0) {
        // Display a message indicating that there are no products in the cart
        productContainer.innerHTML = "<h4 class='fw-bold text-center'>No Products in your Cart Yet!</h4>";
    } else {
        // Loop through each product in the cart and render it
        cartData.forEach(product => {
            // Create a new div element for each product
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");

            // Add product details to the div
            productDiv.innerHTML = `
            <div  class="d-flex justify-content-evenly">
                <div class="card" id="card-width">
                    <img src="${product.image}" alt="${product.title}" class="img" width="100%" height="240px">
                    <div class="card-body">
                        <h3 class="card-subtitle mb-2 text-muted">${product.title}</h3>
                        <p class="card-title">Price: $${product.price}</p>
                        <p class="card-subtitle mb-2 text-muted">Color: ${product.color}</p>
                        <a href="#" role="button" id="cart-button-${product.id}" class="btn btn-primary card-link py-2 px-4" onclick="handleCartAction(${product.id})">Remove From Cart</a>
                    </div>
                </div>
            </div>`;
            
            // Append the product div to the container
            productContainer.appendChild(productDiv);
        });
    }
}

// Call the renderCartProducts function to display products in the cart
renderCartProducts();
