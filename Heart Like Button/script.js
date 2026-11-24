const button = document.getElementById("like");
const count = button.querySelector(".count");

button.addEventListener("click", () => {
  const liked = button.classList.toggle("liked");

  button.setAttribute("aria-pressed", String(liked));
  button.querySelector(".heart").innerHTML = liked ? "&#9829;" : "&#9825;";
  count.textContent = Number(count.textContent) + (liked ? 1 : -1);
});
