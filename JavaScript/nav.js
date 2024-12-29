// mobile nav
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile_nav");
const icon = hamburger.querySelector("i");
hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile_nav_hide");

  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-x");
  } else {
    icon.classList.remove("fa-x");
    icon.classList.add("fa-bars");
  }
});

// JavaScript for Click-to-Toggle Dropdown Menu
document.querySelectorAll('.mobile_menu_dropdown_toggle').forEach((toggle) => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const dropdownMenu = toggle.nextElementSibling;
    dropdownMenu.style.display =
      dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });
});



document.addEventListener("click", (event) => {
  const isClickInsideNav = mobileNav.contains(event.target);
  const isClickInsideHamburger = hamburger.contains(event.target);

  if (
    !isClickInsideNav &&
    !isClickInsideHamburger &&
    !mobileNav.classList.contains("mobile_nav_hide")
  ) {
    mobileNav.classList.add("mobile_nav_hide");
    icon.classList.remove("fa-x");
    icon.classList.add("fa-bars");
  }
});
function getCartData() {
  const cartData = JSON.parse(localStorage.getItem("cart"));
  return cartData ? cartData : [];
}
function getFavoriteData() {
  const favoriteData = JSON.parse(localStorage.getItem("favorite"));
  return favoriteData ? favoriteData : [];
}
function getTotalCartQuantity() {
  const cartData = getCartData();
  return cartData.length > 0
    ? cartData.reduce((total, item) => total + item.quantity, 0)
    : 0;
}
function getTotalFavoriteQuantity() {
  const favoriteData = getFavoriteData();
  return favoriteData.length;
}
function updateCartBadge() {
  const cartBadges = document.querySelectorAll(".cart_badge_num");
  const totalCartQuantity = getTotalCartQuantity();

  cartBadges.forEach((badge) => {
    badge.textContent = totalCartQuantity > 0 ? totalCartQuantity : "0";
    badge.style.display = "inline-block";
  });
}
function updateFavoriteBadge() {
  const favoriteBadges = document.querySelectorAll(".favorite_badge_num");
  const totalFavoriteQuantity = getTotalFavoriteQuantity();

  favoriteBadges.forEach((badge) => {
    badge.textContent = totalFavoriteQuantity > 0 ? totalFavoriteQuantity : "0";
    badge.style.display = "inline-block";
  });
}
updateCartBadge();
updateFavoriteBadge();
let scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
};
function smoothScrollToTop() {
  const scrollDuration = 800;
  const scrollStep = window.scrollY / (scrollDuration / 15);

  function scrollStepAnimate() {
    if (window.scrollY > 0) {
      window.scrollBy(0, -scrollStep);
      requestAnimationFrame(scrollStepAnimate);
    }
  }

  requestAnimationFrame(scrollStepAnimate);
}
scrollToTopBtn.onclick = smoothScrollToTop;
const currentPageActiveLink = window.location.pathname.split("/").pop();

function setActiveLink(selector) {
  document.querySelectorAll(selector).forEach((link) => {
    if (link.getAttribute("href") === currentPageActiveLink) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
setActiveLink(".nav_link");
setActiveLink(".mobile_nav_link");

document.addEventListener("DOMContentLoaded", () => {
  const favoriteModal = document.getElementById("favoriteModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const closeModal = document.querySelector(".close_modal");
  const clearButton = document.querySelector(".clear_favorite_modal_btn");
  const favoriteIcons = document.querySelectorAll(".nav_heart_modal");

  // Function to open the modal
  const openModal = () => {
    favoriteModal.classList.add("active");
    modalBackdrop.classList.add("active");
  };

  // Function to close the modal
  const closeModalFn = () => {
    favoriteModal.classList.remove("active");
    modalBackdrop.classList.remove("active");
  };


  favoriteIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      console.log("Favorite modal opening...");
      openModal();
      populateFavoriteList();
    });
  });


  // Event listener for closing the modal
  closeModal.addEventListener("click", closeModalFn);

  // Close modal on outside click
  modalBackdrop.addEventListener("click", closeModalFn);



  // Function to populate favorite modal with items
  const populateFavoriteList = () => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorite")) || [];
    console.log(localStorage.getItem("favorite"), "...");
    const favoriteList = document.getElementById("favoriteList");

    favoriteList.innerHTML = ""; // Clear the list
    if (favoriteItems.length === 0) {
      favoriteList.innerHTML = "<p>No items in the favorite list.</p>";
      return;
    }

    favoriteItems.forEach((item) => {
      console.log(item);
      const li = document.createElement("li");
      li.innerHTML = `
      <div class="favorite_modal_li_box_left">
       <img src="${item.image}" alt="${item.title}" />
       <small><i class="fa-solid fa-droplet"></i> ${item.color || ""}</small>
      </div>
         
         <div class="favorite_modal_li_box_right">
         <h5>${item.title} </h5>
        <h6> $ ${item.price.toLocaleString() || 0.00}</h6>
        <button class="add_to_cart_from_favorite" data-id="${item.id}"
                data-title="${item.title}"
                data-image="${item.image}"
                data-price="${item.price}"
                data-color="${item.color}"
        >Add to Cart</button></div>
        `;
      favoriteList.appendChild(li);
    });
  };

  clearButton.addEventListener("click", () => {
    localStorage.removeItem("favorite");
    populateFavoriteList();
    updateFavoriteBadge();
  });



  // Remove item from favorite list
  const favoriteList = document.getElementById("favoriteList");
  favoriteList.addEventListener("click", (e) => {

    if (e.target.classList.contains("add_to_cart_from_favorite")) {
      const button = e.target;
      const id = button.getAttribute("data-id");
      const title = button.getAttribute("data-title");
      const image = button.getAttribute("data-image");
      const price = parseFloat(button.getAttribute("data-price"));
      const color = button.getAttribute("data-color");

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItemIndex = cart.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1;
      } else {
        const cartItem = { id, title, image, price, color, quantity: 1 };
        cart.push(cartItem);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartBadge();
    }

  });



});



