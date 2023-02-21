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
    description: "Multi Step form with sliding animations and validations.",
    difficulty: "easy",
    tags: ["HTML", "CSS Animations", "Javascript"],
    date: "3rd November 2022",
    author: "Vishal Sharma",
  },
  {
    name: "review-widget",
    label: "Review and Rating Widget",
    description:
      "A Rating Widget with average rating and progress bar of all the ratings.",
    difficulty: "medium",
    tags: ["HTML", "CSS Animations", "Javascript"],
    date: "2nd January 2023",
    author: "Vishal Sharma",
  },
  {
    name: "toastify",
    label: "Toast Library",
    description:
      "A simple Implementation of toast library using JavaScript classes.",
    difficulty: "medium",
    tags: ["HTML", "Javascript", "ES6"],
    date: "22 February 2023",
    author: "Vishal Sharma",
  },
  {
    name: "shipment-timeline",
    label: "Shipment Timeline Card",
    description:
      "A card to show goods shipment timeline using vertical status design.",
    difficulty: "easy",
    tags: ["HTML", "CSS"],
    date: "22 February 2023",
    author: "Vishal Sharma",
  },
  {
    name: "vertical-timeline",
    label: "Responsive full page vertical timeline",
    description: "A Responsive social media reactions timeline of your posts.",
    difficulty: "medium",
    tags: ["HTML", "CSS"],
    date: "22 February 2023",
    author: "Vishal Sharma",
  },
  {
    name: "split-text-effect",
    label: "Split text effect on hover",
    description:
      "Split text animation effect on hover using css animations without javascript.",
    difficulty: "medium",
    tags: ["HTML", "CSS Animations"],
    date: "22 February 2023",
    author: "Vishal Sharma",
  },
  {
    name: "submit-button-animation",
    label: "Button Animation Effect",
    description:
      "Progress and Submit check mark animation using css and javascript.",
    difficulty: "medium",
    tags: ["HTML", "CSS Animations"],
    date: "22 February 2023",
    author: "Vishal Sharma",
  },
  {
    name: "youtube-sidebar",
    label: "Youtube Sidebar",
    description: "Youtube Sidebar clone with expand and collapse animation.",
    difficulty: "medium",
    tags: ["HTML", "CSS Animations"],
    date: "22 February 2023",
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
