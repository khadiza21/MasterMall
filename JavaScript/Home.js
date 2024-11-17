const slides = document.querySelectorAll(".banner-swiper-slide");
const paginationBullets = document.querySelectorAll(
  ".banner-swiper-pagination-bullet"
);
let currentIndex = 0;
function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("banner-active"));
  paginationBullets.forEach((bullet) =>
    bullet.classList.remove("banner-active")
  );
  slides[index].classList.add("banner-active");
  paginationBullets[index].classList.add("banner-active");
}
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}
setInterval(nextSlide, 3000);
document
  .querySelector(".banner-swiper-button-next")
  .addEventListener("click", nextSlide);
document
  .querySelector(".banner-swiper-button-prev")
  .addEventListener("click", prevSlide);

paginationBullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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

// Array of card data
let productDataset = [];
let flashSellingProducts = [];
let bestSellingProducts = [];
fetch("../datasets/products.json")
  .then((response) => response.json())
  .then((data) => {

    flashSellingProducts = data.filter((product) => product.isFlashSale);
    bestSellingProducts = data.filter(product => product.reviews > 100).sort((a, b) => b.reviews - a.reviews);
    productDataset = data;

    displayFlashSellingProducts(flashSellingProducts);
    displayBestSellingProducts(bestSellingProducts);
    displayProducts(productDataset);
  })
  .catch((error) => console.error("Error:", error));

// Flash Section
function displayFlashSellingProducts(products) {
  const flashSellingProductsContainer = document.querySelector(".flash-selling-products");

  if (!flashSellingProductsContainer) {
    console.error("Flash Selling Products container not found.");
    return;
  }


  swiperProducts(products, flashSellingProductsContainer);
  console.log(products)

}
function displayBestSellingProducts(products) {
  const bestSellingProductsContainer = document.querySelector(".best-selling-products");


  if (!bestSellingProductsContainer) {
    console.error("Best Selling Products container not found.");
    return;
  }

  swiperProducts(products, bestSellingProductsContainer);
  console.log("Best Selling Products:", products);

}

function swiperProducts(products, swiperWrappers) {
  // Ensure swiperWrappers is an array
  if (!Array.isArray(swiperWrappers) && !(swiperWrappers instanceof NodeList)) {
    swiperWrappers = [swiperWrappers]; // Wrap single element in an array
  }

  swiperWrappers.forEach((swiperWrapper) => {
    let cardsHTML = "";
    products.slice(0, 6).forEach((card, index) => {
      const cardHTML = `
        <div class="swiper-slide">
          <div class="card">
            <div class="card_top">
              <img
                src="${card.image}"
                alt="${card.title}"
                class="card_img"
              />
              <div class="card_tag"><span>${card.discount}</span></div>
              <div class="card_top_icons">
                <i class="fa-regular fa-heart card_top_icon favorite-icon add_to_favorite" data-id="${card.id}" id="favorite-icon-${card.id}"></i>
                <i class="fa-regular fa-eye card_top_icon"></i>
              </div>
            </div>
            <div class="card_body">
              <h3 class="card_title">${card.title}</h3>
              <p class="card_price">$${card.price}</p>
              <p class="card_color"><i class="fa-solid fa-droplet"></i> <span>${card.color}</span></p>
              <div class="card_ratings">
                <div class="card_stars">
                  ${generateStars(card.rating)}
                </div>
                <p class="card_rating_numbers">(${card.reviews})</p>
              </div>
              <button
                class="add_to_cart"
                data-id="${index + 1}"
                data-title="${card.title}"
                data-image="${card.image}"
                data-price="${card.price}"
                data-color="${card.color}"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      `;
      cardsHTML += cardHTML;
    });
    swiperWrapper.innerHTML = cardsHTML;
  });
}


// Our Products Part

function displayProducts(products) {
  const productsData = document.querySelector(".products");
  products.slice(0, 10).forEach((card, index) => {
    const cardHTML = `

      <div class="card">
        <div class="card_top">
          <img
            src="${card.image}"
            alt="${card.title}"
            class="card_img"
          />
        
          <div class="card_top_icons">
          <i class="fa-regular fa-heart card_top_icon favorite-icon add_to_favorite" data-id="${card.id
      }" id="favorite-icon-${card.id}"></i>
            <i class="fa-regular fa-eye card_top_icon"></i>
          </div>
        </div>
        <div class="card_body">
          <h3 class="card_title">${card.title}</h3>
          <p class="card_price">$${card.price}</p>
             <p class="card_color"><i class="fa-solid fa-droplet"></i> <span>${card.color
      }</span></p>
          <div class="card_ratings">
            <div class="card_stars">
              ${generateStars(card.rating)}
            </div>
            <p class="card_rating_numbers">(${card.reviews})</p>
          </div>
          <button
            class="add_to_cart"
            data-id="${index + 1}"
            data-title="${card.title}"
            data-image="${card.image}"
            data-price="${card.price}"
             data-color="${card?.color}"
          >
            Add to Cart
          </button>
        </div>
      </div>
   
  `;
    productsData.innerHTML += cardHTML;
  });
}


function updateFavoriteIcons() {
  const favoriteList = JSON.parse(localStorage.getItem("favorite")) || [];

  favoriteList.forEach((item) => {
    const favoriteIcon = document.getElementById(`favorite-icon-${item.id}`);
    if (favoriteIcon) {
      favoriteIcon.classList.remove("fa-regular", "fa-heart");
      favoriteIcon.classList.add("fa-solid", "fa-heart");
    }
  });
}

// add to cart
const addToFavorite = document.querySelectorAll(".add_to_favorite");
// add to favorite

addToFavorite.forEach((icon) => {
  icon.addEventListener("click", () => {
    const id = icon.getAttribute("data-id");
    const title = icon.getAttribute("data-title");
    const image = icon.getAttribute("data-image");
    const price = icon.getAttribute("data-price");
    const color = icon.getAttribute("data-color");

    let favorite = JSON.parse(localStorage.getItem("favorite")) || [];
    const existingItemIndex = favorite.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      // Item is already in favorites, remove it
      favorite.splice(existingItemIndex, 1);
      icon.classList.remove("fa-solid", "fa-heart");
      icon.classList.add("fa-regular", "fa-heart");
    } else {
      // Item is not in favorites, add it
      const favoriteItem = { id, title, image, price, color, quantity: 1 };
      favorite.push(favoriteItem);
      icon.classList.remove("fa-regular", "fa-heart");
      icon.classList.add("fa-solid", "fa-heart");
    }

    // Update local storage with the new favorites list
    localStorage.setItem("favorite", JSON.stringify(favorite));

    updateFavoriteBadge();
  });
});

// Initialize icons on page load based on current favorites
updateFavoriteIcons();

// add to cart
const AddToCart = document.querySelectorAll(".add_to_cart");

AddToCart.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-id");
    const title = button.getAttribute("data-title");
    const image = button.getAttribute("data-image");
    const price = button.getAttribute("data-price");
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
  });
});

// star generate
function generateStars(rating) {
  let starsHTML = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starsHTML += '<i class="fa-solid fa-star"></i>';
    } else {
      starsHTML += '<i class="fa-regular fa-star"></i>';
    }
  }
  return starsHTML;
}

// category section
const categoriesData = [
  {
    image: "../image/category/dummy_600x600_ffffff_cccccc.png",
    name: "Trending",
    alt: "Trending",
    items: 5,
  },
  {
    image: "../image/category/bestSelling.webp",
    name: "Best Selling",
    alt: "Best Selling",
    items: 7,
  },
  {
    image: "../image/category/kids.webp",
    name: "Kids",
    alt: "Kids",
    items: 8,
  },
  {
    image: "../image/category/winter-fashion.webp",
    name: "Winter",
    alt: "Winter",
    items: 5,
  },
  {
    image: "../image/category/ment-tshirt.webp",
    name: "Men T-Shirt",
    alt: "Men T-Shirt",
    items: 23,
  },
  {
    image: "../image/category/featured_jewelry.webp",
    name: "Featured Jewelry",
    alt: "Featured Jewelry",
    items: 13,
  },
  {
    image: "../image/category/f_fashion.webp",
    name: "Featured Fashion",
    alt: "Featured Fashion",
    items: 34,
  },
];
const categoriesContainer = document.querySelector(".categories");

fetch("../datasets/categories.json")
  .then((response) => response.json())
  .then((categoriesData) => {
    categoriesData.forEach((category) => {
      const categoryHTML = `
        <a href="#" class="category_detail">
          <div class="category">
            <img
              src="${category.image}"
              alt="${category.alt}"
              class="category_image"
            />
            <p class="category_name">${category.name}</p>
            <span>(${category.items} items)</span>
          </div>
        </a>
      `;
      categoriesContainer.innerHTML += categoryHTML;
    });
  })
  .catch((error) => console.error("Error loading categories:", error));

// Support
const servicesContainer = document.querySelector(".services_container");
const services = [
  {
    imgSrc: "image/services/10-credit-card.svg",
    altText: "Credit Card",
    title: "Secure Checkout",
    description: "100% Payment Secure.",
  },
  {
    imgSrc: "image/services/4-track.svg",
    altText: "Free Shipping",
    title: "Free Shipping",
    description: "On orders over $99.",
  },
  {
    imgSrc: "image/services/7-support.svg",
    altText: "Online Support",
    title: "Online Support",
    description: "Ensure the product quality.",
  },
  {
    imgSrc: "image/services/9-money.svg",
    altText: "Money Back",
    title: "Money Back",
    description: "Money back in 15 days.",
  },
];
services.forEach((service) => {
  const serviceDiv = document.createElement("div");
  serviceDiv.classList.add("service");

  serviceDiv.innerHTML = `
    <img src="${service.imgSrc}" alt="${service.altText}" class="service_image" />
    <div class="service_details">
      <h3 class="service_title">${service.title}</h3>
      <p class="service_p">${service.description}</p>
    </div>
  `;

  servicesContainer.appendChild(serviceDiv);
});
// mobile nav
