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
  const items = JSON.parse(localStorage.getItem("cart")) || [];

  CartItems.innerHTML = "";

  items.forEach((item, index) => {
    const itemTotalPrice = item.price * item.quantity;

    const cartItem = document.createElement("div");
    cartItem.className = "product-card";
    cartItem.innerHTML = `
      <div class="product-image">
        <img src="${
          item.image || "image/cart/dummy_150x150_ffffff_cccccc.png"
        }" alt="${item.title}">
      </div>
      <div class="product-details">
        <h2 class="product-title">${item.title}</h2>
        <p class="product-color">${item.color}</p>
      </div>
      <div class="product-price"><span>Tk ${item.price}</span></div>
      <div class="quantity-selector">
        <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
        <input type="number" value="${
          item.quantity
        }" min="1" class="quantity-input" onchange="updateQuantity(${index}, 1, this.value)">
        <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
      </div> 
      <div class="total-price"><span>Tk ${itemTotalPrice}</span></div>
      <div class="remove-btn" onclick="removeItem(${index})"><span>×</span></div>
    `;

    CartItems.appendChild(cartItem);

    cartTotal += itemTotalPrice;
  });

  document.querySelector(
    ".cart-total"
  ).innerText = `Total: Tk ${cartTotal.toFixed(2)}`;
}

function updateQuantity(index, change, newValue) {
  const items = JSON.parse(localStorage.getItem("cart")) || [];

  if (change !== 0) {
    items[index].quantity = Math.max(1, items[index].quantity + change);
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

displayCartItems();
