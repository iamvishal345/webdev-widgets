const form = document.querySelector("form[data-multi-step]");
const formSteps = document.querySelectorAll("div[data-step]");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    formSteps[0].classList.remove("prevent-animation");
  }, 800);
});
console.log("HERE");
const getCurrentStepInputs = () => {
  return formSteps[currentStep].querySelectorAll("input");
};
const validateCurrentStep = () => {
  const inputs = getCurrentStepInputs();
  return [...inputs].every((input) => input.reportValidity());
};

let currentStep = 0;
if (currentStep === -1) {
  formSteps[0].classList.add("active");
}

form.addEventListener("click", (e) => {
  console.log(e.target.dataset);
  const { next, prev } = e.target.dataset;
  if (next === "") {
    if (validateCurrentStep()) {
      handleNextButtonClick();
    }
  } else if (prev === "") {
    handlePrevButtonClick();
  } else {
    return;
  }
});

const addAndRemoveFade = (el) => {
  el.classList.add("fade");
  setTimeout(() => {
    el.classList.remove("fade");
  }, 500);
};

const handleNextButtonClick = () => {
  console.log("HERE");
  formSteps[currentStep].classList.remove("active-reverse");
  formSteps[currentStep].classList.remove("active");
  addAndRemoveFade(formSteps[currentStep]);
  currentStep += 1;
  formSteps[currentStep].classList.add("active");
};

const handlePrevButtonClick = () => {
  formSteps[currentStep].classList.remove("active");
  formSteps[currentStep].classList.remove("active-reverse");
  addAndRemoveFade(formSteps[currentStep]);
  currentStep -= 1;
  formSteps[currentStep].classList.add("active-reverse");
};
