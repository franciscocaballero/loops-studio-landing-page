const hamburger = document.querySelector(".hamburger");
const x = document.querySelector(".x");
const body = document.querySelector("body");
const nav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  body.classList.add("over-follow");
});
x.addEventListener("click", () => {
  nav.classList.toggle("hidden");

  body.classList.remove("over-follow");
});
