function handleWishlistAction(productId) {
    const product = products.find(item => item.id === productId);

    //Check if the product is already liked
    const isProductInWishlist = function (productId) {
        //Get the wishlist data from localStorage
        const wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];

        //check if the product exists in the wishlist data
        const isProductInWishlist = wishlistData.find(item => item.id == productId);

        // Return true if the product is in the cart, otherwise return false
        return isProductInWishlist ? true : false;
    };

    //check if the product is already in the cart
    const productAlreadyInWishlist = isProductInWishlist(productId);

    // If the product is not in the wishlist, add it

    if (!productAlreadyInWishlist) {
        function addToWishlist(product) {
            //get the wishlist data from localStorage
            const wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];

            //Add the product to the wishlist data
            wishlistData.push(product);

            //Update the wishlist data in localStorage
            localStorage.setItem("wishlist", JSON.stringify(wishlistData));

            console.log(`Product "${product.title}" added to Wishlist`);
        }

        //Add product to wishlist
        addToWishlist(product);
        // update icon style 
        //will do it later
    } else {
        function removeFromWishlist(productId) {
            // Get the wishlist data from localStorage
            const wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];

            // Find the index of the product in the wishlist data
            const index = wishlistData.findIndex(item => item.id == productId);

            // If the product is found in the wishlist, remove it
            if (index != -1) {
                wishlistData.splice(index, 1);

                // Update the wishlist  data in localStorage
                localStorage.setItem('wishlist', JSON.stringify(wishlistData));
                console.log('Product Removed from Wishlist')
            }
        }

        // Remove product from wishlist
        removeFromWishlist(product.id);
        // Update icon style will do it later;

    }

}
//Function to render products in the wishlist
function renderWishlistProducts() {
    //Get the cart data from  local storage
    const wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];

    const productContainer = document.getElementById("product-container");

    //clear the existing content of the container 
    productContainer.innerHTML = "";

    //check if there are any products in the wishlist
    if (wishlistData.length === 0) {
        productContainer.innerHTML = "<h4 class='fw-bold text-center'>No Products in your Wishlist Yet!</h4>";
    } else {
        wishlistData.forEach(product => {
            //create a new div element for each product
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
                        <a role="button" id="cart-button-${product.id}" class="btn btn-primary card-link py-2 px-4" onclick="handleCartAction(${product.id})">Remove From Cart</a>
                        <a title="Add to wishlist" id="wishlist-button-${product.id}" class="btn btn-outline-primary card-link btnlike" onclick="handleWishlistAction(${product.id})"> 
                        <i class="fa-solid fa-heart fsolid"></i></a>
                    </div>
                </div>
            </div>`;

            // append the product div to the container
            productContainer.appendChild(productDiv);


        });
    }
}

renderWishlistProducts();