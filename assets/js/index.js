console.log("JS is here");

// Initialize the news api parameters
let source = "The Hindu";
let apiKey = "758a44ea44b14baebcc191b524ae2e4b";

// Grab the news container
let stateNews = document.getElementById("stateNews");

// Create an ajax get request
/*const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`,
  true
);

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let res = JSON.parse(this.responseText);
    console.log(res);
    let articles = res.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      // console.log(element, index);
      let news = `<div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"><b>Breaking News 
                          ${index + 1}:</b> ${element["title"]}
                          </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading  
                        ${index}" data-bs-parent="#stateNews">
                          <div class="accordion-body"><strong>Published at: 
                          ${element["publishedAt"]}</strong><br> 
                         <strong> Content:</strong> ${
                           element["content"]
                         }. <a href="
                          ${element["url"]}" target="_blank" >Read more here</a>
                          </div>
                        </div>
                      </div>`;

      newsHtml += news;
    });
    // console.log(newsHtml);
    stateNews.innerHTML = newsHtml;
  } else {
    console.log("Some error occurred");
  }
};

xhr.send();*/

// Convert ajax xml request into fetch api

// function getData() {
//   url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

//   fetch(url)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log("LN65", data);
//       let articles = data.articles;
//       console.log("LN67", articles);
//       let newsHtml = "";
//       articles.forEach(function (element, index) {
//         // console.log(element, index);
//         let news = `<div class="accordion-item">
//                         <h2 class="accordion-header" id="heading${index}">
//                           <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"><b>Breaking News
//                           ${index + 1}:</b> ${element["title"]}
//                           </button>
//                         </h2>
//                         <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading
//                         ${index}" data-bs-parent="#stateNews">
//                           <div class="accordion-body"><strong>Published at:
//                           ${element["publishedAt"]}</strong><br>
//                          <strong> Content:</strong> ${
//                            element["content"]
//                          }. <a href="
//                           ${element["url"]}" target="_blank" >Read more here</a>
//                           </div>
//                         </div>
//                       </div>`;

//         newsHtml += news;
//       });
//       // console.log(newsHtml);
//       stateNews.innerHTML = newsHtml;
//     })

//     .catch((err) => {
//       console.log("Invalid Api");
//     });
// }
// getData();

// By using async/await function

async function getData() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
  );
  const data = await res.json();
  return data;
}

getData()
  .then((data) => {
    console.log("LN114", data);
    let articles = data.articles;
    console.log("LN116", articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      // console.log(element, index);
      let news = `<div class="accordion-item">
                          <h2 class="accordion-header" id="heading${index}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"><b>Breaking News
                            ${index + 1}:</b> ${element["title"]}
                            </button>
                          </h2>
                          <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading
                          ${index}" data-bs-parent="#stateNews">
                            <div class="accordion-body"><strong>Published at:
                            ${element["publishedAt"]}</strong><br>
                           <strong> Content:</strong> ${
                             element["content"]
                           }. <a href="
                            ${
                              element["url"]
                            }" target="_blank" >Read more here</a>
                            </div>
                          </div>
                        </div>`;

      newsHtml += news;
    });
    // console.log(newsHtml);
    stateNews.innerHTML = newsHtml;
  })
  .catch((err) => {
    console.log("Invalid Api");
  });
