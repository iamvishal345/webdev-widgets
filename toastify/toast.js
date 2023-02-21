const DEFAULT_OPTIONS = {
  autoClose: 5000,
  position: "top-right",
  show: true,
  onClose: () => {},
  onOpen: () => {},
  canClose: true,
};

export default class Toast {
  #toast;
  #autoCloseTimer;
  constructor(options) {
    this.create(options);
  }

  /**
   * @param {string} value
   */
  set position(value) {
    const currentContainer = this.#toast.parentElement;
    this.#toast.remove();
    const container =
      document.querySelector(`[data-position="${value}"]`) ||
      createContainer(value);
    container.append(this.#toast);
    if (currentContainer === null || container.hasChildNodes()) return;
    container.remove();
  }

  /**
   * @param {string} value
   */
  set text(value) {
    this.#toast.textContent = value;
  }

  /**
   * @param {number | boolean | undefined} value
   */
  set autoClose(value) {
    if (value === false) return;
    if (this.#autoCloseTimer !== null) clearTimeout(this.#autoCloseTimer);
    this.#autoCloseTimer = setTimeout(() => {
      this.remove();
    }, value);
  }

  /**
   * @param {boolean} flag
   */
  set canClose(flag) {
    this.#toast.classList.toggle("can-close", flag);
    if (!flag) return;
    console.log({ flag });
    this.#toast.addEventListener("click", this.remove.bind(this));
  }

  show(flag) {
    if (!flag) return;
    this.classList.add("toast");
    this.onOpen();
  }

  create(options) {
    this.#toast = document.createElement("div");
    this.#toast.classList.add("toast");

    this.update({ ...DEFAULT_OPTIONS, ...options });
  }

  update(options) {
    Object.entries(options).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  remove() {
    const container = this.#toast.parentElement;
    this.#toast.remove();
    if (container.hasChildNodes()) return;
    container.remove();
    this.onClose(this.#toast);
  }
}

function createContainer(position) {
  const container = document.createElement("div");
  container.classList.add("toast-container");
  container.dataset.position = position;
  document.body.append(container);
  return container;
}
