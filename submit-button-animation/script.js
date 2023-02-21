const btn = document.querySelector("[data-btn]");
const checkmarkContainer = document.querySelector("[data-checkmark-container]");

btn.addEventListener("click", () => {
  btn.classList.toggle("animating");
  checkmarkContainer.classList.toggle("checkmark-container");
});
