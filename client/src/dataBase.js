export class Reviews {
  constructor(userName, userScore, userComment) {
    this.userName = userName;
    this.userScore = userScore;
    this.userComment = userComment;
  }
}

let reviews0 = new Reviews("German Gomez", 3, "No está buena la app");
let reviews1 = new Reviews("Carolina Quito", 5, "Muy buena la página");
let reviews2 = new Reviews(
  "Marta Morales",
  4,
  "No tengo más que buenas palabras para la empresa. Llega todo siempre en buen estado, y rápido. Los precios también son buenos"
);
let reviews3 = new Reviews(
  "Jose Profeta",
  2,
  "El sitio está muy bueno, pero los precios son elevados. Tienen gran variedad de bebidas"
);
let reviews4 = new Reviews(
  "Ernst Young",
  1,
  "No me permite comprar por el sitio, tuve que llamar por teléfono"
);
let reviews5 = new Reviews(
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
