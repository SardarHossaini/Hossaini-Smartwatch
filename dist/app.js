const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

// Open Menu
menuBtn.addEventListener("click", () => {
  menu.classList.replace("hidden", "flex");
});

// Close Menu
[...menu.children].forEach((el) => {
  el.addEventListener("click", () => {
    menu.classList.replace("flex", "hidden");
  });
});
