import Toast from "./toast.js";

const form = document.getElementById("options-form");

document.querySelector("[data-show]").addEventListener("click", () => {
  const formData = new FormData(form);
  console.log(Object.fromEntries(formData.entries()));
  const toast = new Toast({
    text: "Hello",
    autoClose: false,
    ...Object.fromEntries(formData.entries()),
  });
});
