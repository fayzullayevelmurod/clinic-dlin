const complexCasesSwiper = new Swiper(".complex-cases__swiper", {
  slidesPerView: 2,
  spaceBetween: 40,
  speed: 700,
  navigation: {
    nextEl: ".complex-cases__swiper-next",
    prevEl: ".complex-cases__swiper-prev",
  },
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

const ourTeam = new Swiper(".our-team__swiper", {
  slidesPerView: 4,
  spaceBetween: 40,
  speed: 700,
  navigation: {
    nextEl: ".our-team__swiper-next",
    prevEl: ".our-team__swiper-prev",
  },
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    700: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});
var arMapMarkers1093686001 = [
  {
    title: "",
    descr: "",
    lat: "55.785918",
    lng: "37.632646",
    color: null,
    url: null,
    isOpen: false,
    isHidden: false,
    offset: null,
  },
];

document.querySelectorAll(".phone-mask").forEach((input) => {
  IMask(input, {
    mask: "+{7}(000)000-00-00",
  });
});

const exactTime = document.getElementById("exact-time");
const selectBox = document.querySelector(".select-box");

function updateSelectBox() {
  if (exactTime.checked) {
    selectBox.classList.add("show");
  } else {
    selectBox.classList.remove("show");
  }
}

// Radio o'zgarganda tekshirish
document.querySelectorAll('input[name="time"]').forEach((radio) => {
  radio.addEventListener("change", updateSelectBox);
});

// Boshlang'ich holat
updateSelectBox();

// const callBtn = document.querySelector(".call-fixed-btn");
// const callModal = document.querySelector(".call-modal");
// const closeCallModal = document.querySelector(".close-call-btn");
// callBtn.addEventListener("click", () => {
//   callModal.classList.add("show");
// });
// closeCallModal.addEventListener("click", () => {
//   callModal.classList.remove("show");
// });

// callModal.addEventListener("click", (e) => {
//   if (!e.target.closest(".content")) {
//     callModal.classList.remove("show");
//   }
// });
// const menuBtn = document.querySelector(".media-menu-btn");
// const closeMenuBtn = document.querySelector(".close-menu");
// const menu = document.querySelector(".media-menu");
// menuBtn.addEventListener("click", () => {
//   menu.classList.add("show");
//   document.body.style.overflow = "hidden";
// });
// closeMenuBtn.addEventListener("click", () => {
//   menu.classList.remove("show");
//   document.body.style.overflow = "";
// });
// menu.addEventListener("click", (e) => {
//   if (!e.target.closest(".content")) {
//     menu.classList.remove("show");
//     document.body.style.overflow = "";
//   }
// });

const openModalBtns = document.querySelectorAll(".open-modal-btn");
const formModal = document.querySelector(".form-modal");
const closeModalBtn = document.querySelector(".close-modal");

openModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formModal.classList.add("show");

    // if (menu.classList.contains("show")) {
    //   menu.classList.remove("show");
    //   document.body.style.overflow = "";
    // }
  });
});

closeModalBtn.addEventListener("click", () => {
  formModal.classList.remove("show");
});

formModal.addEventListener("click", (e) => {
  if (e.target && !e.target.closest(".modal-content")) {
    formModal.classList.remove("show");
  }
});

// step
// Elements
const steps = document.querySelectorAll(".step");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const progress = document.querySelector(".progress");
const errorMsg = document.querySelector(".error-msg");
let currentStep = 0;

// Initialize
steps[currentStep].classList.add("show");
progress.style.width = "0%";
updateNextText();

// Function to update progress
function updateProgress() {
  const percent = (currentStep / (steps.length - 1)) * 100;
  progress.style.width = percent + "%";
}

// Function to update next button text
function updateNextText() {
  if (steps[currentStep].classList.contains("last-step")) {
    nextBtn.textContent = "Отправить";
  } else {
    nextBtn.textContent = "Далее →";
  }
}

// Function to check if current step has selection
function isStepSelected() {
  const current = steps[currentStep];

  // check choose-box selection
  const boxes = current.querySelectorAll(".choose-box");
  if (boxes.length) {
    return Array.from(boxes).some((box) => box.classList.contains("selected"));
  }

  // check radio selection
  const radios = current.querySelectorAll("input[type='radio']");
  if (radios.length) {
    return Array.from(radios).some((r) => r.checked);
  }

  return true; // no selection needed
}

// Hide error message
function hideError() {
  errorMsg.classList.remove("show");
}

// Choose-box click logic
document.querySelectorAll(".choose-box").forEach((box) => {
  box.addEventListener("click", () => {
    const siblings = box.parentElement.querySelectorAll(".choose-box");
    siblings.forEach((sib) => sib.classList.remove("selected"));

    box.classList.add("selected");

    hideError(); // hide error on selection
    goNextStep();
  });
});

// Next button click
nextBtn.addEventListener("click", () => {
  if (!isStepSelected()) {
    errorMsg.classList.add("show");
    return;
  }

  hideError();
  goNextStep();
});

// Prev button click
prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    steps[currentStep].classList.remove("show");
    currentStep--;
    steps[currentStep].classList.add("show");
    updateProgress();
    updateNextText();
    hideError(); // hide error when going back
  }
});

// Radio click auto next
document.querySelectorAll("input[type='radio']").forEach((radio) => {
  radio.addEventListener("change", () => {
    hideError(); // hide error on selection
    goNextStep();
  });
});

// Move to next step
function goNextStep() {
  if (currentStep < steps.length - 1) {
    steps[currentStep].classList.remove("show");
    currentStep++;
    steps[currentStep].classList.add("show");
    updateProgress();
    updateNextText();
  }
}
