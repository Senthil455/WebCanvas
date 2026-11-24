const box = document.getElementById("box");
const entry = document.getElementById("entry");
const chips = document.getElementById("chips");
const tags = ["css", "html"];

function render() {
  chips.innerHTML = "";

  tags.forEach((tag) => {
    const chip = document.createElement("span");
    const remove = document.createElement("button");

    chip.className = "chip";
    chip.textContent = tag;
    remove.textContent = "\u00d7";
    remove.setAttribute("aria-label", `Remove ${tag}`);
    remove.addEventListener("click", () => {
      tags.splice(tags.indexOf(tag), 1);
      render();
    });

    chip.appendChild(remove);
    chips.appendChild(chip);
  });
}

entry.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;

  event.preventDefault();
  const value = entry.value.trim().toLowerCase();

  if (!value || tags.includes(value)) return;

  tags.push(value);
  entry.value = "";
  render();
});

box.addEventListener("click", () => entry.focus());
render();
