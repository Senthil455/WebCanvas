const badge = document.getElementById("badge");

document.getElementById("cart").addEventListener("click", () => {
  badge.textContent = Number(badge.textContent) + 1;
  badge.classList.remove("pop");
  void badge.offsetWidth;
  badge.classList.add("pop");
});
