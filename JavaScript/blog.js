// recent and popular article blog
let popularArticle = [];
let latestArticles = [];
fetch("../datasets/article.json")
  .then((response) => response.json())
  .then((data) => {
    popularArticle = data
      .map((article) => ({ ...article, views: Number(article.views) }))
      .sort((a, b) => b.views - a.views);
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

    displayRecentArticles(latestArticles);
    displayPopularArticles(popularArticle);
    displayArticles(latestArticles);
  })
  .catch((error) => console.error("Error:", error));

function displayRecentArticles(articles) {
  const containers = document.querySelectorAll(".recent-article-card");
  displaySideArticles(articles, containers);
}
function displayPopularArticles(articles) {
  const containers = document.querySelectorAll(".popular-article-card");
  displaySideArticles(articles, containers);
}

function displaySideArticles(sideArticles, containers) {
  containers.forEach((container) => {
    sideArticles.slice(0, 3).forEach((article) => {
      const articleDiv = document.createElement("div");
      articleDiv.classList.add("recent-article");
      articleDiv.dataset.id = article.id;

      articleDiv.innerHTML = `
      <div class="recent-article-img">
        <img class="clickable-img" src="${article.smallImage}" alt="" />
      </div>
      <div class="recent-article-content">
        <div class="recent-article-title">
          <h4 class="clickable-title">${article.title}</h4>
        </div>
        <div class="recent-article-description">
          <p>${article.shortDescription} <span class="clickable-more">more</span></p>
        </div>
        <div class="article-date">
          <div><i class="fa-solid fa-calendar"></i><span>${article.date}</span></div>
          <div><i class="fa-solid fa-eye"></i><span>${article.views}</span></div>
        </div>
      </div>
    `;

      function addRedirectOnClick(
        parentElement,
        elementSelector,
        articleId,
        redirectUrl
      ) {
        const element = parentElement.querySelector(elementSelector);
        if (element) {
          element.addEventListener("click", () => {
            window.location.href = `${redirectUrl}?id=${articleId}`;
          });
        }
      }

      const redirectUrl = "article-details.html";

      addRedirectOnClick(articleDiv, ".clickable-img", article.id, redirectUrl);
      addRedirectOnClick(
        articleDiv,
        ".clickable-title",
        article.id,
        redirectUrl
      );
      addRedirectOnClick(
        articleDiv,
        ".clickable-more",
        article.id,
        redirectUrl
      );

      container.appendChild(articleDiv);
    });
  });
}

// icon social
const socialMediaLinks = [
  { href: "https://master-mall-bk.netlify.app/", iconClass: "fa-facebook" },
  { href: "https://master-mall-bk.netlify.app/", iconClass: "fa-twitter" },
  { href: "https://master-mall-bk.netlify.app/", iconClass: "fa-youtube" },
  { href: "https://master-mall-bk.netlify.app/", iconClass: "fa-instagram" },
  { href: "https://master-mall-bk.netlify.app/", iconClass: "fa-tiktok" },
];
const socialIconsContainer = document.querySelector(".social-icons");
let iconsHTML = "";
socialMediaLinks.forEach((link) => {
  iconsHTML += `
    <div class="social-icon">
      <a href="${link.href}">
        <i class="fa-brands ${link.iconClass}"></i>
      </a>
    </div>
  `;
});
socialIconsContainer.innerHTML = iconsHTML;

// products container
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
// products
let products = [];
fetch("../datasets/products.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data, "products ");
    products = data;
    console.log(products, "product");
    displayProducts(products);
  })
  .catch((error) => console.error("Error:", error));

function displayProducts(products) {
  const swiperWrapper = document.querySelector(".swiper-wrapper");

  // Create the HTML string for the product cards
  let cardsHTML = "";

  // Loop through each product and create the HTML for each card
  products.slice(0, 6).forEach((product) => {
    cardsHTML += `
    <div class="swiper-slide best-product-card">
      <div class="best-product-image">
        <img src="${product.image}" alt="best product image" />
      </div>
      <div class="best-product-content">
        <div class="best-product-title">
          <h3>${product.title}</h3>
        </div>
        <div class="best-product-price">
          <p>$ ${product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  `;
  });

  // Set the innerHTML of the swiper-wrapper container
  swiperWrapper.innerHTML = cardsHTML;
}

// articles container with pagination
function displayArticles(articles) {
  const articleContainer = document.querySelector(".article-container");
  const articlesPerPage = 6;
  let currentPage = 1;

  function renderArticles() {
    const start = (currentPage - 1) * articlesPerPage;
    const end = start + articlesPerPage;
    articleContainer.innerHTML = "";
    const articlesToDisplay = articles.slice(start, end);

    articlesToDisplay.forEach((article) => {
      const articleElement = document.createElement("div");
      articleElement.classList.add("article");
      articleElement.dataset.id = article.id;
      articleElement.innerHTML = `
        <div class="article-image">
          <img class="clickable-img" src="${article.image}" alt="" />
        </div>
        <div class="article-content">
          <div class="article-info">
            <div class="date">
              <i class="fa-solid fa-calendar"></i><span>${article.date}</span>
            </div>
            <div class="comments">
              <a class="clickable-comments comment" ><i class="fa-solid fa-comment"></i><span>${article.comments}</span></a>
            </div>
            <div class="author">
              <i class="fa-solid fa-user"></i><span>${article.author}</span>
            </div>
          </div>
          <div class="article-title clickable-title">${article.title}</div>
          <div class="article-description">${article.description}</div>
          <div class="article-tag">
            <i class="fa-solid fa-tag"></i>
            <h4>${article.tags}</h4>
          </div>
          <div class="article-details">
            <a class="clickable-more" >Read more</a>
          </div>
        </div>
      `;

      function addRedirectOnClick(
        parentElement,
        elementSelector,
        articleId,
        redirectUrl
      ) {
        const element = parentElement.querySelector(elementSelector);
        if (element) {
          element.addEventListener("click", () => {
            window.location.href = `${redirectUrl}?id=${articleId}`;
          });
        }
      }

      const redirectUrl = "article-details.html";

      addRedirectOnClick(
        articleElement,
        ".clickable-img",
        article.id,
        redirectUrl
      );
      addRedirectOnClick(
        articleElement,
        ".clickable-comments",
        article.id,
        redirectUrl
      );
      addRedirectOnClick(
        articleElement,
        ".clickable-title",
        article.id,
        redirectUrl
      );
      addRedirectOnClick(
        articleElement,
        ".clickable-more",
        article.id,
        redirectUrl
      );

      articleContainer.appendChild(articleElement);
    });
  }

  function updatePagination() {
    const paginationContainer = document.querySelector(".pagination");
    paginationContainer.innerHTML = "";

    const prevButton = document.createElement("button");
    prevButton.innerHTML = "&laquo;";
    prevButton.onclick = () => {
      if (currentPage > 1) {
        currentPage--;
        renderArticles();
        updatePagination();
      }
    };
    paginationContainer.appendChild(prevButton);

    const totalPages = Math.ceil(articles.length / articlesPerPage);

    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("div");
      pageButton.classList.add("page-number");
      if (i === currentPage) pageButton.classList.add("active");
      pageButton.textContent = i;
      pageButton.onclick = () => {
        currentPage = i;
        renderArticles();
        updatePagination();
      };
      paginationContainer.appendChild(pageButton);
    }
    const nextButton = document.createElement("button");
    nextButton.innerHTML = "&raquo;";
    nextButton.onclick = () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderArticles();
        updatePagination();
      }
    };
    paginationContainer.appendChild(nextButton);
  }

  renderArticles();
  updatePagination();
}
