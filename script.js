const shareButton = document.querySelector(".share-button");
const shareOption = document.querySelector(".share-option");

shareButton.addEventListener("click", function() {
    shareOption.classList.toggle("hide");
})