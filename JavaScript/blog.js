// blog page
const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", () => {
  Nav.classList.toggle("mobile_nav_hide");
});

// swiper 
var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // article container 
  // Define the articles data
const articles = [
  {
    image: '../image/blog/blog-1_1200x.webp',
    date: 'Nov 18, 2018',
    comments: '0 Comment',
    author: 'Black Men',
    title: 'Influential Women in the Fashion Industry',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, iure! Neque tempore accusamus nobis doloremque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, ducimus!',
    tags: 'Cloth, Mens',
    link: '#'
  },
  {
    image: '../image/blog/blog-2_1200x.webp',
    date: 'Nov 18, 2018',
    comments: '0 Comment',
    author: 'Black Men',
    title: 'Influential Women in the Fashion Industry',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, iure! Neque tempore accusamus nobis doloremque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, ducimus!',
    tags: 'Cloth, Mens',
    link: '#'
  },
  {
    image: '../image/blog/blog-3_1200x.webp',
    date: 'Nov 18, 2018',
    comments: '0 Comment',
    author: 'Black Men',
    title: 'Influential Women in the Fashion Industry',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, iure! Neque tempore accusamus nobis doloremque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, ducimus!',
    tags: 'Cloth, Mens',
    link: '#'
  },
  {
    image: '../image/blog/blog-4_1200x.webp',
    date: 'Nov 18, 2018',
    comments: '0 Comment',
    author: 'Black Men',
    title: 'Influential Women in the Fashion Industry',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, iure! Neque tempore accusamus nobis doloremque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, ducimus!',
    tags: 'Cloth, Mens',
    link: '#'
  },
  {
    image: '../image/blog/blog-5_1200x.webp',
    date: 'Nov 18, 2018',
    comments: '0 Comment',
    author: 'Black Men',
    title: 'Influential Women in the Fashion Industry',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, iure! Neque tempore accusamus nobis doloremque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, ducimus!',
    tags: 'Cloth, Mens',
    link: '#'
  },
  {
    image: '../image/blog/blog-6_1200x.webp',
    date: 'Nov 18, 2018',
    comments: '0 Comment',
    author: 'Black Men',
    title: 'Influential Women in the Fashion Industry',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, iure! Neque tempore accusamus nobis doloremque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, ducimus!',
    tags: 'Cloth, Mens',
    link: '#'
  },

];

// Select the container element
const articleContainer = document.querySelector('.article-container');

// Function to create and append articles
articles.forEach(article => {
  const articleElement = document.createElement('div');
  articleElement.classList.add('article');
  articleElement.innerHTML = `
    <div class="article-image">
      <img src="${article.image}" alt="" class="" />
    </div>
    <div class="article-content">
      <div class="article-info">
        <div class="date">
          <i class="fa-solid fa-calendar"></i><span>${article.date}</span>
        </div>
        <div class="comment">
          <a href="#"><i class="fa-solid fa-comment"></i><span>${article.comments}</span></a>
        </div>
        <div class="author">
          <i class="fa-solid fa-user"></i><span>${article.author}</span>
        </div>
      </div>
      <div class="article-title">${article.title}</div>
      <div class="article-description">${article.description}</div>
      <div class="article-tag">
        <i class="fa-solid fa-tag"></i>
        <h4>${article.tags}</h4>
      </div>
      <div class="article-details">
        <a href="${article.link}">Read more</a>
      </div>
    </div>
  `;
  articleContainer.appendChild(articleElement);
});
