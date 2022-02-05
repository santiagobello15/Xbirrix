class Reviews {
  constructor(userId, userName, userScore, userComment) {
    this.userId = userId;
    this.userName = userName;
    this.userScore = userScore;
    this.userComment = userComment;
    this.userPicture = "picture-" + this.userId;
  }
}

let reviews0 = new Reviews(0, "German Gomez", 3, "No está buena la app");
let reviews1 = new Reviews(1, "Carolina Quito", 5, "Muy buena la página");
let reviews2 = new Reviews(
  2,
  "Marta Morales",
  4,
  "No tengo más que buenas palabras para la empresa. Llega todo siempre en buen estado, y rápido. Los precios también son buenos"
);
let reviews3 = new Reviews(
  3,
  "Jose Profeta",
  2,
  "El sitio está muy bueno, pero los precios son elevados. Tienen gran variedad de bebidas"
);
let reviews4 = new Reviews(
  4,
  "Ernst Young",
  1,
  "No me permite comprar por el sitio, tuve que llamar por teléfono"
);
let reviews5 = new Reviews(
  5,
  "Ramiro Stofenmacher",
  5,
  "Los amigos de xBirrix siempre cumplen, me entregaron siempre los productos de acuerdo a lo acordado"
);
export let reviewsArray = [
  reviews0,
  reviews1,
  reviews2,
  reviews3,
  reviews4,
  reviews5,
];

let star1 = { imageType: "star" };
let star2 = { imageType: "star" };
let star3 = { imageType: "star" };
let star4 = { imageType: "star" };
let star5 = { imageType: "star" };
export let starsArray = [star1, star2, star3, star4, star5];
