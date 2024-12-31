var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

// ScrollReveal animations
ScrollReveal().reveal(".tap_nav", {
  delay: 200,
  duration: 1200,
  origin: "top",
});
ScrollReveal().reveal(".top_nav_wrapper", {
  delay: 200,
  duration: 1200,
  origin: "right",
});
ScrollReveal().reveal(".about_header", {
  delay: 200,
  duration: 1200,
  origin: "left",
});
ScrollReveal().reveal(".story_container", {
  delay: 200,
  distance: "50px",
  duration: 1000,
  origin: "bottom",
});
ScrollReveal().reveal(".aboutService_container", {
  delay: 200,
  duration: 1200,
  origin: "top",
  distance: "50px",
});
ScrollReveal().reveal(".team_header", {
  delay: 200,
  duration: 1200,
  origin: "bottom",
});
ScrollReveal().reveal(".mySwiper", {
  delay: 200,
  duration: 1200,
  origin: "right",
});
ScrollReveal().reveal(".footer_container", {
  delay: 200,
  duration: 1200,
  origin: "top",
  distance: "50px",
});

fetch("../datasets/team-members.json")
  .then((response) => response.json())
  .then((teamMembers) => {
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    swiperWrapper.innerHTML = teamMembers
      .map(
        (member) => `
      <div class="swiper-slide">
        <div class="team-member-wrapper">
          <div class="image-container">
            <img  src="../image/about/${member.img}" alt="Team Member" class="team-img"/>
            <div class="overlay">
              <div class="team-member-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div class="team-member-about">
            <h4 class="team-name">${member.name}</h4>
            <p class="team-role">${member.role}</p>
          </div>
        </div>
      </div>
    `
      )
      .join("");
  })
  .catch((error) => console.error("Error loading team members:", error));
