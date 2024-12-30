ScrollReveal().reveal(".product-cart-box", {
  delay: 200,
  duration: 1200,
  origin: "bottom"
});


const CartItems = document.querySelector(".cart-container");
let cartTotal = 0;

function displayCartItems() {
  cartTotal = 0;
  const items = getCartData();

  CartItems.innerHTML = "";

  if (items.length === 0) {

    const emptyCartMessage = document.createElement("div");
    emptyCartMessage.className = "empty-cart";
    emptyCartMessage.innerHTML = `
      <h3>Your Cart</h3>
      <p>Your cart is currently empty!</p>
      <p>Continue browsing <a href="index.html">here</a>.</p>
    `;
    CartItems.appendChild(emptyCartMessage);
  } else {
    items.forEach((item, index) => {
      const price = parseFloat(item.price) || 0;
      const quantity = parseInt(item.quantity) || 1;
      const itemTotalPrice = price * quantity;


      const cartItem = document.createElement("div");
      cartItem.className = "product-cart-box";
      cartItem.innerHTML = `
        <div class="product-card">
          <div class="product-image">
            <img src="${item.image || "image/cart/dummy_150x150_ffffff_cccccc.png"
        }" alt="${item.title}">
          </div>
          <div class="product-details">
            <h2 class="product-title">${item.title}</h2>
            <p class="product-color">${item.color}</p>
          </div>
          <div class="product-price"><span>$${price.toFixed(2)}</span></div>
          <div class="quantity-selector">
            <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
            <input type="number" value="${quantity}" min="1" class="quantity-input" onchange="updateQuantity(${index}, 0, this.value)">
            <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
          </div> 
          <div class="total-price"><span>$${itemTotalPrice.toFixed(
          2
        )}</span></div>
          <div class="remove-btn" onclick="removeItem(${index})"><span>×</span></div>
        </div>
      `;
      CartItems.appendChild(cartItem);


      cartTotal += itemTotalPrice;
    });


    const cartSummary = document.createElement("div");
    cartSummary.className = "cart-summary";
    cartSummary.innerHTML = `
      <div class="cart-total">
        <span>Total:</span>
        <span class="total-amount">$${cartTotal.toFixed(2)}</span>
      </div>
      <div class="cart-buttons">
        <a href="../index.html" class="continue-shopping-btn"><button>Continue Shopping</button></a>
        <div class="clear-cart-btn"><button>Clear Cart</button></div>
        <a href="../checkout.html" class="check-out-btn"><button>Check Out</button></a>
      </div>
    `;
    CartItems.appendChild(cartSummary);


    document.querySelector(".clear-cart-btn button").onclick = clearCart;
  }
}

// Update quantity
function updateQuantity(index, change, newValue) {

  const items = getCartData();
  const item = items[index];

  if (change !== 0) {
    item.quantity = Math.max(1, (item.quantity || 1) + change);
  } else {
    item.quantity = Math.max(1, parseInt(newValue) || 1);
  }


  localStorage.setItem("cart", JSON.stringify(items));


  const cartItem = document.querySelectorAll(".product-cart-box")[index];
  const quantityInput = cartItem.querySelector(".quantity-input");
  const totalPriceElement = cartItem.querySelector(".total-price span");


  quantityInput.value = item.quantity;
  const itemTotalPrice = (parseFloat(item.price) || 0) * item.quantity;
  totalPriceElement.textContent = `$${itemTotalPrice.toFixed(2)}`;


  updateCartTotal();
  updateCartBadge();
}


function updateCartTotal() {

  const items = getCartData();
  let cartTotal = items.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity) || 1;
    return total + price * quantity;
  }, 0);

  document.querySelector(".total-amount").textContent = `$${cartTotal.toFixed(
    2
  )}`;
}

// Remove item
function removeItem(index) {

  const items = getCartData();
  items.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(items));
  displayCartItems();
  updateCartBadge()
}

// Clear cart
function clearCart() {
  localStorage.removeItem("cart");
  displayCartItems();
  updateCartBadge();
}

function addCartButtonListeners() {

  document.querySelector(".clear-cart-btn button").onclick = clearCart;
}

// Display cart items on load
displayCartItems();
updateCartBadge();
addCartButtonListeners();
