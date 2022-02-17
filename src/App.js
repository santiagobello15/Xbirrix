import React, { useState } from "react";
import "./App.css";
import { reviewsArray } from "./dataBase.js";
import ModalPack from "./components/ModalPack.js";

function App() {
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(false);
  const [reviews, setReview] = useState(reviewsArray);

  function conditRenderModal() {
    if (show == true) {
      return <ModalPack closeModal={setShow} setReview={setReview} />;
    }
  }

  const showModalFunction = () => {
    setShow(true);
  };

  const prevSlide = () => {
    if (current == 0) {
      setCurrent(Object.keys(reviews).length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  const nextSlide = () => {
    if (current == Object.keys(reviews).length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const jeje = () => {
    console.log(reviews);
  };

  return (
    <div>
      <div className="reviews-container1">
        <div className="reviews-picture picture-backgr"></div>
        <div className="reviews-picture">
          <img
            className="reviews-image"
            src={"/src/media/picture-" + current + ".jpg"}
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
          <a className="reviews-title-a">{reviews[current].userName}</a>
        </div>
        <div className="reviews-body-container">
          <a className="reviews-body-a">{reviews[current].userComment}</a>
          <div className="reviews-stars-container">
            <div className="reviews-star-div">
              <img
                className="star-icon"
                src={
                  "/src/media/" +
                  (reviews[current].userScore >= 1 ? "star-active" : "star") +
                  ".svg"
                }
              ></img>
            </div>
            <div className="reviews-star-div">
              <img
                className="star-icon"
                src={
                  "/src/media/" +
                  (reviews[current].userScore >= 2 ? "star-active" : "star") +
                  ".svg"
                }
              ></img>
            </div>
            <div className="reviews-star-div">
              <img
                className="star-icon"
                src={
                  "/src/media/" +
                  (reviews[current].userScore >= 3 ? "star-active" : "star") +
                  ".svg"
                }
              ></img>
            </div>
            <div className="reviews-star-div">
              <img
                className="star-icon"
                src={
                  "/src/media/" +
                  (reviews[current].userScore >= 4 ? "star-active" : "star") +
                  ".svg"
                }
              ></img>
            </div>
            <div className="reviews-star-div">
              <img
                className="star-icon"
                src={
                  "/src/media/" +
                  (reviews[current].userScore >= 5 ? "star-active" : "star") +
                  ".svg"
                }
              ></img>
            </div>
          </div>
        </div>
      </div>
      <button className="reviews-input-btn" onClick={showModalFunction}>
        <a>DEJÁ TU OPINIÓN</a>
      </button>
      <button onClick={jeje}></button>
      {conditRenderModal()}
    </div>
  );
}

export default App;
