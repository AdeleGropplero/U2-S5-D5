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
document.getElementById("m12").classList.add("fade2"); 

⬆️ questo non funzionava come volevo*/

/* setInterval(() => {
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

Questo era il metodo precendentemente scelto, tuttavia il dover scegliere a mano 
su 8 mila righe di codice a quale g dare l'id non mi sembrava funzionale quindi 
ho scelto un altro approccio. */

const gCorrect =
  document.querySelectorAll(
    "svg g path"
  ); /* Dall'inspector ho notato che le g "giuste erano quelle con il path
                                                             quindi mi sono ricavata una node list gelle g "corrette" */
console.log(gCorrect);
console.log(gCorrect.length);

const randomN = function () {
  return Math.floor(Math.random() * 274) + 1;
};

let fiveN1 = [];
let fiveN2 = [];
let fiveN3 = [];
/* Ho scelto di creare 3 array così da randomizzare in seguito con set interval,
 gli intervalli di tempo di ogni gruppo di numeri così da rendere più naturale l'effetto
 e non avere 15 M tutte in blocco che sparivano e comparivano. */

function fillArrayWithRandomNumbers(array) {
  for (let i = 0; i < 5; i++) {
    array.push(randomN());
  }
}

fillArrayWithRandomNumbers(fiveN1);
fillArrayWithRandomNumbers(fiveN2);
fillArrayWithRandomNumbers(fiveN3);

console.log(fiveN1, fiveN2, fiveN3);

function toggleFadeClass(array) {
  array.forEach((number) => {
    const index = number - 1;
    if (index >= 0 && index < gCorrect.length) {
      gCorrect[index].classList.toggle("fade");
    }
  });
} /*  Dopo aver generato i numeri casuali e averli pushati nei vari array (fiveN1, 2, 3)
 ho associato ciascun numero degli array a un indice specifico nella NodeList gCorrect,
 chiedendo poi alla funzione di utilizzare il metodo toggle() per gestire la classe .fade. 
 Così da "aggiungere e togliere" la classe .fade dagli elementi di gCorrect, 
 in base agli indici corrispondenti. */

setInterval(() => {
  toggleFadeClass(fiveN1);
}, 700);

setInterval(() => {
  toggleFadeClass(fiveN2);
}, 1000);

setInterval(() => {
  toggleFadeClass(fiveN3);
}, 1700);
