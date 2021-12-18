const texto = document.querySelector(".ah-text"); ////le di una variable a la seleccion del div de html
texto.innerHTML = texto.textContent.replace(/\S/g, "<span>$&</span>"); //// reemplazo texto por letras separadas.
const letras = document.querySelectorAll("span");
for (let i = 0; i < letras.length; i++) {
  letras[i].addEventListener("mouseover", function () {
    letras[i].classList.add("activex");
    setTimeout(function () {
      //////// villereada timeout?
      letras[i].classList.remove("activex");
    }, 3000);
  });
}

let birraKey = "BIRRA";
let birraVariable = birraKey + "<br>";

const words = ["BIRRA", "BIER", "CERVEZA", "PINTA", "BEER", "CERVEJA"];

document.getElementById("tit-birra-variable").innerHTML = birraVariable;

/* cambioBirra = function randomNumber() {
  return Math.floor(Math.random() * words.length);
};

setInterval(function () {
  console.log(cambioBirra());
  let birraKey = words[cambioBirra()];
  console.log(birraKey);
  document.getElementById("tit-birra-id").innerHTML = birraVariable;
  document.getElementById("tit-birra-id").classList.add("beer-word");
  setTimeout(function () {
    birraVariable = "UNA " + birraKey + "<br>" + "PARA CADA OCASIÓN";
  }, 1);
}, 1500);
 */
let prueb = "";
let wordsIndex = 1; //// simil i
function delayToChangeBeerWord() {
  setTimeout(function () {
    wordsIndex++;
    if (wordsIndex < words.length) {
      delayToChangeBeerWord();
    } else {
      wordsIndex = 0;
      delayToChangeBeerWord();
    }
    document.getElementById("tit-birra-variable").innerHTML = birraVariable;
    birraVariable = words[wordsIndex] + "<br>";
    prueb = document.getElementById("tit-birra-variable");
    setTimeout(function () {
      prueb.classList.add("beer-word-active");
      setTimeout(function () {
        prueb.classList.remove("beer-word-active");
      }, 1000); ///time to remove class
    }, 1000); ///time to add class
  }, 2000); ///time to new i
}
delayToChangeBeerWord();

let navbar = document.getElementById("unique-nav");

window.addEventListener("scroll", (e) => {
  if (this.scrollY < 400) {
    navbar.classList.remove("navbar-below-px");
  } else {
    navbar.classList.add("navbar-below-px");
  }
});
