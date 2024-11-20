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