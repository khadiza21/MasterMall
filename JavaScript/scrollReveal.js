ScrollReveal().reveal(".top_nav", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
});
ScrollReveal().reveal(".nav", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 100,
});

ScrollReveal().reveal(".header", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 200,
});
ScrollReveal().reveal(".section", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 100,
});
ScrollReveal().reveal(".footer", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 100,
});


// contact page
// ScrollReveal animations
ScrollReveal().reveal('.about-header', { delay: 200, duration: 1200 });
ScrollReveal().reveal('.details', { delay: 200, duration: 1200, origin: 'left', distance: '50px' });
ScrollReveal().reveal('.map', { delay: 200, duration: 1200, origin: 'right', distance: '50px' });
ScrollReveal().reveal('.form-container', { delay: 200, duration: 1200, origin: 'bottom', distance: '50px' });

// Form validation
document.querySelector('#contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Form submitted successfully!');
});
