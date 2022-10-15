const WIDGET_LIST = [
  {
    name: "card-deck",
    label: "Playing Cards Deck",
    description: "Playing Cards deck created using css grid",
    difficulty: "medium",
    tags: ["HTML/CSS", "Javascript"],
    date: "15th October 2022",
    author: "Vishal Sharma",
  },
];

const cardsContainer = document.querySelector("[data-cards]");

const init = () => {
  const cards = [];

  WIDGET_LIST.forEach((widget) => {
    const card = document.createElement("div");
    card.classList.add("widget-card");
    const cardHtml = `
      <h3 class="card-label">${widget.label}</h3>
      <p class="card-description">${widget.description}</p>
      <a class="view-link" href="/${widget.name}">View</a>
      <div class="tags-container">
        <p class="tag" data-type="${widget.difficulty}">
        ${widget.difficulty}
        </p>
        ${widget.tags.map((tag) => `<p class="tag">${tag}</p>`).join("")}
      </div>
      <div class="meta-data">
        <p>${widget.date}</p>
        <p>${widget.author}</p>
      </div>
    `;
    card.innerHTML = cardHtml;
    cards.push(card);
  });
  setTimeout(() => {
    cardsContainer.innerHTML = null;
    cardsContainer.append(...cards);
  }, 1000);
};

init();
