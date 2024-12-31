const urlParams = new URLSearchParams(window.location.search);
const articleId = Number(urlParams.get("id"));

let articles = [];
fetch("../datasets/article.json")
  .then((response) => response.json())
  .then((data) => {
    articles = data;
    displayArticles(articles);
    displayArticlesTitle(articles);
  })
  .catch((error) => console.error("Error:", error));

function displayArticlesTitle(articles) {
  const articleIdAsNumber = Number(articleId);
  const article = articles.find(
    (a) => a.id === articleId || a.id === articleIdAsNumber
  );
  const articleDetailTitle = document.querySelectorAll(
    ".article-details-title"
  );

  articleDetailTitle.forEach((el) => {
    el.innerText = article ? ` ${article.title} ` : "Title";
  });
}

function displayArticles(articles) {
  const articleIdAsNumber = Number(articleId);
  const article = articles.find(
    (a) => a.id === articleId || a.id === articleIdAsNumber
  );
  const articleDetail = document.querySelector(".article-detail");

  if (article) {
    // URL encode the article title and link
    const encodedTitle = encodeURIComponent(article.title);
    const encodedURL = encodeURIComponent(window.location.href); // This can be replaced with the article's specific URL if needed

    articleDetail.innerHTML = `
      <div class="detail-image">
        <img src="${article.image}" alt="Article Image" />
      </div>
      <div class="detail-article-box">
        <div class="detail-article-info">
          <div class="date">
            <i class="fa-solid fa-calendar"></i>
            <span>${article.date}</span>
          </div>
          <div class="comments">
            <a class="clickable-comments comment">
              <i class="fa-solid fa-comment"></i>
              <span>${article.comments}</span>
            </a>
          </div>
          <div class="author">
            <i class="fa-solid fa-user"></i>
            <span>${article.author}</span>
          </div>
          <div class="views">
            <i class="fa-solid fa-eye"></i>
            <span>${article.views}</span>
          </div>
        </div>
        <div class="detail-article-title">
          <h3>${article.title}</h3>
        </div>
        <div class="detail-article-full-description">
          <p>${article.fullContent}</p>
        </div>
        <div class="detail-article-tags">
          <i class="fa-solid fa-tag"></i>
          <span>${article.tags}</span>
        </div>
        <div class="share-article">
          <p>
            Share this on:
            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodedURL}&quote=${encodedTitle}" target="_blank">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedURL}" target="_blank">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodedURL}&title=${encodedTitle}" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://pinterest.com/pin/create/button/?url=${encodedURL}&description=${encodedTitle}" target="_blank">
              <i class="fa-brands fa-pinterest"></i>
            </a>
            <a href="https://www.tiktok.com/share?url=${encodedURL}" target="_blank">
              <i class="fa-brands fa-tiktok"></i>
            </a>
          </p>
        </div>
      </div>
      <div class="article-detail-comment-box">
        <h3>LEAVE A COMMENT</h3>
        <form class="comment-form">
          <div class="comment-form-box">
            <div class="input-box">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <textarea name="message" rows="10" placeholder="Your Message" required></textarea>
          </div>
          <div class="comment-submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    `;
  } else {
    articleDetail.innerHTML = "<p>Article not found.</p>";
  }
}
