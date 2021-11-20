const goTop = document.querySelector(".goTop");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY >= 100) {
    goTop.classList.add("goTop__active");
  } else {
    goTop.classList.remove("goTop__active");
  }
});
goTop.addEventListener("click", () => {
  window.scroll(0, 0);
});
