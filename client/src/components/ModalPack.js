import "../App.css";
import "./modalStyle.css";
import React, { useState } from "react";
import Axios from "axios";

function ModalPack({ closeModal /* , setReview */ }) {
  const closeModalFunction = () => {
    closeModal(false);
  };

  const [userName, setUserName] = useState("John Doe");
  const [userScore, setUserScore] = useState(5);
  const [userComment, setUserComment] = useState("Me gustó el sitio");

  const addedReview = () => {
    /*     const addedReviewObject = new Reviews(userName, userScore, userComment);
    reviewsArray.push(addedReviewObject);
    setReview(reviewsArray); */
    closeModal(false);
    Axios.post("http://localhost:3001/api/insert", {
      userName: userName,
      userScore: userScore,
      userComment: userComment,
    });
  };

  return (
    <div className="overlay-modal">
      <div className="modal-container">
        <div className="modal-container-container modal-title">
          <h1>TU OPINIÓN</h1>
        </div>
        <div className="modal-container-container first-div">
          <p className="container-p-picture">Foto tuya</p>
        </div>
        <div className="modal-container-container second-div">
          <p className="container-p-input container-p-picture-second-div">
            ¿Cómo te llamas?
          </p>
          <input
            type="text"
            className="container-input second-div-input"
            placeholder="Nombre y Apellido"
            onChange={(evt) => {
              setUserName(evt.target.value);
            }}
          ></input>
        </div>
        <div className="modal-container-container fourth-div">
          <p className="container-p-input container-p-picture-fourth-div">
            Dejá tu putaje
          </p>
          <input
            type="text"
            className="container-input fourth-div-input"
            placeholder="1-5"
            onChange={(evt) => {
              setUserScore(evt.target.value);
            }}
          ></input>
        </div>
        <div className="modal-container-container third-div">
          <p className="container-p-input">¿Qué opinás de nosotros?</p>
          <input
            type="text"
            className="container-input third-div-input"
            placeholder="¡Dejanos tu opinión! ¿Qué te gustó? ¿Qué debemos mejorar?"
            onChange={(evt) => {
              setUserComment(evt.target.value);
            }}
          ></input>
        </div>

        <button className="close-button" onClick={closeModalFunction}>
          X
        </button>
        <button onClick={addedReview} className="confirm-button">
          Confirmar
        </button>
      </div>
    </div>
  );
}

export default ModalPack;