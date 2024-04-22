document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('input-form');
    const productContainer = document.getElementById('product-container');
    const allProducts = Array.from(productContainer.querySelectorAll('.product'));
    const heroSection = document.getElementById('hero');

    searchInput.addEventListener('input', function () {
        const searchQuery = this.value.toLowerCase().trim();
        if (searchQuery) {
            // Hide the hero section
            heroSection.style.display = 'none';
        } else {
            // Show the hero section if no search query
            heroSection.style.display = 'block';
        }

        allProducts.forEach(product => {
            const titleElement = product.querySelector('.card-subtitle');
            const title = titleElement ? titleElement.textContent.toLowerCase() : '';
            const productCategoryElement = product.querySelector('.card-subtitle');
            const productCategory = productCategoryElement ? productCategoryElement.textContent.toLowerCase() : '';

            if (title.includes(searchQuery) || productCategory.includes(searchQuery)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
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

