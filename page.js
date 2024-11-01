const bar = document.getElementById("header");
const button = document.getElementById("headerBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 430) {
    bar.style.backgroundColor = "white";
    button.style.backgroundColor = "#1a8917";
  } else {
    bar.style.backgroundColor = "#ffc017";
    button.style.backgroundColor = "black";
  }
});
