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


// Flash Section 
// Get the swiper-wrapper element
const swiperWrapper = document.querySelector('.swiper-wrapper');

// Array of card data
const cardData = [
  {
    image: '../image/flash/blueshoe_2_600x.webp',
    title: 'Men Blue Shoe',
    price: 60,
    discount: '-40%',
    rating: 4,
    reviews: 150
  },
  {
    image: '../image/flash/gold-watch_2_600x.webp',
    title: 'Women Gold Watch',
    price: 60,
    discount: '-40%',
    rating: 4,
    reviews: 150
  },
  {
    image: '../image/flash/sunglass_2_600x.webp',
    title: 'Uni Sunglass',
    price: 60,
    discount: '-40%',
    rating: 4,
    reviews: 150
  },
  {
    image: '../image/flash/ment-shirt_2_600x.webp',
    title: 'Men Casual T-Shirt',
    price: 100,
    discount: '-30%',
    rating: 4,
    reviews: 76
  },
  {
    image: '../image/flash/shirt_2_600x.webp',
    title: 'Men Formal Shirt',
    price: 150,
    discount: '-20%',
    rating: 5,
    reviews: 120
  },
  {
    image: '../image/flash/men-coat_2_600x.webp',
    title: 'Men Coat',
    price: 90,
    discount: '-50%',
    rating: 3,
    reviews: 88
  },
  {
    image: '../image/flash/jacket_2_600x.webp',
    title: 'Men Winter Jacket',
    price: 110,
    discount: '-10%',
    rating: 4,
    reviews: 64
  },
  {
    image: '../image/flash/hat_2_600x.webp',
    title: "Men's Hat",
    price: 130,
    discount: '-15%',
    rating: 5,
    reviews: 90
  },
  {
    image: '../image/flash/jacket_9_600x.webp',
    title: 'Kids Winter Jacket',
    price: 50,
    discount: '-25%',
    rating: 4,
    reviews: 45
  },
  {
    image: '../image/flash/poloshirt_2_600x.webp',
    title: 'Men Polo Shirt',
    price: 85,
    discount: '-35%',
    rating: 3,
    reviews: 30
  }
  
];

// Function to generate stars based on rating
function generateStars(rating) {
  let starsHTML = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starsHTML += '<i class="fa-solid fa-star"></i>';
    } else {
      starsHTML += '<i class="fa-regular fa-star"></i>';
    }
  }
  return starsHTML;
}

// Generate and append cards based on the cardData array
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
    console.log(cartItem)
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart)
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
  });
});


