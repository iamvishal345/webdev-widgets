const WIDGET_LIST = [
  {
    name: "card-deck",
    label: "Playing Cards Deck",
    description: "Playing Cards deck created using css grid and svg.",
    difficulty: "medium",
    tags: ["HTML/CSS", "Javascript"],
    date: "15th October 2022",
    author: "Vishal Sharma",
  },
  {
    name: "countdown",
    label: "Countdown Widget",
    description:
      "Flip animation countdown for Hours, Minutes and Seconds using CSS and JS.",
    difficulty: "medium",
    tags: ["HTML/CSS", "Javascript"],
    date: "15th October 2022",
    author: "Vishal Sharma",
  },
  {
    name: "custom-checkbox",
    label: "Custom Checkbox",
    description: "Custom Toggle Switch checkbox with sliding animation.",
    difficulty: "easy",
    tags: ["HTML/CSS", "Javascript"],
    date: "3rd November 2022",
    author: "Vishal Sharma",
  },
  {
    name: "multistep-form",
    label: "Multi Step Form",
    description: "Multi Step form with sliding animations and validations",
    difficulty: "easy",
    tags: ["HTML", "CSS Animations", "Javascript"],
    date: "3rd November 2022",
    author: "Vishal Sharma",
  },
];

const cardsContainer = document.querySelector("[data-cards]");

const BASE_URL = window.location.pathname;

const init = () => {
  const cards = [];

  WIDGET_LIST.forEach((widget) => {
    const card = document.createElement("div");
    card.classList.add("widget-card");
    const cardHtml = `
      <h3 class="card-label">${widget.label}</h3>
      <p class="card-description">${widget.description}</p>
      <a class="view-link" href="${BASE_URL}${widget.name}">View</a>
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

  cardsContainer.innerHTML = null;
  cardsContainer.append(...cards);
};

init();
