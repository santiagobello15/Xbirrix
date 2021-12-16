var slideIndex = 1;
showSlides(slideIndex); // declaro la variable como 1 para que corra al iniciar la pag con la primer birra

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

////////////////////
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

///////////////

const blackImage = document.querySelector(".img-negro");
blackImage.addEventListener("click", function () {
  var newElement = document.createElement("p");
  newElement.innerHTML = "A mí dime Ladyboy";
  document.getElementById("testes").appendChild(newElement);
  newElement.classList.add("new-click-leandro");
  setTimeout(function () {
    newElement.remove();
  }, 5000);
});

const whiteImage = document.querySelector(".img-santi");
whiteImage.addEventListener("click", function () {
  var newElement = document.createElement("p");
  newElement.innerHTML = "Soy Santi, jóven";
  document.getElementById("testese").appendChild(newElement);
  newElement.classList.add("new-click-santi");
  setTimeout(function () {
    newElement.remove();
  }, 5000);
});

/* con esto cree los divs de los ladrillos, con for.. del html elimine los container ya...

let lloladris = screen.width / 20;
let qtyLloladris = 20;

for (let i = 0; i < qtyLloladris; i++) {
  var newBrick = document.createElement("div");
  newBrick.classList.add("brick-orange");
  newBrick.innerHTML = "";
  newBrick.id = "brickerson" + i;
  document.getElementById("bricks-rows-1").appendChild(newBrick);
}
for (let i = 0; i < qtyLloladris; i++) {
  var newBrick = document.createElement("div");
  newBrick.classList.add("brick-orange");
  newBrick.innerHTML = ".";
  document.getElementById("bricks-rows-2").appendChild(newBrick);
}
for (let i = 0; i < qtyLloladris; i++) {
  var newBrick = document.createElement("div");
  newBrick.classList.add("brick-orange");
  newBrick.innerHTML = ".";
  document.getElementById("bricks-rows-3").appendChild(newBrick);
}
for (let i = 0; i < qtyLloladris; i++) {
  var newBrick = document.createElement("div");
  newBrick.classList.add("brick-orange");
  newBrick.innerHTML = ".";
  document.getElementById("bricks-rows-4").appendChild(newBrick);
}
for (let i = 0; i < qtyLloladris; i++) {
  var newBrick = document.createElement("div");
  newBrick.classList.add("brick-orange");
  newBrick.innerHTML = ".";
  document.getElementById("bricks-rows-5").appendChild(newBrick);
}

*/
var birraKey = "BIRRA";
var birraVariable = "UNA " + birraKey + "<br>" + "PARA CADA OCASIÓN";
var birraKey = "birra" + 1;
var birra1 = "BIRRA";
var birra2 = "BIER";
var birra3 = "CERVEZA";
var birra4 = "PINTA";
var birra5 = "BEER";

document.getElementById("tit-birra-id").innerHTML = birraVariable;

cambioBirra = function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

setInterval(function () {
  idiomaBirra = cambioBirra(1, 5);
  console.log(idiomaBirra);
  var birraKey = window["birra" + idiomaBirra];
  console.log(birraKey);
  document.getElementById("tit-birra-id").innerHTML = birraVariable;
  document.getElementById("tit-birra-id").classList.add("beer-word");
  setTimeout(function () {
    birraVariable = "UNA " + birraKey + "<br>" + "PARA CADA OCASIÓN";
  }, 1);
}, 1500);

//rest
