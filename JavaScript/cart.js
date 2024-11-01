// mobile nav
const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", () => {
  Nav.classList.toggle("mobile_nav_hide");
});

// ScrollReveal animations
// Initializing ScrollReveal animations
ScrollReveal().reveal(".product-cart-box", {
  delay: 200,
  duration: 1200,
  origin: "bottom",
});

// Selecting the cart container
const CartItems = document.querySelector(".cart-container");
let cartTotal = 0;

function displayCartItems() {
  cartTotal = 0;
  const items = JSON.parse(localStorage.getItem("cart")) || [];

  // Clear existing cart items display
  CartItems.innerHTML = "";

  if (items.length === 0) {
    // Display "empty cart" message
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

      // Create individual cart item structure
      const cartItem = document.createElement("div");
      cartItem.className = "product-cart-box";
      cartItem.innerHTML = `
        <div class="product-card">
          <div class="product-image">
            <img src="${
              item.image || "image/cart/dummy_150x150_ffffff_cccccc.png"
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

      // Update total price
      cartTotal += itemTotalPrice;
    });

    // Cart summary section
    const cartSummary = document.createElement("div");
    cartSummary.className = "cart-summary";
    cartSummary.innerHTML = `
      <div class="cart-total">
        <span>Total:</span>
        <span class="total-amount">$${cartTotal.toFixed(2)}</span>
      </div>
      <div class="cart-buttons">
        <div class="continue-shopping-btn"><button>Continue Shopping</button></div>
        <div class="clear-cart-btn"><button>Clear Cart</button></div>
        <div class="check-out-btn"><button>Check Out</button></div>
      </div>
    `;
    CartItems.appendChild(cartSummary);
  }
}

// Update quantity
function updateQuantity(index, change, newValue) {
  const items = JSON.parse(localStorage.getItem("cart")) || [];
  const item = items[index];

  // Update the item's quantity
  if (change !== 0) {
    item.quantity = Math.max(1, (item.quantity || 1) + change);
  } else {
    item.quantity = Math.max(1, parseInt(newValue) || 1);
  }

  // Update local storage
  localStorage.setItem("cart", JSON.stringify(items));

  // Update the quantity display and total for this specific item
  const cartItem = document.querySelectorAll(".product-cart-box")[index];
  const quantityInput = cartItem.querySelector(".quantity-input");
  const totalPriceElement = cartItem.querySelector(".total-price span");

  // Set new values in the DOM
  quantityInput.value = item.quantity;
  const itemTotalPrice = (parseFloat(item.price) || 0) * item.quantity;
  totalPriceElement.textContent = `$${itemTotalPrice.toFixed(2)}`;

  // Update the overall cart total without re-rendering
  updateCartTotal();
}

function updateCartTotal() {
  const items = JSON.parse(localStorage.getItem("cart")) || [];
  let cartTotal = items.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity) || 1;
    return total + price * quantity;
  }, 0);

  // Update the total display in the DOM
  document.querySelector(".total-amount").textContent = `$${cartTotal.toFixed(
    2
  )}`;
}

// Remove item
function removeItem(index) {
  const items = JSON.parse(localStorage.getItem("cart")) || [];
  items.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(items));
  displayCartItems();
}

// Continue shopping
function continueShopping() {
  window.location.href = "index.html";
}

// Clear cart
function clearCart() {
  localStorage.removeItem("cart");
  displayCartItems();
}

// Navigate to checkout
function navigateToCheckout() {
  window.location.href = "checkout.html";
}

// Adding event listeners after the cart is rendered
function addCartButtonListeners() {
  document.querySelector(".continue-shopping-btn button").onclick =
    continueShopping;
  document.querySelector(".clear-cart-btn button").onclick = clearCart;
  document.querySelector(".check-out-btn button").onclick = navigateToCheckout;
}

// Display cart items on load
displayCartItems();
addCartButtonListeners();
