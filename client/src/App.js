import React, { useState, useEffect } from "react";
import "./App.css";
import ModalPack from "./components/ModalPack.js";
import Axios from "axios";

function App() {
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(false);
  const [reviews, setReviews] = useState();
  const [isLoading, setLoading] =
    useState(
      true
    ); /* by adding this loading, i'm waiting for axios to load all data and then render app. otherwise, as it's ASYNC, usestate reviews initial value will load faster than data is fetched */

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

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setReviews(response.data);
      setLoading(false);
    });
  });

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

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

      {/*       { a.map((val) => {
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