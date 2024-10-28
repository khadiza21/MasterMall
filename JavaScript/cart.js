// mobile nav
const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", () => {
  Nav.classList.toggle("mobile_nav_hide");
});

// ScrollReveal animations
ScrollReveal().reveal("", { delay: 200, duration: 1200, origin: "bottom" });
// .......................................................
const CartItems = document.querySelector(".cart-container");
let cartTotal = 0;


function displayCartItems() {
  cartTotal = 0;

  const items = JSON.parse(localStorage.getItem("cart")) || [];
  const cartSection = document.querySelector(".cart-buttons-container");
  console.log(items.length);
  if (items.length === 0) {
    console.log(items.length);

    cartSection.style.display = "none";

    const emptyCartMessage = document.createElement("div");
    emptyCartMessage.className = "empty-cart";
    emptyCartMessage.innerHTML = `
      <h3>Your Cart</h3>
      <p>Your cart is currently empty!</p>
      <p>Continue browsing <a href="index.html">here</a>.</p>
    `;
    CartItems.innerHTML = "";
    CartItems.appendChild(emptyCartMessage);
  } else {

    cartSection.style.display = "block";
    CartItems.innerHTML = "";

    items.forEach((item, index) => {
      const price = parseFloat(item.price) || 0;
      const quantity = parseInt(item.quantity) || 1;
      const itemTotalPrice = price * quantity;

      const cartItem = document.createElement("div");
      cartItem.className = "product-card";
      cartItem.innerHTML = `
        <div class="product-image">
          <img src="${item.image || "image/cart/dummy_150x150_ffffff_cccccc.png"
        }" alt="${item.title}">
        </div>
        <div class="product-details">
          <h2 class="product-title">${item.title}</h2>
          <p class="product-color">${item.color}</p>
        </div>
        <div class="product-price"><span>$ ${price.toFixed(2)}</span></div>
        <div class="quantity-selector">
          <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
          <input type="number" value="${quantity}" min="1" class="quantity-input" onchange="updateQuantity(${index}, 0, this.value)">
          <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
        </div> 
        <div class="total-price"><span>$ ${itemTotalPrice.toFixed(
          2
        )}</span></div>
        <div class="remove-btn" onclick="removeItem(${index})"><span>×</span></div>
      `;

      CartItems.appendChild(cartItem);
      cartTotal += itemTotalPrice;
    });

    const totalPriceElement = document.createElement("div");
    totalPriceElement.className = "cart-total";
    totalPriceElement.innerHTML = `
      <span>Total:</span>
      <span class="total-amount">$${cartTotal.toFixed(2)}</span>
    `;
    CartItems.appendChild(totalPriceElement);
  }
}


function updateQuantity(index, change, newValue) {
  const items = JSON.parse(localStorage.getItem("cart")) || [];

  if (change !== 0) {
    items[index].quantity = Math.max(1, (items[index].quantity || 1) + change);
  } else {
    items[index].quantity = Math.max(1, parseInt(newValue) || 1);
  }

  localStorage.setItem("cart", JSON.stringify(items));
  displayCartItems();
}


function removeItem(index) {
  const items = JSON.parse(localStorage.getItem("cart")) || [];
  items.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(items));
  displayCartItems();
}


function continueShopping() {
  window.location.href = "index.html";
}
function clearCart() {
  localStorage.removeItem("cart");
  displayCartItems();
}


function navigateToCheckout() {
  window.location.href = "checkout.html";
}


document.querySelector(".continue-shopping-btn button").onclick = continueShopping;
document.querySelector(".clear-cart-btn button").onclick = clearCart;
document.querySelector(".check-out-btn button").onclick = navigateToCheckout;


displayCartItems();
