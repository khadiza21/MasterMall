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

document.addEventListener("click", (event) => {
    const isClickInsideNav = mobileNav.contains(event.target);
    const isClickInsideHamburger = hamburger.contains(event.target);

    if (!isClickInsideNav && !isClickInsideHamburger && !mobileNav.classList.contains("mobile_nav_hide")) {
        mobileNav.classList.add("mobile_nav_hide");
        icon.classList.remove("fa-x");
        icon.classList.add("fa-bars");
    }
});




// cart data and favorite data
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
    return cartData.length > 0 ? cartData.reduce((total, item) => total + item.quantity, 0) : 0;
}
function getTotalFavoriteQuantity() {
    const favoriteData = getFavoriteData();
    return favoriteData.length;
}
function updateCartBadge() {
    const cartBadges = document.querySelectorAll(".cart_badge_num");
    const totalCartQuantity = getTotalCartQuantity();

    cartBadges.forEach(badge => {
        badge.textContent = totalCartQuantity > 0 ? totalCartQuantity : "0";
        badge.style.display = "inline-block";
    });
}
function updateFavoriteBadge() {
    const favoriteBadges = document.querySelectorAll(".favorite_badge_num");
    const totalFavoriteQuantity = getTotalFavoriteQuantity();

    favoriteBadges.forEach(badge => {
        badge.textContent = totalFavoriteQuantity > 0 ? totalFavoriteQuantity : "0";
        badge.style.display = "inline-block";
    });
}

updateCartBadge();
updateFavoriteBadge();



// Get the button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
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

// active link 
const currentPageActiveLink = window.location.pathname.split("/").pop();

// Function to set active class
function setActiveLink(selector) {
  document.querySelectorAll(selector).forEach(link => {
    if (link.getAttribute("href") === currentPageActiveLink) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Apply active class to desktop and mobile nav links
setActiveLink(".nav_link");
setActiveLink(".mobile_nav_link");



// js
document.addEventListener("DOMContentLoaded", () => {
    const favoriteModal = document.getElementById("favoriteModal");
    const closeModal = document.querySelector(".close_modal");
    const favoriteIcon = document.querySelector(".nav_heart");
  
    // Function to populate favorite modal with items
    const populateFavoriteList = () => {
      const favoriteItems = JSON.parse(localStorage.getItem("favorite")) || [];
      const favoriteList = document.getElementById("favoriteList");
      const subtotalAmount = document.getElementById("subtotalAmount");
      favoriteList.innerHTML = ""; // Clear the list
      let subtotal = 0;
  
      if (favoriteItems.length === 0) {
        favoriteList.innerHTML = "<p>No items in the favorite list.</p>";
        subtotalAmount.textContent = "Tk 0.00";
        return;
      }
  
      favoriteItems.forEach((item) => {
        subtotal += item.quantity * item.price;
  
        const li = document.createElement("li");
        li.innerHTML = `
          <img src="${item.image}" alt="${item.title}" />
          <div>
            <p>${item.title} - ${item.size || ""} / ${item.color || ""}</p>
            <p>${item.quantity} x Tk ${item.price.toLocaleString()}</p>
          </div>
          <span class="remove_item" data-id="${item.id}">&times;</span>
        `;
        favoriteList.appendChild(li);
      });
  
      subtotalAmount.textContent = `Tk ${subtotal.toLocaleString()}`;
    };
  
    // Show the modal
    favoriteIcon.addEventListener("click", () => {
      populateFavoriteList();
      favoriteModal.classList.add("active");
    });
  
    // Hide the modal when the cross icon is clicked
    closeModal.addEventListener("click", () => {
      favoriteModal.classList.remove("active");
    });
  
    // Hide the modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
      if (event.target === favoriteModal) {
        favoriteModal.classList.remove("active");
      }
    });
  
    // Remove item from favorite list
    const favoriteList = document.getElementById("favoriteList");
    favoriteList.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove_item")) {
        const itemId = e.target.dataset.id;
        let favoriteItems = JSON.parse(localStorage.getItem("favorite")) || [];
        favoriteItems = favoriteItems.filter((item) => item.id !== itemId);
        localStorage.setItem("favorite", JSON.stringify(favoriteItems));
        populateFavoriteList();
      }
    });
  });
  