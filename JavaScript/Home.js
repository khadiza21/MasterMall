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

const categoriesData = [
  {
    image: "../image/category/trending.webp",
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

categoriesData.forEach((category) => {
  const categoryHTML = `
    <a href="#" class="category_detail">
      <div class="category">
        <img
          src="${category?.image}"
          alt="${category?.alt}"
          class="category_image"
        />
        <p class="category_name">${category?.name}</p>
        <span>(${category?.items} items)</span>
      </div>
    </a>
  `;

  // Append category HTML to categories container
  categoriesContainer.innerHTML += categoryHTML;
});

// Flash Section
const swiperWrappers = document.querySelectorAll(".swiper-wrapper");

// Array of card data

const productData = [
  {
    id: "1",
    color: "Color Not Avaiable",
    image: "../image/flash/blueshoe_2_600x.webp",
    title: "Men Blue Shoe",
    discount: "-10",
    category: "Dress",
    productType: "",
    shopType: "",
    subShopType: "",
    genderType: "",
    sellingCaegory: "",
    price: 60,
    rating: 4,
    reviews: 150,
  },
  {
    id: "2",
    color: "Color Not Avaiable",
    image: "../image/flash/gold-watch_2_600x.webp",
    title: "Women Gold Watch",
    discount: "-10",
    category: "Dress",
    productType: "",
    shopType: "",
    subShopType: "",
    genderType: "",
    sellingCaegory: "",
    price: 60,
    rating: 4,
    reviews: 150,
  },
  {
    id: "3",
    color: "Color Not Avaiable",
    discount: "-10",
    category: "Dress",
    productType: "",
    shopType: "",
    subShopType: "",
    genderType: "",
    sellingCaegory: "",
    image: "../image/flash/sunglass_2_600x.webp",
    title: "Uni Sunglass",
    price: 60,
    rating: 4,
    reviews: 150,
  },
  {
    id: "4",
    color: "Color Not Avaiable",
    discount: "-10",
    category: "Dress",
    productType: "",
    shopType: "",
    subShopType: "",
    genderType: "",
    sellingCaegory: "",
    image: "../image/flash/ment-shirt_2_600x.webp",
    title: "Men Casual T-Shirt",
    price: 100,
    rating: 4,
    reviews: 76,
  },
  {
    id: "5",
    color: "Color Not Avaiable",
    discount: "-10",
    category: "Dress",
    productType: "",
    shopType: "",
    subShopType: "",
    genderType: "",
    sellingCaegory: "",
    image: "../image/flash/shirt_2_600x.webp",
    title: "Men Formal Shirt",
    price: 150,
    rating: 5,
    reviews: 120,
  },
  {
    id: "6",
    color: "Color Not Avaiable",
    discount: "-10",
    category: "Dress",
    productType: "",
    shopType: "",
    subShopType: "",
    genderType: "",
    sellingCaegory: "",
    image: "../image/flash/men-coat_2_600x.webp",
    title: "Men Coat",
    price: 90,
    rating: 3,
    reviews: 88,
  },
  {
    id: "7",
    color: "Color Not Avaiable",
    discount: "-10",
    category: "Dress",
    productType: "",
    shopType: "",
    subShopType: "",
    genderType: "",
    sellingCaegory: "",
    image: "../image/flash/jacket_2_600x.webp",
    title: "Men Winter Jacket",
    price: 110,
    rating: 4,
    reviews: 64,
  },
  {
    id: "8",
    color: "Color Not Avaiable",
    discount: "-10",
    category: "Dress",
    productType: "",
    shopType: "",
    subShopType: "",
    genderType: "",
    sellingCaegory: "",
    image: "../image/flash/hat_2_600x.webp",
    title: "Men's Hat",
    price: 130,
    rating: 5,
    reviews: 90,
  },
  {
    id: "9",
    color: "Color Not Avaiable",
    discount: "-10",
    category: "Dress",
    productType: "",
    shopType: "",
    subShopType: "",
    genderType: "",
    sellingCaegory: "",
    image: "../image/flash/jacket_9_600x.webp",
    title: "Kids Winter Jacket",
    price: 50,
    rating: 4,
    reviews: 45,
  },
  {
    id: "10",
    color: "Color Not Avaiable",
    discount: "-10",
    category: "Dress",
    productType: "",
    shopType: "",
    subShopType: "",
    genderType: "",
    sellingCaegory: "",
    image: "../image/flash/poloshirt_2_600x.webp",
    title: "Men Polo Shirt",
    price: 85,
    rating: 3,
    reviews: 30,
  },
];

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
const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

swiperWrappers.forEach((swiperWrapper) => {
  productData.forEach((card, index) => {

    const isFavorite = favorites.some(fav => fav.id === card.id);

    const cardHTML = `
    <div class="swiper-slide">
      <div class="card">
        <div class="card_top">
          <img
            src="${card?.image}"
            alt="${card?.title}"
            class="card_img"
          />
          <div class="card_tag"><span>${card?.discount}</span></div>
          <div class="card_top_icons">
             <i class="${isFavorite ? 'fa-solid' : 'fa-regular'} fa-heart card_top_icon" data-id="${card?.id}"></i>
            <i class="fa-regular fa-eye card_top_icon"></i>
          </div>
        </div>
        <div class="card_body">
          <h3 class="card_title">${card?.title}</h3>
          <p class="card_price">$${card?.price}.00</p>
                <p class="card_color"><i class="fa-solid fa-droplet"></i> <span>${
                  card?.color
                }</span></p>
          <div class="card_ratings">
            <div class="card_stars">
              ${generateStars(card?.rating)}
            </div>
            <p class="card_rating_numbers">(${card?.reviews})</p>
          </div>
         

          <button
            class="add_to_cart"
            data-id="${card?.id}"
            data-title="${card?.title}"
            data-image="${card?.image}"
            data-price="${card?.price}"
            data-color="${card?.color}"
            
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
    swiperWrapper.innerHTML += cardHTML;
  });

  swiperWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('card_top_icon')) {
      const heartIcon = e.target;
      const cardId = heartIcon.getAttribute('data-id');
      
      heartIcon.classList.toggle('fa-regular');
      heartIcon.classList.toggle('fa-solid');

      const cardData = productData.find(card => card.id == cardId);

      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      
      const favoriteIndex = favorites.findIndex(fav => fav.id == cardId);
      
      if (favoriteIndex === -1) {
        favorites.push(cardData);
      } else {
        favorites.splice(favoriteIndex, 1);
      }
      
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  });
});

// Our Products Part
const productsData = document.querySelector(".products");

productData.forEach((card, index) => {
  const cardHTML = `

      <div class="card">
        <div class="card_top">
          <img
            src="${card?.image}"
            alt="${card?.title}"
            class="card_img"
          />
        
          <div class="card_top_icons">
            <i class="fa-regular fa-heart card_top_icon"></i>
            <i class="fa-regular fa-eye card_top_icon"></i>
          </div>
        </div>
        <div class="card_body">
          <h3 class="card_title">${card?.title}</h3>
          <p class="card_price">$${card?.price}.00</p>
          <p class="card_color"><i class="fa-solid fa-droplet"></i> <span>${
            card?.color
          }</span></p>

          <div class="card_ratings">
            <div class="card_stars">
              ${generateStars(card.rating)}
            </div>
            <p class="card_rating_numbers">(${card.reviews})</p>
          </div>
          <button
            class="add_to_cart"
            data-id="${card?.id}"
            data-title="${card?.title}"
            data-image="${card?.image}"
            data-price="${card?.price}"
            data-color="${card.color}"
          >
            Add to Cart
          </button>
        </div>
      </div>
   
  `;
  productsData.innerHTML += cardHTML;
});

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
    <img src="${service?.imgSrc}" alt="${service?.altText}" class="service_image" />
    <div class="service_details">
      <h3 class="service_title">${service?.title}</h3>
      <p class="service_p">${service?.description}</p>
    </div>
  `;

  servicesContainer.appendChild(serviceDiv);
});

// mobile nav
const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", () => {
  Nav.classList.toggle("mobile_nav_hide");
});

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
  });
});
