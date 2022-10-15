const flipCard = document.querySelector(".flip-card");

const countToDate = new Date().setHours(new Date().getHours() + 24);
let prevTime;
setInterval(() => {
  const currentDate = new Date();
  const currentTime = Math.ceil((countToDate - currentDate) / 1000);
  if (prevTime !== currentTime) {
    prevTime = currentTime;
    flipAllCards(currentTime);
  }
}, 250);

function flipAllCards(time) {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600);

  const hourSegment = document.querySelector("[data-time='Hours']");
  const minutesSegment = document.querySelector("[data-time='Minutes']");
  const secondsSegment = document.querySelector("[data-time='Seconds']");

  const [hourTens, hourOnes] = [...hourSegment.children];
  const [minutesTens, minuteOnes] = [...minutesSegment.children];
  const [secondsTens, secondsOnes] = [...secondsSegment.children];
  flip(hourTens, Math.floor(hours / 10));
  flip(hourOnes, hours % 10);
  flip(minutesTens, Math.floor(minutes / 10));
  flip(minuteOnes, minutes % 10);
  flip(secondsTens, Math.floor(seconds / 10));
  flip(secondsOnes, seconds % 10);
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top");
  const startNumber = parseInt(topHalf.textContent);
  if (newNumber === startNumber) return;

  const bottomHalf = flipCard.querySelector(".bottom");

  const topFlip = document.createElement("div");
  const bottomFlip = document.createElement("div");

  topFlip.classList.add("top-flip");
  bottomFlip.classList.add("bottom-flip");

  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNumber;

  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = newNumber;
  });
  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });

  bottomFlip.addEventListener("animationstart", (e) => {
    bottomHalf.textContent = newNumber;
  });
  bottomFlip.addEventListener("animationend", (e) => {
    bottomFlip.remove();
    // flip(flipCard);
  });

  flipCard.append(topFlip, bottomFlip);
}
