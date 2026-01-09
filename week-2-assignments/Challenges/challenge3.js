let articleTitle = "Elzero",
  articleContent = "Elzero Web Scool",
  articleDate = "25 / 10";

let markUp = `
  <div class="parent">
    <div class="card">
    <h3>Hello ${articleTitle}</h3>
    <p>${articleContent}</p>
    <span>${articleDate}</span>
  </div>
  <div class="card">
    <h3>Hello ${articleTitle}</h3>
    <p>${articleContent}</p>
    <span>${articleDate}</span>
  </div>
  <div class="card">
    <h3>Hello ${articleTitle}</h3>
    <p>${articleContent}</p>
    <span>${articleDate}</span>
  </div>
  <div class="card">
    <h3>Hello ${articleTitle}</h3>
    <p>${articleContent}</p>
    <span>${articleDate}</span>
  </div>
  </div>
`;

document.write(markUp);
