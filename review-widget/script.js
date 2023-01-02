const reviewBarsContainer = document.querySelector(".review-rows");
const averageReviewElm = document.querySelector("[data-average-review]");

const REVIEWS = {
  5: 994,
  4: 107,
  3: 32,
  2: 15,
  1: 5,
};

const totalReviews = Object.values(REVIEWS).reduce(
  (sum, value) => sum + value,
  0
);

const starIcon = (number) => `
<span>${number}</span>
<svg
    class="star-icon"
    viewBox="0 0 43 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="icon-path"
      d="M21.1363 1.42392C21.2826 1.11848 21.7174 1.11848 21.8637 1.42392L27.2274 12.6267C27.4958 13.1871 28.0288 13.5743 28.6447 13.6564L40.9566 15.2958C41.2923 15.3405 41.4267 15.754 41.1814 15.9875L32.1845 24.5506C31.7344 24.979 31.5308 25.6056 31.6431 26.2167L33.8885 38.4326C33.9497 38.7657 33.5979 39.0213 33.3001 38.8602L22.3759 32.9497C21.8294 32.654 21.1706 32.654 20.6241 32.9497L9.6999 38.8602C9.40205 39.0213 9.05025 38.7657 9.11147 38.4326L11.3569 26.2167C11.4692 25.6056 11.2656 24.979 10.8155 24.5506L1.81861 15.9875C1.57331 15.754 1.70768 15.3405 2.04336 15.2958L14.3553 13.6564C14.9712 13.5743 15.5042 13.1871 15.7726 12.6267L21.1363 1.42392Z"
      stroke-width="1.4375"
    />
  </svg>`;

const averageReview =
  Object.entries(REVIEWS).reduce((sum, [value, quantity]) => {
    return sum + value * quantity;
  }, 0) / totalReviews;

let startReview = 0;
let previousTimeStamp = 0;

const animateAverageReview = (timestamp) => {
  const elapsed = timestamp - previousTimeStamp;
  if (elapsed < 50) {
    requestAnimationFrame(animateAverageReview);
    return;
  }
  previousTimeStamp = timestamp;
  if (startReview >= averageReview) return;
  if (averageReview - startReview < 1) {
    startReview = averageReview;
  } else {
    startReview += 0.2;
  }
  averageReviewElm.textContent = startReview.toFixed(1);
  requestAnimationFrame(animateAverageReview);
};

requestAnimationFrame(animateAverageReview);

Object.entries(REVIEWS).forEach(([value, quantity]) => {
  const reviewRow = document.createElement("div");
  reviewRow.classList.add("review-row");

  //review Number
  const reviewNumber = document.createElement("div");
  reviewNumber.innerHTML = starIcon(value);
  reviewNumber.classList.add("review-number");

  //review Bar
  const reviewBar = document.createElement("div");
  reviewBar.classList.add("review-bar");
  reviewBar.classList.toggle("empty", quantity === 0);
  reviewBar.style.setProperty("--width", `${(quantity / totalReviews) * 100}%`);

  //review count

  const reviewCount = document.createElement("div");
  reviewCount.classList.add("review-count");
  reviewCount.innerText = quantity;

  reviewRow.append(reviewNumber, reviewBar, reviewCount);
  reviewBarsContainer.prepend(reviewRow);
});
