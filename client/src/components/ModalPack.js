import "../App.css";
import "./modalStyle.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Image } from "cloudinary-react";

function ModalPack({ closeModal, getReviewsFromApi }) {
  const closeModalFunction = () => {
    closeModal(false);
  };

  const [userName, setUserName] = useState("John Doe");
  const [userScore, setUserScore] = useState(5);
  const [userComment, setUserComment] = useState("Me gustó el sitio");
  const [userPicture, setUserPicture] = useState("2");
  const [imageSelected, setImageSelected] = useState("");
  const [showImage, setShowImage] = useState(
    "https://res.cloudinary.com/dpkfb428j/image/upload/v1647397451/logo-profile_ibsust.jpg"
  );
  const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT;
  const API_URL =
    ENVIRONMENT === "local"
      ? "http://localhost:3001/api"
      : "https://xbirrix-server.onrender.com/api";

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "zsffzfbc");
    await Axios.post(
      "https://api.cloudinary.com/v1_1/dpkfb428j/image/upload",
      formData
    ).then((response) => {
      setShowImage(response.data.secure_url);
      setUserPicture(response.data.secure_url);
    });
  };

  const jeje = () => {
    adddedReview();
  };

  const adddedReview = async () => {
    await Axios.post(`${API_URL}/reviews`, {
      userName: userName,
      userScore: userScore,
      userComment: userComment,
      userPicture: userPicture,
    });
  };

  const addedReview = async () => {
    closeModal(false);
    await Axios.post(`${API_URL}/reviews`, {
      userName: userName,
      userScore: userScore,
      userComment: userComment,
      userPicture: userPicture,
    });
    getReviewsFromApi();
  };

  return (
    <div className="overlay-modal">
      <div className="modal-container">
        <div className="modal-container-container modal-title">
          <h1>TU OPINIÓN</h1>
        </div>
        <div className="modal-container-container first-div">
          <p className="container-p-picture">¡Elegí tu mejor foto!</p>
          <label for="upload-photo" className="examine-button modal-button">
            Buscar
          </label>
          <input
            type="file"
            name="photo"
            onChange={(evt) => {
              setImageSelected(evt.target.files[0]);
            }}
            className="modal-button "
            id="upload-photo"
          />

          <button className="modal-button upload-button" onClick={uploadFile}>
            Cargar
          </button>
          <div className="user-profile-container">
            <Image
              cloudName="dpkfb428j"
              publicId={showImage}
              className="user-picture"
            />
          </div>
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
            ¡Dejá tu putaje!
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
        <button className="bott" onClick={jeje}>
          X
        </button>
        <button onClick={addedReview} className="modal-button confirm-button">
          Confirmar
        </button>
      </div>
    </div>
  );
}

export default ModalPack;
