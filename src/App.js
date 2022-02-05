import React, { useState } from "react";
import "./App.css";
import { reviewsArray } from "./dataBase.js";
import { starsArray } from "./dataBase.js";
import ModalPack from "./modalFile.js";

function App() {
  const [current, setCurrent] = useState(0);

  let reviewsFindId = reviewsArray.find((Reviews) => Reviews.userId == current);

  const prevSlide = () => {
    if (current == 0) {
      setCurrent(Object.keys(reviewsArray).length - 1);
    } else {
      setCurrent(current - 1);
    }
    resetStar();
  };
  const nextSlide = () => {
    if (current == Object.keys(reviewsArray).length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
    resetStar();
  };

  const resetStar = () => {
    for (let i = 0; i < starsArray.length; i++) {
      starsArray[i].imageType = "star";
    }
  };

  const reviewsCount = () => {
    for (let i = 0; i < starsArray.length; i++) {
      if (reviewsFindId.userScore > i) {
        starsArray[i].imageType = "star-active";
      }
    }
  };
  reviewsCount();

  return (
    <div>
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
                src={"/src/media/" + starsArray[0].imageType + ".svg"}
              ></img>
            </div>
            <div className="reviews-star-div">
              <img
                className="star-icon"
                src={"/src/media/" + starsArray[1].imageType + ".svg"}
              ></img>
            </div>
            <div className="reviews-star-div">
              <img
                className="star-icon"
                src={"/src/media/" + starsArray[2].imageType + ".svg"}
              ></img>
            </div>
            <div className="reviews-star-div">
              <img
                className="star-icon"
                src={"/src/media/" + starsArray[3].imageType + ".svg"}
              ></img>
            </div>
            <div className="reviews-star-div">
              <img
                className="star-icon"
                src={"/src/media/" + starsArray[4].imageType + ".svg"}
              ></img>
            </div>
          </div>
        </div>
      </div>
      <ModalPack />
    </div>
  );
}

export default App;
