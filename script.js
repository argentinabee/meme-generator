
const form = document.querySelector("#meme-form");
const topTextInput = document.querySelector("#top-text");
const bottomTextInput = document.querySelector("#bottom-text");
const imageUrlInput = document.querySelector("#image-url");
const memeContainer = document.querySelector("#meme-container");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const memeDiv = document.createElement("div");
  memeDiv.classList.add("meme");

  const memeImage = document.createElement("img");
  memeImage.src = imageUrlInput.value;

  const topText = document.createElement("div");
  topText.classList.add("meme-text", "top");
  topText.innerText = topTextInput.value;

  const bottomText = document.createElement("div");
  bottomText.classList.add("meme-text", "bottom");
  bottomText.innerText = bottomTextInput.value;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.innerText = "Delete Meme";

  deleteButton.addEventListener("click", function () {
    memeDiv.remove();
  });

  memeDiv.append(memeImage, topText, bottomText, deleteButton);
  memeContainer.append(memeDiv);

  form.reset();
});
