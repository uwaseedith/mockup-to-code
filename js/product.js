const products = [
    {
        id: 0,
        cat: "electronic",
        title: "GoPro 4K Action",
        price: "790.50",
        color: "Black",
        image: './img/blue bag.jpg',
        date: 20/4/2024
    },
    {
        id: 1,
        cat: "electronic",
        title: "Iphone 14",
        price: "900",
        color: "Black",
        image: './img/iphone12.jpg',
        date: 10/4/2024
    },
    {
        id: 2,
        cat: "furniture",
        title: "Sofa for living room",
        price: "500",
        color: "Brown",
        image: './img/watch.jpg',
        date: 18/4/2024
    },
    {
        id: 3,
        cat: "clothing",
        title: "Unisex Bag",
        price: "20",
        color: "Blue",
        image: './img/Xiaomi.jpg',
        date: 17/4/2024
    },
    {
        id: 4,
        cat: "electronic",
        title: "GoPro HERO6 4K Action",
        price: "790.50",
        color: "Black",
        image: '',
        date: 2/4/2024
    },
    {
        id: 5,
        cat: "electronic",
        title: "Canon camera 20x zoom EOS 2000",
        price: "600",
        color: "Black",
        image: '',
        date: 22/3/2024
    },
    {
        id: 6,
        cat: "electronic",
        title: "Xiaomi Redmi 8 Original Global Version 4GB",
        price: "250",
        color: ["Blue", "Black"],
        image: '',
        date: 22/3/2024
    },
    {
        id: 7,
        cat: "electronic",
        title: "Apple iPhone 12 Pro 6.1 RAM 6GB 512GB Unlocked",
        price: "800",
        color: "Grey",
        image: "https://www.apple",
        date: 18/3/2024
    },
    {
        id: 8,
        cat: "electronic",
        title: "Apple Watch Series 1 Sport Case 38mm Black",
        price: "120",
        color: "Black",
        image: '',
        date: 15/3/2024
    },
    {
        id: 9,
        cat: "clothing",
        title: "",
        price: "",
        color: "",
        image: '',
        date: 12/3/2024
    },
    {
        id: 10,
        cat: "clothing",
        title: "",
        price: "",
        color: "",
        image: '',
        date: 16/4/2024
    },
    {
        id: 11,
        cat: "clothing",
        title: "",
        price: "",
        color: "",
        image: '',
        date: 15/3/2024
    },
    {
        id: 12,
        cat: "furniture",
        title: "",
        price: "",
        color: "",
        image: '',
        date: 15/3/2024
    },
    {
        id: 13,
        cat: "",
        title: "",
        price: "",
        color: "",
        image: '',
        date: 15/3/2024
    },
    {
        id: 14,
        cat: "",
        title: "",
        price: "",
        color: "",
        image: '',
        date: 15/3/2024
    },
    {
        id: 15,
        cat: "",
        title: "",
        price: "",
        color: "",
        image: '',
        date: 15/3/2024
    },
    {
        id: 16,
        cat: "",
        title: "",
        price: "",
        color: "",
        image: '',
        date: 15/3/2024
    },
    {
        id: 17,
        cat: "",
        title: "",
        price: "",
        color: "",
        image: '',
        date: 15/3/2024
    },
    {
        id: 18,
        cat: "",
        title: "",
        price: "",
        color: "",
        image: '',
        date: 15/3/2024
    },
    {
        id: 19,
        cat: "",
        title: "",
        price: "",
        color: "",
        image: '',
        date: 15/3/2024
    },
    {
        id: 20,
        cat: "",
        title: "",
        price: "",
        color: "",
        image: '',
        date: 15/3/2024
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
                    <h3 class="card-subtitle mb-2 text-muted">${product.title}</h3>
                    <p class="card-title">Price: $${product.price}</p>
                    <p class="card-subtitle mb-2 text-muted">Color: ${product.color}</p>
                    <a role="button" id="cart-button-${product.id}" class="btn btn-primary card-link py-2 px-4" onclick="handleCartAction(${product.id})">
                        <span id="cart-button-text-${product.id}">${isProductInCart(product.id) ? 'Remove from Cart' : 'Add to Cart'}</span>
                    </a>                    
                    <a title="Add to wishlist" id="wishlist-button-${product.id}" class="btn btn-outline-primary card-link like" onclick="handleWishlistAction(${product.id})"> 
                    <i class="fa-solid fa-heart"></i></a>
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