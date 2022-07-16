const selection = document.querySelector(".selection");
const submitBtn = document.querySelector(".submit-btn");
const thanks = document.querySelector(".thanks");
const rating = document.querySelector(".rating");
const radioBtns = document.querySelectorAll(".rating-radio");

function getRating() {
  rating.style.display = "none";
  thanks.style.display = "block";
  radioBtns.forEach((radio) => {
    if (radio.checked) {
      selection.textContent = radio.id;
    }
  });
}
