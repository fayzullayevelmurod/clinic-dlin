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

const callBtn = document.querySelector(".call-fixed-btn");
const callModal = document.querySelector(".call-modal");
const closeCallModal = document.querySelector(".close-call-btn");
callBtn.addEventListener("click", () => {
  callModal.classList.add("show");
});
closeCallModal.addEventListener("click", () => {
  callModal.classList.remove("show");
});

callModal.addEventListener("click", (e) => {
  if (!e.target.closest(".content")) {
    callModal.classList.remove("show");
  }
});
const menuBtn = document.querySelector(".media-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu");
const menu = document.querySelector(".media-menu");
menuBtn.addEventListener("click", () => {
  menu.classList.add("show");
  document.body.style.overflow = "hidden";
});
closeMenuBtn.addEventListener("click", () => {
  menu.classList.remove("show");
  document.body.style.overflow = "";
});
menu.addEventListener("click", (e) => {
  if (!e.target.closest(".content")) {
    menu.classList.remove("show");
    document.body.style.overflow = "";
  }
});

const openModalBtns = document.querySelectorAll(".open-modal-btn");
const formModal = document.querySelector(".form-modal");
const closeModalBtn = document.querySelector(".close-modal");

openModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formModal.classList.add("show");

    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      document.body.style.overflow = "";
    }
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
