var savedIdeas = [];
var starredIdeas = [];
var newTitle = document.querySelector(".title-input");
var newBody = document.querySelector(".body-input");
var newSave = document.querySelector(".save-button");
var ideaTitle = document.querySelector(".idea-title");
var ideaBody = document.querySelector(".idea-body");
var ideaBoxSection = document.querySelector(".idea-box-section");
var titleError = document.querySelector(".error-title");
var bodyError = document.querySelector(".error-body");
var deleteButton = document.querySelector(".delete-button")
var starOrange = document.querySelector(".star-orange")
var starWhite = document.querySelector(".star-white")
var boxHeader = document.querySelector(".box-header")

newSave.addEventListener('click', newIdea);
newSave.addEventListener('hover', error);
newTitle.addEventListener('input', error);
newBody.addEventListener('input', error);
ideaBoxSection.addEventListener('click', deleteIdea);
ideaBoxSection.addEventListener('click', star);

function star(e) {
  var ideaBox = document.querySelector(".idea-box")
  var starWhite = document.querySelector(".star-white")
  var starOrange = document.querySelector(".star-orange")

      if (e.target.className === "star-white" || "star-orange") {
        for (var i in savedIdeas) {
          if (savedIdeas[i].id.toString() === e.target.id) {
            savedIdeas[i].star = !savedIdeas[i].star;
            displayIdeas()
      }
    }
  }
}

function deleteIdea(e) {
  if (e.target.className === "delete-button") {
  for (var i in savedIdeas) {
    if (savedIdeas[i].id.toString() === e.target.id) {
      savedIdeas.splice(i, 1)
    }
    displayIdeas()
    }
  }
}

function error() {
  if (newBody.value && newTitle.value) {
    newSave.classList.remove("not-allowed")
  }
}

function displayIdeas() {
  var emptyHTML = "";
for (var i = 0; i < savedIdeas.length; i++) {
  if (savedIdeas[i].star) {
    emptyHTML +=
        `<section class="idea-box">
          <div class="box-header">
           <img class="star-orange" id="${savedIdeas[i].id}" src="./assets/star-active.svg" alt=""/>
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

  } else {
      emptyHTML +=
    `<section class="idea-box">
      <div class="box-header">
       <img class="star-white" id="${savedIdeas[i].id}" src="./assets/star.svg" alt=""/>
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
   }
    ideaBoxSection.insertAdjacentHTML("afterbegin", emptyHTML);
    ideaBoxSection.innerHTML = emptyHTML;
}

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
    displayIdeas()
    titleError.classList.add("hidden");
    bodyError.classList.add("hidden");
    newTitle.value = "";
    newBody.value = "";
  }
}
