document.addEventListener("DOMContentLoaded", function () {
  const cartItemsContainer = document.querySelector(".cart-items");
  const shippingPrice = document.querySelector(".shipping-cost");
  const subTotalPrice = document.querySelector(".sub-total-items");
  const totalItemsElement = document.querySelector(".total-items");
  const totalPriceElement = document.querySelector(".total-price");

  const spinner = document.createElement("div");
  spinner.className = "spinner";
  document.body.appendChild(spinner);

  spinner.style.display = "block";

  setTimeout(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    let totalItems = 0;
    let totalPrice = 0;
    let shippingCost = 20;

    cartData.forEach((item) => {
      totalItems += item.quantity;
      totalPrice += item.price * item.quantity;

      const cartItem = document.createElement("div");
      cartItem.classList.add("summary-item");

      cartItem.innerHTML = `
        <div class="summary-item-details">
          <div class="summary-item-img">
            <img src="${item.image}" alt="${item.title}">
            <p>${item.quantity}</p>
          </div>
          <div>
            <p class="item-title">${item.title}</p>
            <p class="item-color">${item.color}</p>
          </div>
        </div>
        <div>
          <span class="item-price">$${(item.price * item.quantity).toFixed(
            2
          )}</span>
        </div>
      `;
      cartItemsContainer.appendChild(cartItem);
    });

    subTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;
    shippingPrice.textContent = `$${shippingCost.toFixed(2)}`;
    totalItemsElement.textContent = totalItems;
    totalPriceElement.textContent = `$${(totalPrice + shippingCost).toFixed(
      2
    )}`;

    spinner.style.display = "none";
  }, 1000);
});
