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
const productData = [
  {
    id: "1",
    image: "../image/flash/blueshoe_2_600x.webp",
    title: "Men Blue Shoe",
    price: 60,
    discount: "-40%",
    rating: 4,
    reviews: 150,
    discount: "-10",
    category: "Dress",
    productType: "",
    shopType: "",
    subShopType: "",
    genderType: "",
    sellingCategory: "",
    color: "Red"
  },
  {
    id: "2",
    image: "../image/flash/gold-watch_2_600x.webp",
    title: "Women Gold Watch",
    price: 60,
    discount: "-40%",
    rating: 4,
    reviews: 150,
    category: "Dress",
    productType: "",
    shopType: "",
    subShopType: "",
    genderType: "",
    sellingCategory: "",
    color: "Black"
  },
  {
    id: "3",
    image: "../image/flash/sunglass_2_600x.webp",
    title: "Uni Sunglass",
    price: 60,
    discount: "-40%",
    rating: 4,
    reviews: 150,
    category: "Dress",
    productType: "",
    shopType: "",
    subShopType: "",
    genderType: "",
    sellingCategory: "",
    color: "Blue"
  },
  {
    id: "4",
    image: "../image/flash/ment-shirt_2_600x.webp",
    title: "Men Casual T-Shirt",
    price: 100,
    discount: "-30%",
    rating: 4,
    reviews: 76,
    category: "Dress",
    productType: "",
    shopType: "",
    subShopType: "",
    genderType: "",
    sellingCategory: "",
    color: "Green"
  },
  {
    id: "5",
    image: "../image/flash/shirt_2_600x.webp",
    title: "Men Formal Shirt",
    price: 150,
    discount: "-20%",
    rating: 5,
    reviews: 120,
    category: "Dress",
    productType: "",
    shopType: "",
    subShopType: "",
    genderType: "",
    sellingCategory: "",
    color: "Light Pink"
  },
  {
    id: "6",
    image: "../image/flash/men-coat_2_600x.webp",
    title: "Men Coat",
    price: 90,
    discount: "-50%",
    rating: 3,
    reviews: 88,
    category: "Dress",
    productType: "",
    shopType: "",
    subShopType: "",
    genderType: "",
    sellingCategory: "",
    color: "Light Green"
  },
  {
    id: "7",
    image: "../image/flash/jacket_2_600x.webp",
    title: "Men Winter Jacket",
    price: 110,
    discount: "-10%",
    rating: 4,
    reviews: 64,
    category: "Dress",
    productType: "",
    shopType: "",
    subShopType: "",
    genderType: "",
    sellingCategory: "",
    color: "Light Blue"
  },
  {
    id: "8",
    image: "../image/flash/hat_2_600x.webp",
    title: "Men's Hat",
    price: 130,
    discount: "-15%",
    rating: 5,
    reviews: 90,
    category: "Dress",
    productType: "",
    shopType: "",
    subShopType: "",
    genderType: "",
    sellingCategory: "",
    color: "Grey"
  },
  {
    id: "9",
    image: "../image/flash/jacket_9_600x.webp",
    title: "Kids Winter Jacket",
    price: 50,
    discount: "-25%",
    rating: 4,
    reviews: 45,
    category: "Dress",
    productType: "",
    shopType: "",
    subShopType: "",
    genderType: "",
    sellingCategory: "",
    color: "White"
  },
  {
    id: "10",
    image: "../image/flash/poloshirt_2_600x.webp",
    title: "Men Polo Shirt",
    price: 85,
    discount: "-35%",
    rating: 3,
    reviews: 30,
    category: "Dress",
    productType: "",
    shopType: "",
    subShopType: "",
    genderType: "",
    sellingCategory: "",
    color: "Light-grey"
  },
];
// Flash Section
const swiperWrappers = document.querySelectorAll(".swiper-wrapper");


swiperWrappers.forEach((swiperWrapper) => {
  productData.forEach((card, index) => {
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
           <i 
           class="add_to_favorite  fa-regular fa-heart card_top_icon favorite-icon" 
            data-id="${index + 1}"
            data-title="${card.title}"
            data-image="${card.image}"
            data-price="${card.price}"
             data-color="${card.color}"
           ></i>
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
    swiperWrapper.innerHTML += cardHTML;
  });


});


// Our Products Part 
const productsData = document.querySelector(".products");
productData.forEach((card, index) => {
  const cardHTML = `

      <div class="card">
        <div class="card_top">
          <img
            src="${card.image}"
            alt="${card.title}"
            class="card_img"
          />
        
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
             data-color="${card?.color}"
          >
            Add to Cart
          </button>
        </div>
      </div>
   
  `;
  productsData.innerHTML += cardHTML;
});


// add to cart
const AddToFavorite = document.querySelectorAll(".add_to_favorite");

AddToFavorite.forEach((icon) => {
  icon.addEventListener("click", () => {
    const id = icon.getAttribute("data-id");
    const title = icon.getAttribute("data-title");
    const image = icon.getAttribute("data-image");
    const price = icon.getAttribute("data-price");
    const color = icon.getAttribute("data-color");

    let favorite = JSON.parse(localStorage.getItem("favorite")) || [];
    const existingItemIndex = favorite.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      favorite[existingItemIndex].quantity += 1;
    } else {
      const favoriteItem = { id, title, image, price, color, quantity: 1 };
      favorite.push(favoriteItem);
    }

    localStorage.setItem("favorite", JSON.stringify(favorite));

   
    updateFavoriteBadge();
  });
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
          src="${category.image}"
          alt="${category.alt}"
          class="category_image"
        />
        <p class="category_name">${category.name}</p>
        <span>(${category.items} items)</span>
      </div>
    </a>
  `;

  // Append category HTML to categories container
  categoriesContainer.innerHTML += categoryHTML;
});
// Support 
const servicesContainer = document.querySelector('.services_container');
const services = [
  {
    imgSrc: "image/services/10-credit-card.svg",
    altText: "Credit Card",
    title: "Secure Checkout",
    description: "100% Payment Secure."
  },
  {
    imgSrc: "image/services/4-track.svg",
    altText: "Free Shipping",
    title: "Free Shipping",
    description: "On orders over $99."
  },
  {
    imgSrc: "image/services/7-support.svg",
    altText: "Online Support",
    title: "Online Support",
    description: "Ensure the product quality."
  },
  {
    imgSrc: "image/services/9-money.svg",
    altText: "Money Back",
    title: "Money Back",
    description: "Money back in 15 days."
  }
];
services.forEach(service => {
  const serviceDiv = document.createElement('div');
  serviceDiv.classList.add('service');

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
const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", () => {
  Nav.classList.toggle("mobile_nav_hide");
});