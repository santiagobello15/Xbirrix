import React, { useState, useEffect } from "react";
import "./App.css";
import { reviewsArray } from "./dataBase.js";
import ModalPack from "./components/ModalPack.js";
import Axios from "axios";

function App() {
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(false);

  const [prueba, setPrueba] = useState(reviewsArray);

  function conditRenderModal() {
    if (show == true) {
      return (
        <ModalPack closeModal={setShow} />
      ); /* as I have passed functions from child to parent, I needed to include them here as props */
    }
  }

  const showModalFunction = () => {
    setShow(true);
  };

  const prevSlide = () => {
    if (current == 0) {
      setCurrent(Object.keys(prueba).length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  const nextSlide = () => {
    if (current == Object.keys(prueba).length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setPrueba(response.data);
    });
  });

  const hola = () => {
    for (let i = 0; i < prueba.length; i++) {
      console.log(prueba);
    }
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
          <a className="reviews-title-a">{prueba[current].userName}</a>
        </div>
        <div className="reviews-body-container">
          <a className="reviews-body-a">{prueba[current].userComment}</a>
          <div className="reviews-stars-container">
            <div className="reviews-star-div">
              <img
                className="star-icon"
                src={
                  "/src/media/" +
                  (prueba[current].userScore >= 1 ? "star-active" : "star") +
                  ".svg"
                }
              ></img>
            </div>
            <div className="reviews-star-div">
              <img
                className="star-icon"
                src={
                  "/src/media/" +
                  (prueba[current].userScore >= 2 ? "star-active" : "star") +
                  ".svg"
                }
              ></img>
            </div>
            <div className="reviews-star-div">
              <img
                className="star-icon"
                src={
                  "/src/media/" +
                  (prueba[current].userScore >= 3 ? "star-active" : "star") +
                  ".svg"
                }
              ></img>
            </div>
            <div className="reviews-star-div">
              <img
                className="star-icon"
                src={
                  "/src/media/" +
                  (prueba[current].userScore >= 4 ? "star-active" : "star") +
                  ".svg"
                }
              ></img>
            </div>
            <div className="reviews-star-div">
              <img
                className="star-icon"
                src={
                  "/src/media/" +
                  (prueba[current].userScore >= 5 ? "star-active" : "star") +
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
      <button onClick={hola}>
        <a>DEJÁ TU OPINIÓN</a>
      </button>
      {/*       {prueba.map((val) => {
        return (
          <h1>
            userName: {val.user_name} | userScore: {val.user_score} |
            userComment: {val.user_comment}
          </h1>
        );
      })} */}
      {conditRenderModal()}
    </div>
  );
}

export default App;
