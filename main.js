const accesskey = "iTZQrn-EwJUG9t3H0DyjRXQi5P5rOk43YY_nSvsdooo";

const formEl = document.querySelector("form");

const searchInputEl = document.getElementById("search-input");

const searchResultsEl = document.querySelector(". search-results");

const showMoreButtonEl = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

function searchImages(){
 inputData = searchInputEl.value;
 const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;
}

formEl.addEventListener("submit",(event)=>{
 event.preventDefault();
 
 searchImages();
});


 


