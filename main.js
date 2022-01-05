var savedIdea = [];




var newTitle = document.querySelector(.title-input);
var newBody= document.querySelector(.body-input);
var newSave= document.querySelector(.save-button);






function newIdea() {
  postTitle.innerText = makeTitle.value
  postBody.innerText = makeBody.value
  savedIdea = new Idea(postTitle.innerText, postBody.innerText);

};
