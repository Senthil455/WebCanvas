const text = document.getElementById("text");
const count = document.getElementById("count");
const button = document.querySelector(".meta button");
const limit = 120;

function update() {
  const used = text.value.length;

  count.textContent = `${used} / ${limit}`;
  count.classList.toggle("limit", used > limit * 0.9);
  button.disabled = used === 0;
}

text.addEventListener("input", update);
update();
