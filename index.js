const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container2 = document.querySelector(".container2");

left.addEventListener("mouseenter", () => {
  container2.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  container2.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  container2.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  container2.classList.remove("hover-right");
});