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

/* document.getElementById("m1").classList.add("fade2");
document.getElementById("m2").classList.add("fade3");
document.getElementById("m3").classList.add("fade2");
document.getElementById("m4").classList.add("fade3");

document.getElementById("m5").classList.add("fade2");
document.getElementById("m6").classList.add("fade3");
document.getElementById("m7").classList.add("fade2");
document.getElementById("m8").classList.add("fade3");

document.getElementById("m9").classList.add("fade3");
document.getElementById("m10").classList.add("fade2");
document.getElementById("m11").classList.add("fade3");
document.getElementById("m12").classList.add("fade2"); */

setInterval(() => {
  document.getElementById("m1").classList.toggle("fade");
  document.getElementById("m2").classList.toggle("fade");
  document.getElementById("m3").classList.toggle("fade");
  document.getElementById("m4").classList.toggle("fade");
}, 700);

setInterval(() => {
  document.getElementById("m5").classList.toggle("fade");
  document.getElementById("m6").classList.toggle("fade");
  document.getElementById("m7").classList.toggle("fade");
  document.getElementById("m8").classList.toggle("fade");
}, 1000);

setInterval(() => {
  document.getElementById("m9").classList.toggle("fade");
  document.getElementById("m10").classList.toggle("fade");
  document.getElementById("m11").classList.toggle("fade");
  document.getElementById("m12").classList.toggle("fade");
}, 1700);
