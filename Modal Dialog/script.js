const modal = document.getElementById("modal");

document.getElementById("open").addEventListener("click", () => modal.showModal());
document.getElementById("cancel").addEventListener("click", () => modal.close());
document.getElementById("confirm").addEventListener("click", () => modal.close());
