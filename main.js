var savedIdeas = [];


var newTitle = document.querySelector(".title-input");
var newBody = document.querySelector(".body-input");
var newSave = document.querySelector(".save-button");
var ideaTitle = document.querySelector(".idea-title");
var ideaBody = document.querySelector(".idea-body");
var ideaBoxSection = document.querySelector(".idea-box-section");

newSave.addEventListener('click', newIdea);

function newIdea() {
  event.preventDefault();
  if (!newTitle.value) {
    
  }
  var newIdea = new Idea(newTitle.value, newBody.value);
   savedIdeas.push(newIdea);
   ideaBoxSection.innerHTML +=


`<section class="idea-box">
  <div class="box-header">
    <img class="box-images hidden" src="./assets/star-active.svg" alt=""/>
    <img class="box-images" src="./assets/star.svg" alt=""/>
    <img class="box-images" src="./assets/delete.svg" alt=""/>
    <img class="box-images hidden" src="./assets/delete-active.svg" alt=""/>
  </div>
  <div class="box-body">
    <h1 class= 'idea-title'>${newIdea.title}</h1>
    <p class= 'idea-body'>${newIdea.body}</p>
  </div>
  <div class="box-footer">
    <img class="box-images" src="./assets/comment.svg" alt=""/>
<h4 class="comment">Comment</h4>
  </div>
</section>`

};
