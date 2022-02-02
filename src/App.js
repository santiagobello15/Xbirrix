import React from "react";
import "./App.css";
/* import FunReviews from "./ReviewsData.js"; intenté crear class y objects afuera, en otro archivo e importar pero no pude. no me tomaba los objects. PE reviews1*/

function App() {
  class Reviews {
    constructor(userId, userName, userComment) {
      this.userId = userId;
      this.userName = userName;
      this.userComment = userComment;
      this.userPicture = "picture-" + this.userId;
    }
  }

  let reviews1 = new Reviews(1, "German", "No esta buena la app");
  let reviews2 = new Reviews(2, "Esteban", "Muy buena la pagina");

  return (
    <div className="reviews-container1">
      <div className="reviews-picture picture-backgr"></div>
      <div className="reviews-picture">
        <img
          className="reviews-image"
          src={"/src/media/" + reviews1.userPicture + ".jpg"}
        ></img>
      </div>

      <div className="arrow arrow-back-container">
        <a href="a" className="arrow-a">
          {"<"}
        </a>
      </div>
      <div className="arrow arrow-forward-container">
        <a href="a" className="arrow-a">
          {">"}
        </a>
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

export default App;
