// Declare default data product
let product = [
    {
        name: "Indomie",
        price: 3000,
        id: 1,
    },
    {
        name: "Mie Sedaap",
        price: 2500,
        id: 2,
    },
    {
        name: "Selera Pedas",
        price: 2000,
        id: 3,
    },
];

// Menampung data Cart
let cart = [];

// Generate data for view default product in product page
function generateProduct() {
    let result = '';
    for (let i = 0; i < product.length; i++) {
        result += `<div class="card box-shadow">
          <div class="card-header">
            <h6>${product[i].name}</h6>
          </div>
          <div class="card-body">
            <h5 class="card-title pricing-card-title">Rp. ${product[i].price}</h5>
            <button type="submit" class="btn btn-outline-primary" onclick="addCart(${product[i].id})">Add to cart</button>
          </div>
        </div>`
    }
    document.getElementById('dataProduct').innerHTML = result;
    return result;
}

// addCart for push product data to Cart
function addCart(id) {
    let result = product.find(element => element.id === id);
    cart.push(result); // Push ke array
    localStorage.setItem('productsInCart', JSON.stringify(cart)); // Set local storage
}

function removeCart(id) {
    let cart = JSON.parse(localStorage.getItem("productsInCart"))
    cart.splice(id, 1) // Delete dari local storage
    localStorage.setItem('productsInCart', JSON.stringify(cart)); // Set local storage
    return generateCart();
}

function generateCart() {
    let result = '';
    cart = JSON.parse(localStorage.getItem('productsInCart'));
    for (let i = 0; i < cart.length; i++) {
        result += `<div class="card box-shadow">
          <div class="card-header">
            <h6>${cart[i].name}</h6>
          </div>
          <div class="card-body">
            <h5 class="card-title pricing-card-title">Rp. ${cart[i].price}</h5>
            <button type="submit" class="btn btn-outline-primary" onclick="removeCart(${cart[i].id})">Remove from cart</button>
          </div>
        </div>`
    }
    document.getElementById('dataCart').innerHTML = result;
    return result;
}

