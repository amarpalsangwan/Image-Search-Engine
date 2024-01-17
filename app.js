let searchForm = document.getElementById("search-form");
let searchBox = document.getElementById("search-box");
let searchResult = document.getElementById("search-result");
let showMoreBtn = document.getElementById("show-more-btn");

let accessKey = "eoNve9vzjEwoiJAJRyv7RwitjU5YliS9LD9Td4M1qSQ";
let keyword = "";
let page = 1;
async function searchImage() {
  keyword = searchBox.value;
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=30`;

  let response = await fetch(url);
  let data = await response.json();

  if(page == 1){
    searchResult.innerHTML = "";
  }

  let h1 = document.querySelector("h1");
  h1.style.color = "#fff";

  let results = data.results;
  results.map((result) => {
    let image = document.createElement("img");
    image.src = result.urls.small;
    let imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
//   showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});
