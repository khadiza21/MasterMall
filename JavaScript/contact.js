// ScrollReveal animations
ScrollReveal().reveal(".contact_header", {
  delay: 200,
  duration: 1200,
  origin: "right",
});
ScrollReveal().reveal(".contact-box", {
  delay: 200,
  distance: "50px",
  duration: 1000,
  origin: "bottom",
});
ScrollReveal().reveal(".map", {
  delay: 200,
  duration: 1200,
  origin: "top",
  distance: "50px",
});
ScrollReveal().reveal(".form-container", {
  delay: 200,
  duration: 1200,
  origin: "bottom",
  distance: "50px",
});
ScrollReveal().reveal(".people", {
  delay: 200,
  duration: 1200,
  origin: "top",
  distance: "50px",
});

// Form validation
document
  .querySelector("#contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
  });

document.addEventListener("scroll", function () {
  const reveals = document.querySelectorAll(".scroll-reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("scroll-reveal-visible");
    }
  }
});

ScrollReveal().reveal(".scroll-reveal", {
  duration: 1000,
  distance: "50px",
  easing: "ease-out",
  origin: "bottom",
  interval: 200,
});

//

const contactData = [
  {
    icon: "fa-solid fa-phone",
    lines: ["Toll-Free: 0000 - 000 - 0000", "Fax: 0000 - 000 - 0000"],
  },
  {
    icon: "fa-solid fa-envelope",
    lines: ["example@mail.com", "support@mail.com"],
  },
  {
    icon: "fa-solid fa-location-dot",
    lines: ["No: 58 A, East Madison Street,", "Baltimore, MD, USA 4508"],
  },
];

const contactBoxContainer = document.querySelector(".contact-boxes");
contactData.forEach(({ icon, lines }) => {
  const box = document.createElement("div");
  box.className = "contact-box";
  box.innerHTML = `
      <div class="box">
        <div class="box-icon"><i class="${icon}"></i></div>
        <div class="box-text">${lines
          .map((line) => `<p>${line}</p>`)
          .join("")}</div>
      </div>
    `;
  contactBoxContainer.appendChild(box);
});

//

const peopleData = [
  {
    imgSrc: "../image/contact/dummy_150x150_ffffff_cccccc.png",
    alt: "John Doe",
    name: "John Doe",
    position: "Senior Marketing Manager",
    phone: "000 000 000 00",
    email: "contact@example.com",
  },
  {
    imgSrc: "../image/contact/dummy_150x150_ffffff_cccccc.png",
    alt: "John Doe",
    name: "John Doe",
    position: "Senior Marketing Manager",
    phone: "000 000 000 00",
    email: "contact@example.com",
  },
  {
    imgSrc: "../image/contact/dummy_150x150_ffffff_cccccc.png",
    alt: "John Doe",
    name: "John Doe",
    position: "Senior Marketing Manager",
    phone: "000 000 000 00",
    email: "contact@example.com",
  },
];

const teamMemberContainer = document.querySelector(".people");
peopleData.forEach(({ imgSrc, alt, name, position, phone, email }) => {
  const person = document.createElement("div");
  person.className = "contact-person scroll-reveal";
  person.innerHTML = `
      <div class="contact-people-box">
        <img src="${imgSrc}" alt="${alt}" />
        <div class="people-info">
          <div class="people-contact-info">
            <h3><i class="fa-solid fa-signature"></i> <span>${name}</span></h3>
            <p><i class="fa-solid fa-address-card"></i> ${position}</p>
            <p><i class="fa-solid fa-phone"></i> ${phone}</p>
            <p><i class="fa-solid fa-envelope"></i> ${email}</p>
          </div>
        </div>
      </div>
    `;
  teamMemberContainer.appendChild(person);
});
