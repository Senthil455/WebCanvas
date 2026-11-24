const items = [
  "Accordion",
  "Animated Checkbox",
  "Card Grid",
  "Chat Bubble",
  "Dot Loader",
  "Glass Card",
  "Modal Dialog",
  "Progress Ring",
  "Rating Stars",
  "Timeline",
];

const input = document.getElementById("query");
const list = document.getElementById("suggestions");

function render(query) {
  const term = query.trim().toLowerCase();
  const matches = items.filter((item) => item.toLowerCase().includes(term));

  list.innerHTML = "";

  if (matches.length === 0) {
    list.innerHTML = '<li class="empty">No matches found</li>';
    return;
  }

  matches.forEach((item) => {
    const row = document.createElement("li");
    row.textContent = item;
    row.addEventListener("click", () => {
      input.value = item;
      list.innerHTML = "";
    });
    list.appendChild(row);
  });
}

input.addEventListener("input", () => render(input.value));
render("");
