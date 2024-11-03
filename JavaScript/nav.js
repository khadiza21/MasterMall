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



