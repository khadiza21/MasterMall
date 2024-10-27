// mobile nav
const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", () => {
  Nav.classList.toggle("mobile_nav_hide");
});

// ScrollReveal animations
ScrollReveal().reveal('.auth_container', { delay: 200, duration: 1200, origin: 'bottom' });
