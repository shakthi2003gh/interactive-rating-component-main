const button = document.querySelector(".button");

// raiting block
button.addEventListener("click", () => {
  const ratingBlock = document.querySelector(".rating-block");
  const ratedBlock = document.querySelector(".rated-block");

  if (document.querySelector(".card__rated span").innerText == 0) {
    alert("Before submiting please give rating!");
    return;
  }

  if (ratingBlock.classList.contains("active")) {
    ratingBlock.classList.remove("active");
    ratedBlock.classList.add("active");
  }
});

// rating
function setRating(rating) {
  const buttonList = document.querySelectorAll(".card__rating-button button");
  const userRating = rating;

  buttonList.forEach((element) => {
    if (element.value == userRating) element.classList.add("selected");
    else element.classList.remove("selected");
  });

  document.querySelector(".card__rated span").innerText = userRating;
}
