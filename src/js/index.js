const cv = document.querySelectorAll(".img")[3];
const popupdiv = document.querySelector(".outside-popup");
const popupContainer = document.querySelector(".popup-util");
const header = document.querySelector(".header-container");
const tracker = document.querySelector(".tracker");

cv.addEventListener("click", () => {
  popupdiv.classList.toggle("disabled");
  document.body.classList.toggle("truncated");
});

popupContainer.addEventListener("click", (e) => {
  e.target.classList.forEach((element) => {
    if (element == "popup-close-btn") {
      popupdiv.classList.toggle("disabled");
      document.body.classList.toggle("truncated");
    }
  });
});

document.addEventListener("scroll", (e) => {
  if (scrollY > header.offsetHeight) {
    tracker.classList.add("active-tracker");
  } else {
    tracker.classList.remove("active-tracker");
  }
});

tracker.addEventListener("click", () => {
  document.documentElement.scrollTop = document.body.scrollTop = 0;
});
