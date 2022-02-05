import React, { useState } from "react";
import "./App.css";
/* import FunReviews from "./ReviewsData.js"; intenté crear class y objects afuera, en otro archivo e importar pero no pude. no me tomaba los objects. PE reviews1*/

function App() {
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
  let reviews1 = new Reviews(1, "Carolina Quito", 4, "Muy buena la página");
  let reviews2 = new Reviews(
    2,
    "Marta Morales",
    5,
    "No tengo más que buenas palabras para la empresa. Llega todo siempre en buen estado, y rápido. Los precios también son buenos"
  );
  let reviews3 = new Reviews(
    3,
    "Jose Profeta",
    4,
    "El sitio está muy bueno, pero los precios son elevados. Tienen gran variedad de bebidas."
  );

  const [current, setCurrent] = useState(0);

  let reviewsArray = [reviews0, reviews1, reviews2, reviews3];
  let reviewsFindId = reviewsArray.find((Reviews) => Reviews.userId == current);

  const prevSlide = () => {
    if (current == 0) {
      setCurrent(Object.keys(reviewsArray).length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  const nextSlide = () => {
    if (current == Object.keys(reviewsArray).length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  let star1 = { imageType: "star" };
  let star2 = { imageType: "star" };
  let star3 = { imageType: "star" };
  let star4 = { imageType: "star" };
  let star5 = { imageType: "star" };
  let starsArray = [star1, star2, star3, star4, star5];

  const reviewsCount = () => {
    for (let i = 0; i < starsArray.length - 1; i++) {
      if (reviewsFindId.userScore - 1 > i) {
        starsArray[i] = "star-active";
        console.log(star1);
      }
    }
  };
  reviewsCount();

  return (
    <div className="reviews-container1">
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
        <div className="reviews-stars-container">
          <div className="reviews-star-div">
            <img
              className="star-icon"
              src={"/src/media/" + "sd" + ".svg"}
            ></img>
          </div>
          <div className="reviews-star-div">
            <img className="star-icon" src={"/src/media/star.svg"}></img>
          </div>
          <div className="reviews-star-div">
            <img className="star-icon" src={"/src/media/star.svg"}></img>
          </div>
          <div className="reviews-star-div">
            <img className="star-icon" src={"/src/media/star.svg"}></img>
          </div>
          <div className="reviews-star-div">
            <img className="star-icon" src={"/src/media/star.svg"}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
