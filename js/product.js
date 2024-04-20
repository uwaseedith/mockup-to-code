const products = [
    {
        id: 0,
        cat: "electronic",
        title: "Smart TV 55'' 4K Ultra HD",
        price: "999",
        color: "Black",
        image: './img/blue bag.jpg',
        deal: "Hot Deal",
        date: "New"
    },
    {
        id: 1,
        cat: "clothing",
        title: "Men's Casual Jacket",
        price: "80",
        color: "Navy Blue",
        image: './img/iphone12.jpg',
        deal: "",
        date: "Average"
    },
    {
        id: 2,
        cat: "furniture",
        title: "Modern Coffee Table",
        price: "350",
        color: "White",
        image: './img/watch.jpg',
        deal: "Hot Deal",
        date: "New"
    },
    {
        id: 3,
        cat: "electronic",
        title: "Wireless Bluetooth Earbuds",
        price: "50",
        color: "Red",
        image: './img/Xiaomi.jpg',
        deal: "",
        date: "Average"
    },
    {
        id: 4,
        cat: "clothing",
        title: "Women's Running Shoes",
        price: "60",
        color: "Pink",
        image: './img/headset.jpg',
        deal: "Hot Deal",
        date: "New"
    },
    {
        id: 5,
        cat: "electronic",
        title: "Portable Power Bank 20000mAh",
        price: "30",
        color: "Black",
        image: './img/gopro.jpg',
        deal: "",
        date: "Average"
    },
    {
        id: 6,
        cat: "furniture",
        title: "Rustic Wooden Bookshelf",
        price: "200",
        color: "Brown",
        image: './img/Xiaomi.jpg',
        deal: "Hot Deal",
        date: "New"
    },
    {
        id: 7,
        cat: "electronic",
        title: "Wireless Gaming Mouse",
        price: "70",
        color: "RGB",
        image: "./img/headset.jpg",
        deal: "",
        date: "Average"
    },
    {
        id: 8,
        cat: "clothing",
        title: "Women's Yoga Pants",
        price: "25",
        color: "Purple",
        image: './img/gopro.jpg',
        deal: "Hot Deal",
        date: "New"
    },
    {
        id: 9,
        cat: "furniture",
        title: "Adjustable Standing Desk",
        price: "400",
        color: "Black",
        image: './img/blue bag.jpg',
        deal: "",
        date: "Average"
    },
    {
        id: 10,
        cat: "clothing",
        title: "Men's Graphic T-Shirt",
        price: "15",
        color: "Grey",
        image: './img/watch.jpg',
        deal: "Hot Deal",
        date: "New"
    },
    {
        id: 11,
        cat: "electronic",
        title: "Wireless Charging Pad",
        price: "20",
        color: "White",
        image: './img/iphone12.jpg',
        deal: "",
        date: "Average"
    },
    {
        id: 12,
        cat: "furniture",
        title: "Velvet Accent Chair",
        price: "180",
        color: "Burgundy",
        image: './img/camera.jpg',
        deal: "Hot Deal",
        date: "New"
    },
    {
        id: 13,
        cat: "electronic",
        title: "Noise Cancelling Headphones",
        price: "150",
        color: "Silver",
        image: './img/headset.jpg',
        deal: "",
        date: "Average"
    },
    {
        id: 14,
        cat: "clothing",
        title: "Women's Denim Shorts",
        price: "35",
        color: "Light Blue",
        image: './img/blue bag.jpg',
        deal: "Hot Deal",
        date: "New"
    },
    {
        id: 15,
        cat: "furniture",
        title: "Mid-Century Modern Sofa",
        price: "700",
        color: "Grey",
        image: './img/camera.jpg',
        deal: "",
        date: "Average"
    },
];


// Get a reference to the product container
const productContainer = document.getElementById("product-container");

// Function to render products
function renderProducts() {
    // Loop through each product
    products.forEach(product => {
        // Create a new div element for each product
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        // Add product details to the div
        productDiv.innerHTML = `
        
        <div  class="d-flex justify-content-evenly">
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
    });
}

// Call the renderProducts function to display products
renderProducts();



function isProductInCart(productId) {
    // Get the cart data from localStorage
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product exists in the cart data
    const productInCart = cartData.find(item => item.id === productId);

    // Return true if the product is in the cart, otherwise return false
    return productInCart ? true : false;
}

// Function to show notification
function showNotificationCart(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.textContent = '';
        notification.style.display = 'none';
    }, 2000); // Hide notification after 3 seconds
}


// Function to handle adding/removing product from cart
function handleCartAction(productId) {
    // Get the product from the products array
    const product = products.find(item => item.id === productId);

    // Check if the product is already in the cart
    const isProductInCart = function (productId) {
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
            showNotificationCart(`Product "${product.title}" added to cart.`);
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

                showNotificationCart('Product removed from cart.');
            }
        }
        // Remove product from cart
        removeFromCart(productId);
        // Update button text to "Add to Cart"
        const cartButton = document.getElementById(`cart-button-${productId}`);
        cartButton.textContent = "Add to Cart";
    }
}



function isProductInWishlist(productId) {
    const wishlistData = JSON.parse(localStorage.getItem('cart')) || [];
    constproductInWishlist = wishlistData.find(item => item.id === productId);

    return productInWishlist ? true : false;
}


function showNotification(message) {
    const notificationWish = document.getElementById('wishlist-notification');
    notificationWish.textContent = message;
    notificationWish.style.display = 'block';
    setTimeout(() => {
        notificationWish.textContent = '';
        notificationWish.style.display = 'none';
    }, 2000); // Hide notification after 2 seconds
}

// Function to handle adding/removing product from wishlist
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
            showNotification(`Product "${product.title}" added to Wishlist`);
            // Change icon style
            const wishlistButton = document.getElementById(`wishlist-button-${productId}`);
            wishlistButton.classList.add('wishlist-added');
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
                console.log('Product Removed from Wishlist');
                // Remove icon style
                const wishlistButton = document.getElementById(`wishlist-button-${productId}`);
                wishlistButton.classList.remove('wishlist-added');

                showNotification('Product removed from wishlist.');
            }
        }

        // Remove product from wishlist
        removeFromWishlist(product.id);

    }
}