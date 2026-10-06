document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach(x => x.classList.remove("active"));
    item.classList.add("active");
  });
});

const nodes = document.querySelectorAll(".node");
nodes.forEach(node => {
  node.addEventListener("click", () => {
    node.style.background = "#f8fafc";
    setTimeout(() => node.style.background = "", 250);
  });
});
