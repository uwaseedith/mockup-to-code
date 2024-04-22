document.addEventListener('DOMContentLoaded', function () {
    const categoryLinks = document.querySelectorAll('[data-category]');
    const productContainer = document.getElementById('product-container');

    categoryLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const category = this.dataset.category;

            // Clear the product container before rendering filtered products
            productContainer.innerHTML = '';

            // Filter products based on the selected category
            const filteredProducts = products.filter(product => {
                return category === 'all' || product.category.toLowerCase() === category.toLowerCase();
            });

            // Render the filtered products
            filteredProducts.forEach(product => {
                renderProduct(product);
            });
        });
    });
});

function renderProduct(product) {
    // Create a new div element for each product
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    // Add product details to the div
    productDiv.innerHTML = `
        <div class="d-flex justify-content-evenly">
            <div class="card" id="card-width">
                <img src="${product.image}" alt="${product.title}" class="img" width="100%" height="240px">
                <div class="card-body">
                    <h3 class="card-subtitle mb-2 text-muted" style="font-size: 20px;">${product.title}</h3>
                    <p class="card-title">$${product.price}</p>
                    <p class="card-subtitle mb-2 text-muted">Color: ${product.color}</p>
                    <a role="button" id="cart-button-${product.id}" class="btn card-link py-2 px-4 btncart" onclick="handleCartAction(${product.id})" >
                        <span id="cart-button-text-${product.id}">${isProductInCart(product.id) ? 'Remove from Cart' : 'Add to Cart'}</span>
                    </a>                    
                    <a title="Add to wishlist" id="wishlist-button-${product.id}" class="btn card-link btnlike" onclick="handleWishlistAction(${product.id}) style="border: none;"> 
                    <i class="fa-solid fa-heart fsolid"></i></a>
                </div>
            </div>
        </div>    
    `;

    // Append the product div to the container
    productContainer.appendChild(productDiv);
}
