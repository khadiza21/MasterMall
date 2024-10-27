var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
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

// Flash Section
const swiperWrappers = document.querySelectorAll(".swiper-wrapper");

// Array of card data
const cardData = [
  {
    image: "../image/flash/blueshoe_2_600x.webp",
    title: "Men Blue Shoe",
    price: 60,
    discount: "-40%",
    rating: 4,
    reviews: 150,
  },
  {
    image: "../image/flash/gold-watch_2_600x.webp",
    title: "Women Gold Watch",
    price: 60,
    discount: "-40%",
    rating: 4,
    reviews: 150,
  },
  {
    image: "../image/flash/sunglass_2_600x.webp",
    title: "Uni Sunglass",
    price: 60,
    discount: "-40%",
    rating: 4,
    reviews: 150,
  },
  {
    image: "../image/flash/ment-shirt_2_600x.webp",
    title: "Men Casual T-Shirt",
    price: 100,
    discount: "-30%",
    rating: 4,
    reviews: 76,
  },
  {
    image: "../image/flash/shirt_2_600x.webp",
    title: "Men Formal Shirt",
    price: 150,
    discount: "-20%",
    rating: 5,
    reviews: 120,
  },
  {
    image: "../image/flash/men-coat_2_600x.webp",
    title: "Men Coat",
    price: 90,
    discount: "-50%",
    rating: 3,
    reviews: 88,
  },
  {
    image: "../image/flash/jacket_2_600x.webp",
    title: "Men Winter Jacket",
    price: 110,
    discount: "-10%",
    rating: 4,
    reviews: 64,
  },
  {
    image: "../image/flash/hat_2_600x.webp",
    title: "Men's Hat",
    price: 130,
    discount: "-15%",
    rating: 5,
    reviews: 90,
  },
  {
    image: "../image/flash/jacket_9_600x.webp",
    title: "Kids Winter Jacket",
    price: 50,
    discount: "-25%",
    rating: 4,
    reviews: 45,
  },
  {
    image: "../image/flash/poloshirt_2_600x.webp",
    title: "Men Polo Shirt",
    price: 85,
    discount: "-35%",
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


swiperWrappers.forEach((swiperWrapper) => {
  cardData.forEach((card, index) => {
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
            <i class="fa-regular fa-heart card_top_icon"></i>
            <i class="fa-regular fa-eye card_top_icon"></i>
          </div>
        </div>
        <div class="card_body">
          <h3 class="card_title">${card.title}</h3>
          <p class="card_price">$${card.price}</p>
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

const productData = [
  {
    image: "../image/flash/blueshoe_2_600x.webp",
    title: "Men Blue Shoe",
    price: 60,
    rating: 4,
    reviews: 150,
  },
  {
    image: "../image/flash/gold-watch_2_600x.webp",
    title: "Women Gold Watch",
    price: 60,
    rating: 4,
    reviews: 150,
  },
  {
    image: "../image/flash/sunglass_2_600x.webp",
    title: "Uni Sunglass",
    price: 60,
    rating: 4,
    reviews: 150,
  },
  {
    image: "../image/flash/ment-shirt_2_600x.webp",
    title: "Men Casual T-Shirt",
    price: 100,
    rating: 4,
    reviews: 76,
  },
  {
    image: "../image/flash/shirt_2_600x.webp",
    title: "Men Formal Shirt",
    price: 150,
    rating: 5,
    reviews: 120,
  },
  {
    image: "../image/flash/men-coat_2_600x.webp",
    title: "Men Coat",
    price: 90,
    rating: 3,
    reviews: 88,
  },
  {
    image: "../image/flash/jacket_2_600x.webp",
    title: "Men Winter Jacket",
    price: 110,
    rating: 4,
    reviews: 64,
  },
  {
    image: "../image/flash/hat_2_600x.webp",
    title: "Men's Hat",
    price: 130,
    rating: 5,
    reviews: 90,
  },
  {
    image: "../image/flash/jacket_9_600x.webp",
    title: "Kids Winter Jacket",
    price: 50,
    rating: 4,
    reviews: 45,
  },
  {
    image: "../image/flash/poloshirt_2_600x.webp",
    title: "Men Polo Shirt",
    price: 85,
    rating: 3,
    reviews: 30,
  },
];


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
            <i class="fa-regular fa-heart card_top_icon"></i>
            <i class="fa-regular fa-eye card_top_icon"></i>
          </div>
        </div>
        <div class="card_body">
          <h3 class="card_title">${card.title}</h3>
          <p class="card_price">$${card.price}</p>
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
          >
            Add to Cart
          </button>
        </div>
      </div>
   
  `;
  productsData.innerHTML += cardHTML;
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

// add to cart
const AddToCart = document.querySelectorAll(".add_to_cart");

AddToCart.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-id");
    const title = button.getAttribute("data-title");
    const image = button.getAttribute("data-image");
    const price = button.getAttribute("data-price");

    const cartItem = { id, title, image, price };
    console.log(cartItem);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
  });
});
