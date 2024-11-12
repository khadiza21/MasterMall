// Parse the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');

// Find the article by ID
const articles = [
  {
    id: 'article1',
    title: 'Influential Women in the Fashion Industry',
    date: 'Nov 18, 2018',
    fullContent: 'Full content for article 1 goes here...'
  },
  {
    id: 'article2',
    title: 'Influential Women in the Fashion Industry',
    date: 'Nov 18, 2018',
    fullContent: 'Full content for article 2 goes here...'
  },
  {
    id: 'article3',
    title: 'Influential Women in the Fashion Industry',
    date: 'Nov 18, 2018',
    fullContent: 'Full content for article 3 goes here...'
  }
];

const article = articles.find(a => a.id === articleId);

if (article) {
  document.querySelector('.article-detail').innerHTML = `
    <h2>${article.title}</h2>
    <p>${article.fullContent}</p>
    <span><i class="fa-solid fa-calendar"></i> ${article.date}</span>
  `;
} else {
  document.querySelector('.article-detail').innerHTML = '<p>Article not found.</p>';
}
