const products = [
    {
        id: 0,
        category: "clothing",
        title: "Back pack",
        price: "99",
        color: "Black",
        image: './img/blue bag.jpg',
        deal: "Hot Deal",
        date: "New"
    },
    {
        id: 1,
        category: "clothing",
        title: "Men's Casual Jacket",
        price: "100",
        color: "Navy Blue",
        image: 'https://www.houseoffraser.co.uk/images/imgzoom/60/60836703_xxl.jpg',
        deal: "",
        date: "Average"
    },
    {
        id: 2,
        category: "electronic ",
        title: "Iphone12",
        price: "850",
        color: "Black",
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-black-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202741000',
        deal: "Hot Deal",
        date: "New"
    },
    {
        id: 3,
        category: "electronic",
        title: "Apple watch",
        price: "250",
        color: ["Navy Blue", "Orange"],
        image: 'https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7-availability_hero_10052021_big.jpg.large.jpg',
        deal: "",
        date: "Average"
    },
    {
        id: 4,
        category: "eletronic",
        title: "Samsung S24 Ultra",
        price: "1000",
        color: "Silver",
        image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-165263/Samsung-Galaxy-S24-Ultra_A_featured-image-packshot-review.jpg',
        deal: "Hot Deal",
        date: "New"
    },
    {
        id: 5,
        category: "electronic",
        title: "JBL Flip 6 Portable Waterproof Speaker",
        price: "25",
        color: "Black",
        image: 'https://i5.walmartimages.com/seo/JBL-Flip-6-Portable-Waterproof-Speaker-Black_39f26432-b1be-424a-a03e-4e45c2f9f13b.9daa9454d86006a80702baff2d8af3d3.jpeg',
        deal: "",
        date: "Average"
    },
    {
        id: 6,
        category: "furniture",
        title: "Rustic Wooden Bookshelf",
        price: "200",
        color: "Brown",
        image: 'https://fourcornerfurniture.com/wp/wp-content/uploads/2018/08/Rustic-Wooden-Bookshelf-1.jpg',
        deal: "Hot Deal",
        date: "New"
    },
    {
        id: 7,
        category: "electronic",
        title: "Wireless Gaming Mouse",
        price: "70",
        color: "RGB",
        image: "https://m.media-amazon.com/images/I/61gm1v-ts8L.jpg",
        deal: "",
        date: "Average"
    },
    {
        id: 8,
        category: "clothing",
        title: "Women's Yoga Pants",
        price: "25",
        color: "Purple",
        image: 'https://pineappleclothing.com/cdn/shop/products/Magenta-UV-50_-Lucy-Purple-Performance-Leggings-Yoga-Pants---Women-WL1-MG-back_1024x1024.jpg?v=1589446043',
        deal: "Hot Deal",
        date: "New"
    },
    {
        id: 9,
        category: "furniture",
        title: "Adjustable Standing Desk",
        price: "400",
        color: "Black",
        image: 'https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/3883611/3883611_o01_072423/3883611',
        deal: "",
        date: "Average"
    },
    {
        id: 10,
        category: "clothing",
        title: "Men's Graphic T-Shirt",
        price: "15",
        color: "Black",
        image: 'https://target.scene7.com/is/image/Target/GUEST_0b9a4181-87e7-49f7-a0cd-7cd31d36d9b3?wid=488&hei=488&fmt=pjpeg',
        deal: "Hot Deal",
        date: "New"
    },
    {
        id: 11,
        category: "electronic",
        title: "Wireless Charging Pad",
        price: "400",
        color: "White",
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HPU82?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1636763814000',
        deal: "",
        date: "Average"
    },
    {
        id: 12,
        category: "furniture",
        title: "Velvet Accent Chair",
        price: "1800",
        color: "Burgundy",
        image: 'https://target.scene7.com/is/image/Target/GUEST_c63b6e24-fa7e-42d2-989e-383cc1b5d4a2?wid=488&hei=488&fmt=pjpeg',
        deal: "Hot Deal",
        date: "New"
    },
    {
        id: 13,
        category: "electronic",
        title: "Noise Cancelling Headphones",
        price: "150",
        color: "Green",
        image: 'https://m.media-amazon.com/images/I/61BSI1YZqAL.jpg',
        deal: "",
        date: "Average"
    },
    {
        id: 14,
        category: "clothing",
        title: "Women's Denim Shorts",
        price: "35",
        color: "Light Blue",
        image: 'https://assets.vogue.com/photos/649e04ea7ccc5800cdc35017/3:4/w_748%2Cc_limit/slide_18.jpg',
        deal: "Hot Deal",
        date: "New"
    },
    {
        id: 15,
        category: "furniture",
        title: "Mid-Century Modern Sofa",
        price: "700",
        color: "Grey",
        image: 'https://target.scene7.com/is/image/Target/GUEST_c304bd74-0fbf-4fe0-9cef-3d241f28b9a5?wid=488&hei=488&fmt=pjpeg',
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
                    <a title="Add to wishlist" id="wishlist-button-${product.id}" class="btn card-link btnlike" onclick="handleWishlistAction(${product.id})" style="border: none;"> 
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
    const wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];
    const productInWishlist = wishlistData.find(item => item.id === productId);

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