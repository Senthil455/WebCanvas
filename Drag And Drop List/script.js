const list = document.getElementById("list");

list.addEventListener("dragstart", (event) => {
  event.target.classList.add("dragging");
});

list.addEventListener("dragend", (event) => {
  event.target.classList.remove("dragging");
  list.querySelectorAll("li").forEach((item) => item.classList.remove("over"));
});

list.addEventListener("dragover", (event) => {
  event.preventDefault();
  const dragged = list.querySelector(".dragging");
  const target = event.target.closest("li");

  if (!dragged || !target || dragged === target) return;

  const rect = target.getBoundingClientRect();
  const after = event.clientY > rect.top + rect.height / 2;
  list.insertBefore(dragged, after ? target.nextSibling : target);
});
