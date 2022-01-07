var savedIdeas = [];


var newTitle = document.querySelector(".title-input");
var newBody = document.querySelector(".body-input");
var newSave = document.querySelector(".save-button");
var ideaTitle = document.querySelector(".idea-title");
var ideaBody = document.querySelector(".idea-body");
var ideaBoxSection = document.querySelector(".idea-box-section");
var titleError = document.querySelector(".error-title");
var bodyError = document.querySelector(".error-body");

var deleteButton = document.querySelector(".delete-button")


newSave.addEventListener('click', newIdea);
newSave.addEventListener('hover', error);

newTitle.addEventListener('input', error);
newBody.addEventListener('input', error);


ideaBoxSection.addEventListener('click', deleteIdea)


// ideaBox.addEventListener('click', function(event) {
//   if (event.target.className === '.delete-button') {
//     deleteIdea();
//   }
//   console.log('rsdthsfgh')
// });


function deleteIdea(e) {
  var ideaBox = document.querySelector(".idea-box")
  for (var i in savedIdeas) {
    if (savedIdeas[i].id.toString() === e.target.id) {
      savedIdeas.splice(i, 1)
    }
    displayIdeas()
    console.log(savedIdeas)
  }

}

function error(){
  if (newBody.value && newTitle.value){
    newSave.classList.remove("not-allowed")
  }
}

function displayIdeas() {
  var emptyHTML = "";
for (var i = 0; i < savedIdeas.length; i++) {
 emptyHTML +=
  `<section class="idea-box">
    <div class="box-header">
      <img class="box-images hidden" src="./assets/star-active.svg" alt=""/>
      <img class="box-images" src="./assets/star.svg" alt=""/>
      <img class="delete-button" id="${savedIdeas[i].id}" src="./assets/delete.svg" alt=""/>
      <img class="box-images hidden" src="./assets/delete-active.svg" alt=""/>
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

  if (newBody.value && newTitle.value){

    var newIdea = new Idea(newTitle.value, newBody.value);
    savedIdeas.push(newIdea);
    displayIdeas()
    titleError.classList.add("hidden");
    bodyError.classList.add("hidden");

    newTitle.value = "";
    newBody.value = "";
  }
}
