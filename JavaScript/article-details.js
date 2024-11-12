const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams, 'url')
const articleId = Number(urlParams.get('id'));

console.log(articleId, 'id')

let articles = [];
fetch('../datasets/article.json')
  .then(response => response.json())
  .then(data => {
    articles = data;
    console.log(articles, 'article')
    displayArticles(articles)

  })
  .catch(error => console.error('Error:', error));


  function displayArticles(articles) {
    console.log(articles);

    const articleIdAsNumber = Number(articleId);
  
    // Find the article using the correct data type
    const article = articles.find(a => a.id === articleId || a.id === articleIdAsNumber);
    console.log(article, 'i');
  
    if (article) {
      document.querySelector('.article-detail').innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.fullContent}</p>
            <span><i class="fa-solid fa-calendar"></i> ${article.date}</span>
          `;
    } else {
      document.querySelector('.article-detail').innerHTML = '<p>Article not found.</p>';
    }
  }
  
