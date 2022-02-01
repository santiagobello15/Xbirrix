import React from "react";
import "./App.css";

function App() {
  return (
    <div className="reviews-container1">
      <div className="reviews-picture">
        <img
          className="reviews-image"
          src={"/src/media/" + reviews1.picture + ".jpg"}
        ></img>
      </div>
      <div className="arrow arrow-back-container">
        <a className="arrow-a">{"<"}</a>
      </div>
      <div className="arrow arrow-forward-container">
        <a className="arrow-a">{">"}</a>
      </div>
      <div className="reviews-title-container">
        <a className="reviews-title-a">{reviews1.userName}</a>
      </div>
      <div className="reviews-body-container">
        <a className="reviews-body-a">{reviews1.userComment}</a>{" "}
      </div>
    </div>
  );
}

function Reviews(id, userName, userComment) {
  this.id = id;
  this.userName = userName;
  this.userComment = userComment;
  this.picture = "picture-" + this.id;
}

let reviews1 = new Reviews(
  1,
  "Santiago",
  "El servicio es siempre 10 puntos. Voy a continuar pidiendo en la plataforma"
);

let reviews2 = new Reviews(2, "Martín", "El servicio es muy bueno.");
let reviews3 = new Reviews(3, "Josefina", "No me gustó mucho");

console.log(reviews1);
console.log(reviews2);
console.log(reviews3);

export default App;
