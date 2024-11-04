// checkout page
const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", () => {
  Nav.classList.toggle("mobile_nav_hide");
});
//
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve cart data from local storage
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];

  const cartItemsContainer = document.querySelector(".cart-items");
  const shippingPrice = document.querySelector(".shipping-cost");
  const subTotalPrice = document.querySelector(".sub-total-items");
  const totalItemsElement = document.querySelector(".total-items");
  const totalPriceElement = document.querySelector(".total-price");

  let totalItems = 0;
  let totalPrice = 0;
  let shippingCost = 20;

  cartData.forEach((item) => {
    // Calculate total items and total price
    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;

    // Create cart item element
    const cartItem = document.createElement("div");
    cartItem.classList.add("summary-item");

    cartItem.innerHTML = `

    <div class="summary-item-details">
                  <div class="summary-item-img">
                    <img src="${item.image}" alt="${item.title}">
                     <p> ${item.quantity}</p>
                  </div>

                  <div>
                    <p class="item-title">${item.title}</p>
                    <p class="item-color">${item.color}</p>
                  </div>
              </div>
                  <div>
                    <span class="item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
      `;

    // Append cart item to cart items container
    cartItemsContainer.appendChild(cartItem);
  });

  // Update total items and total price elements
  subTotalPrice.textContent = `$ ${totalPrice.toFixed(2)}`;
  shippingPrice.textContent = `$ ${shippingCost.toFixed(2)}`;
  totalItemsElement.textContent = totalItems;
  totalPriceElement.textContent = ` $ ${(totalPrice + shippingCost).toFixed(2)}`; // Including $20 shipping fee
});
