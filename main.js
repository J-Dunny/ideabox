var savedIdeas = [];

var newTitle = document.querySelector(".title-input");
var newBody = document.querySelector(".body-input");
var newSave = document.querySelector(".save-button");
var ideaTitle = document.querySelector(".idea-title");
var ideaBody = document.querySelector(".idea-body");
var ideaBoxSection = document.querySelector(".idea-box-section");
var titleError = document.querySelector(".error-title");
var bodyError = document.querySelector(".error-body");
var deleteButton = document.querySelector(".delete-button");
var starOrange = document.querySelector(".star-orange");
var starWhite = document.querySelector(".star-white");
var boxHeader = document.querySelector(".box-header");
var filterIdeas = document.querySelector(".filter-ideas");
var nav = document.querySelector(".nav");
var searchInput = document.querySelector(".search-input");
var favoritesButtons = document.querySelector(".favorites-buttons");
var filter = document.querySelector("#filter");

searchInput.addEventListener('input', search);
newSave.addEventListener('click', newIdea);
newSave.addEventListener('hover', error);
newTitle.addEventListener('input', error);
newBody.addEventListener('input', error);
ideaBoxSection.addEventListener('click', deleteIdea);
ideaBoxSection.addEventListener('click', star);

nav.addEventListener('click', function(e) {
  if (e.target.className === "show-starred"){
    displayStars(e)
  }
  else if (e.target.className === "show-all") {
    displayIdeas()
  }
});

function search() {
  var starColor;
  ideaBoxSection.innerHTML = "";

  if (filter.className === "show-all") {
    for (var i in savedIdeas) {

      if((savedIdeas[i].star) && (savedIdeas[i].title.includes(searchInput.value) || savedIdeas[i].body.includes(searchInput.value))){
        changeInnerHtml(starColor, i)
      }
    }
  } else {
    for (var i in savedIdeas) {

      if (savedIdeas[i].star) {
        starColor = `<img class="star-orange" id="${savedIdeas[i].id}" src="./assets/star-active.svg" alt=""/>`
      } else { starColor = `<img class="star-white" id="${savedIdeas[i].id}" src="./assets/star.svg" alt=""/>`
      }

      if(savedIdeas[i].title.includes(searchInput.value) || savedIdeas[i].body.includes(searchInput.value)){
        changeInnerHtml(starColor, i)
      }
    }
  }
}

function star(e) {
  var starWhite = document.querySelector(".star-white")
  var starOrange = document.querySelector(".star-orange")

  for (var i in savedIdeas) {
    if ((e.target.className === "star-white" || "star-orange") && (savedIdeas[i].id.toString() === e.target.id)) {
      savedIdeas[i].star = !savedIdeas[i].star;
      if (filter.className === "show-all") {
        displayStars(e)
      }

      else if (filter.className === "show-starred"){
        displayIdeas()
      }
    }
  }
}

function deleteIdea(e) {
  if (e.target.className === "delete-button") {
    for (var i in savedIdeas) {
      if ((savedIdeas[i].id.toString() === e.target.id) && (e.target.className === "delete-button")) {
        savedIdeas.splice(i, 1)
      }

      if (filter.className === "show-all") {
        displayStars(e)
      }
      else if (filter.className === "show-starred"){
        displayIdeas()
      }
    }
  }
}

function error() {
  newSave.classList.add("not-allowed")
  if (newBody.value && newTitle.value) {
    newSave.classList.remove("not-allowed")
  }
};

function displayIdeas() {
  ideaBoxSection.innerHTML = "";
  var starColor;

  favoritesButtons.innerHTML =
  `<h1 id = "filter" class = "show-starred">Show Starred Ideas</h1>`

  for (var i = 0; i < savedIdeas.length; i++) {
    if (savedIdeas[i].star) {
      starColor = `<img class="star-orange" id="${savedIdeas[i].id}" src="./assets/star-active.svg" alt=""/>`
    } else { starColor = `<img class="star-white" id="${savedIdeas[i].id}" src="./assets/star.svg" alt=""/>`
    }
    changeInnerHtml(starColor, i)
  }
}

function changeInnerHtml(starColor, i){
  ideaBoxSection.innerHTML +=
  `<section class="idea-box">
  <div class="box-header">
  ${starColor}
  <img class="delete-button" id="${savedIdeas[i].id}" src="./assets/delete.svg" alt=""/>
  </div>
  <div class="box-body">
  <h1 class= 'idea-title'>${savedIdeas[i].title}</h1>
  <p class= 'idea-body'>${savedIdeas[i].body}</p>
  </div>
  <div class="box-footer">
  <img class="box-images" src="./assets/comment.svg" alt=""/>
  <h4 class="comment">Comment</h4>
  </div>
  </section>`
}

function displayStars(e) {
  ideaBoxSection.innerHTML = "";
  var starColor;
  favoritesButtons.innerHTML =
  `<h1 id = "filter" class = "show-all">Show all Ideas</h1>`

  for (var i = 0; i < savedIdeas.length; i++) {
    if (savedIdeas[i].star) {
      starColor = `<img class="star-orange" id="${savedIdeas[i].id}" src="./assets/star-active.svg" alt=""/>`
      changeInnerHtml(starColor, i)
    }
  }
};

function newIdea() {
  event.preventDefault();
  if (!newTitle.value) {
    titleError.classList.remove("hidden")
  }

  if (!newBody.value) {
    bodyError.classList.remove("hidden")
  }

  if (newBody.value && newTitle.value) {
    var newIdea = new Idea(newTitle.value, newBody.value);
    savedIdeas.push(newIdea);

    if (filter.className === "show-all") {
      displayStars(e)
    }
    else if (filter.className === "show-starred"){
      displayIdeas()
    }

    titleError.classList.add("hidden");
    bodyError.classList.add("hidden");
    newTitle.value = "";
    newBody.value = "";
  }
  error()
};
