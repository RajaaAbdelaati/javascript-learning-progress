let articleTitle = "Elzero",
  articleContent = "Elzero Web Scool",
  articleDate = "25 / 10";

let markUp = `
  <div class="card">
    <h3>Hello ${articleTitle}</h3>
    <p>${articleContent}</p>
    <span>${articleDate}</span>
  </div>
`;

document.write(markUp.repeat(4));
