const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", () => {
    Nav.classList.toggle("mobile_nav_hide");
});


window.onscroll = function () {
    const topNav = document.querySelector('.top_nav');
    const navbar = document.getElementById('navbar');
  


    if (window.scrollY > 50) {
        topNav.style.display = 'none';
        navbar.style.top = '0';

    } else {
        topNav.style.display = 'flex';
        navbar.style.top = '40px';
    }
};

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



