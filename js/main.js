const complexCasesSwiper = new Swiper(".complex-cases__swiper", {
  slidesPerView: 2,
  spaceBetween: 40,
  speed: 700,
  navigation: {
    nextEl: ".complex-cases__swiper-next",
    prevEl: ".complex-cases__swiper-prev",
  },
  loop: true,
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
