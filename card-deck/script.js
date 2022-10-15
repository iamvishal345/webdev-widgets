const cards = document.querySelectorAll(".card");

[...cards].forEach(addCardElement);

function addCardElement(card) {
  const value = card.dataset.value;
  const numberValue = parseInt(card.dataset.value);
  if (isNaN(numberValue)) {
    if (value === "A") {
      createPip(card, "ace");
    }
    if (value === "J") {
      createPip(card, "jack");
    }
    if (value === "Q") {
      createPip(card, "queen");
    }
    if (value === "K") {
      createPip(card, "king");
    }
  } else {
    for (i = 0; i < numberValue; i++) {
      createPip(card);
    }
  }
  card.append(createCorner("top", value), createCorner("bottom", value));
}

function createCorner(position, value) {
  const corner = document.createElement("div");
  corner.textContent = value;
  corner.classList.add("corner-number");
  corner.classList.add(position);
  return corner;
}

function createPip(card, className = "") {
  const pip = document.createElement("div");
  pip.classList.add("pip");
  className && pip.classList.add(className);
  card.append(pip);
}
