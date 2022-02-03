import React, { useState } from "react";
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

  let reviews0 = new Reviews(0, "German", "No esta buena la app");
  let reviews1 = new Reviews(1, "Esteban", "Muy buena la pagina");

  const [current, setCurrent] = useState(0);

  let reviewsArray = [reviews0, reviews1];
  let reviewsFindId = reviewsArray.find((Reviews) => Reviews.userId == current);
  console.log(reviewsFindId);

  const prevSlide = () => {
    setCurrent(current - 1);
    console.log(current);
  };
  const nextSlide = () => {
    setCurrent(current + 1);
    console.log(current);
  };

  return (
    <div className="reviews-container1">
      <div>{current}</div>
      <div className="reviews-picture picture-backgr"></div>
      <div className="reviews-picture">
        <img
          className="reviews-image"
          src={"/src/media/" + reviewsFindId.userPicture + ".jpg"}
        ></img>
      </div>

      <div className="arrow arrow-back-container">
        <a className="arrow-a" onClick={prevSlide}>
          {"<"}
        </a>
      </div>
      <div className="arrow arrow-forward-container">
        <a className="arrow-a" onClick={nextSlide}>
          {">"}
        </a>
      </div>
      <div className="reviews-title-container">
        <a className="reviews-title-a">{reviewsFindId.userName}</a>
      </div>
      <div className="reviews-body-container">
        <a className="reviews-body-a">{reviewsFindId.userComment}</a>
      </div>
    </div>
  );
}

export default App;
