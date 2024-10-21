// contact page
const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", () => {
  Nav.classList.toggle("mobile_nav_hide");
});

// ScrollReveal animations
ScrollReveal().reveal('.contact_header', { delay: 200, duration: 1200, origin: 'right' });
ScrollReveal().reveal('.contact-box', { delay: 200, distance: '50px', duration: 1000, origin: 'bottom' });
ScrollReveal().reveal('.map', { delay: 200, duration: 1200, origin: 'top', distance: '50px' });
ScrollReveal().reveal('.form-container', { delay: 200, duration: 1200, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.people', { delay: 200, duration: 1200, origin: 'top', distance: '50px' });

// Form validation
document.querySelector('#contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted successfully!');
});

document.addEventListener('scroll', function () {
    const reveals = document.querySelectorAll('.scroll-reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('scroll-reveal-visible');
        }
    }
});


ScrollReveal().reveal('.scroll-reveal', {
    duration: 1000,
    distance: '50px',
    easing: 'ease-out',
    origin: 'bottom',
    interval: 200
});

