const siSpan = document.querySelector(".picit");
const siBar = document.querySelector(".navbar");

siSpan.addEventListener("click", () => {
  siSpan.classList.toggle("active");
  siBar.classList.toggle("active");
});
