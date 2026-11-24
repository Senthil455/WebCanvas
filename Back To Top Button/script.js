const button = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  button.classList.toggle("show", window.scrollY > 200);
});

button.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
