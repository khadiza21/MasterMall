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
    bestSellingProducts = data
      .filter((product) => product.reviews > 100)
      .sort((a, b) => b.reviews - a.reviews);
    productDataset = data;

    displayFlashSellingProducts(flashSellingProducts);
    displayBestSellingProducts(bestSellingProducts);
    displayProducts(productDataset);

    initializeFavoriteIcons();
  })
  .catch((error) => console.error("Error:", error));

// Flash Section
function displayFlashSellingProducts(products) {
  const flashSellingProductsContainer = document.querySelector(
    ".flash-selling-products"
  );
  if (!flashSellingProductsContainer) {
    console.error("Flash Selling Products container not found.");
    return;
  }
  swiperProducts(products, flashSellingProductsContainer);
}
function displayBestSellingProducts(products) {
  const bestSellingProductsContainer = document.querySelector(
    ".best-selling-products"
  );

  if (!bestSellingProductsContainer) {
    console.error("Best Selling Products container not found.");
    return;
  }

  swiperProducts(products, bestSellingProductsContainer);
  console.log("Best Selling Products:", products);
}

function swiperProducts(products, swiperWrappers) {
  if (!(swiperWrappers instanceof NodeList) && !Array.isArray(swiperWrappers)) {
    swiperWrappers = [swiperWrappers];
  }

  swiperWrappers.forEach((swiperWrapper) => {
    if (!(swiperWrapper instanceof HTMLElement)) {
      console.error("Invalid element in swiperWrappers.");
      return;
    }

    let cardsHTML = "";
    products.slice(0, 6).forEach((card) => {
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
                <i class="fa-regular fa-heart card_top_icon favorite-icon add_to_favorite"
                 data-id="${card.id}" 
                 id="favorite-icon-${card.id}"
                 data-title="${card.title}"
                 data-image="${card.image}"
                 data-price="${card.price}"
                 data-color="${card.color}"
                 data-rating="${card.rating}" 
                 data-reviews="${card.reviews}" 
                 data-category="${card.category}"
        
                 ></i>
                <i class="fa-regular fa-eye card_top_icon"></i>
              </div>
            </div>
            <div class="card_body">
              <h3 class="card_title">${card.title}</h3>
              <p class="card_price">$${card.price}</p>
              <p class="card_color"><i class="fa-solid fa-droplet"></i> <span>${
                card.color
              }</span></p>
              <div class="card_ratings">
                <div class="card_stars">
                  ${generateStars(card.rating)}
                </div>
                <p class="card_rating_numbers">(${card.reviews})</p>
              </div>
              <button
                class="add_to_cart"
                data-id="${card.id}"
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
  if (!productsData) {
    console.error("Products container not found.");
    return;
  }
  let cardHTML = "";
  products.slice(0, 10).forEach((card, index) => {
    const singleCardHTML = `

      <div class="card">
        <div class="card_top">
          <img
            src="${card.image}"
            alt="${card.title}"
            class="card_img"
          />
        
          <div class="card_top_icons">
          <i class="fa-regular fa-heart card_top_icon favorite-icon add_to_favorite" data-id="${
            card.id
          }" id="favorite-icon-${card.id}"
                 data-title="${card.title}"
                 data-image="${card.image}"
                 data-price="${card.price}"
                 data-color="${card.color}"
                 data-rating="${card.rating}" 
                 data-reviews="${card.reviews}" 
                 data-category="${card.category}"
      ></i>
            <i class="fa-regular fa-eye card_top_icon"></i>
          </div>
        </div>
        <div class="card_body">
          <h3 class="card_title">${card.title}</h3>
          <p class="card_price">$${card.price}</p>
             <p class="card_color"><i class="fa-solid fa-droplet"></i> <span>${
               card.color
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
    cardHTML += singleCardHTML;
  });
  productsData.innerHTML += cardHTML;
  attachEventListeners();
}

  // Add to cart functionality


function attachEventListeners() {

  const addToCartButtons = document.querySelectorAll(".add_to_cart");
  addToCartButtons.forEach((button) => {
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

  const addToFavorite = document.querySelectorAll(".add_to_favorite");
  addToFavorite.forEach((icon) => {
    icon.addEventListener("click", () => {
      const id = icon.getAttribute("data-id");

      let favorite = JSON.parse(localStorage.getItem("favorite")) || [];
      const existingItemIndex = favorite.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        // Remove the item if it exists
        favorite.splice(existingItemIndex, 1);
      } else {
        // Add the item if it doesn't exist
        const favoriteItem = {
          id,
          title: icon.getAttribute("data-title"),
          image: icon.getAttribute("data-image"),
          price: icon.getAttribute("data-price"),
          color: icon.getAttribute("data-color"),
          rating: icon.getAttribute("data-rating"),
          reviews: icon.getAttribute("data-reviews"),
          category: icon.getAttribute("data-category"),
        };
        favorite.push(favoriteItem);
      }

      // Update localStorage
      localStorage.setItem("favorite", JSON.stringify(favorite));

      // Toggle the heart icon dynamically
      toggleFavoriteIcon(id);
      updateFavoriteBadge();
    });
  });
}

function toggleFavoriteIcon(id) {
  const allFavoriteIcons = document.querySelectorAll(`.favorite-icon[data-id="${id}"]`);
  const favorite = JSON.parse(localStorage.getItem("favorite")) || [];
  const isInFavorites = favorite.some((item) => item.id === id);

  allFavoriteIcons.forEach((icon) => {
    icon.classList.toggle("fa-solid", isInFavorites);
    icon.classList.toggle("fa-regular", !isInFavorites);
    icon.classList.toggle("fa-heart", true);
  });
}

function initializeFavoriteIcons() {
  const favorite = JSON.parse(localStorage.getItem("favorite")) || [];
  favorite.forEach((item) => toggleFavoriteIcon(item.id));
}


document.addEventListener("DOMContentLoaded", () => {
  initializeFavoriteIcons(); 
  attachEventListeners();    
});










// Example of dynamically re-attaching listeners for new cards:
function updateDOMWithNewCards(newCardsHTML) {
  const productsContainer = document.querySelector(".products");
  productsContainer.innerHTML += newCardsHTML;
  attachEventListeners(); // Reattach listeners for newly added cards
}

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

// blogs
let latestArticles = [];
fetch("../datasets/article.json")
  .then((response) => response.json())
  .then((data) => {
    latestArticles = data
      .map((article) => ({
        ...article,
        date: new Date(article.date).toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    displayLatestArticles(latestArticles, 2);
  })
  .catch((error) => console.error("Error:", error));

function displayLatestArticles(articles, columns = 2) {
  const blogsContainer = document.querySelector(".blogs-container");
  const columnsArray = Array.from({ length: columns }, () => []);

  articles.slice(0, 6).forEach((article, index) => {
    columnsArray[index % columns].push(article);
  });

  blogsContainer.innerHTML = columnsArray
    .map(
      (columnArticles) => `
      <div class="blogs-column">
        ${columnArticles
          .map(
            (article) => `
          <div class="article">
            <div class="article-img">
              <img class="clickable-img" data-id="${article.id}" src="${article.smallImage}" alt="${article.title}" />
            </div>
            <div class="article-content">
              <div class="article-title">
                <h4 class="clickable-title" data-id="${article.id}">${article.title}</h4>
              </div>
              <div class="article-description">
                <p>${article.description} <span class="clickable-more" data-id="${article.id}">more</span></p>
              </div>
              <div class="article-date">
                <div><i class="fa-solid fa-calendar"></i><span>${article.date}</span></div>
                <div><i class="fa-solid fa-eye"></i><span>${article.views}</span></div>
              </div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `
    )
    .join("");

  const redirectUrl = "../article-details.html";

  document
    .querySelectorAll(".clickable-img, .clickable-title, .clickable-more")
    .forEach((element) => {
      element.addEventListener("click", (event) => {
        const articleId = event.target.getAttribute("data-id");
        if (articleId) {
          window.location.href = `${redirectUrl}?id=${articleId}`;
        }
      });
    });
}

// Support
const servicesContainer = document.querySelector(".services_container");
if (servicesContainer) {
  fetch("../datasets/services.json")
    .then((response) => response.json())
    .then((services) => {
      let servicesHTML = "";

      services.forEach((service) => {
        servicesHTML += `
            <div class="service">
              <img src="${service.imgSrc}" alt="${service.altText}" class="service_image" />
              <div class="service_details">
                <h3 class="service_title">${service.title}</h3>
                <p class="service_p">${service.description}</p>
              </div>
            </div>
          `;
      });

      servicesContainer.innerHTML = servicesHTML;
    })
    .catch((error) => console.error("Error loading services:", error));
} else {
  console.error("Error: `.services_container` not found in the DOM.");
}
