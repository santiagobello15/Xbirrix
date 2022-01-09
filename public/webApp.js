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

const words = [
  "BIRRA",
  "BIER",
  "CERVEZA",
  "PIVO",
  "BEER",
  "CERVEJA",
  "øL",
  "PIWO",
  "пиво",
  "BIÈRE",
];

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
  if (this.scrollY < 200) {
    navbar.classList.remove("navbar-below-px");
    navbar.classList.add("navbar-above-px");
  } else {
    navbar.classList.add("navbar-below-px");
    navbar.classList.remove("navbar-above-px");
  }
});

const IDsTitHolder = ["Home", "Variedades", "Reseñas", "Contacto"];

for (i = 0; i < IDsTitHolder.length; i++) {
  let titHolder = document.getElementById("holderID" + i);
  window.addEventListener("scroll", (e) => {
    if (this.scrollY < 200) {
      titHolder.classList.remove("titles-holder-li-a-below-px");
      titHolder.classList.add("tit-holder-li-a");
    } else {
      titHolder.classList.add("titles-holder-li-a-below-px");
      titHolder.classList.remove("tit-holder-li-a");
    }
  });
}

const bookingButton = document.getElementById("button-cointainer-id");
bookingButton.addEventListener("click", function () {
  let newBookingButtonAlert = document.createElement("div");
  newBookingButtonAlert.innerHTML =
    '<p class="p-button">' + "En Construcción" + "</p>";
  document
    .getElementById("button-cointainer-id")
    .appendChild(newBookingButtonAlert);
  newBookingButtonAlert.classList.add("book-button-alert");
  setTimeout(function () {
    newBookingButtonAlert.remove("book-button-alert");
  }, 3000);
});