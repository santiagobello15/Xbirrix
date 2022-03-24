import "../App.css";
import "./modalStyle.css";
import React, { useState } from "react";
import Axios from "axios";
import { Image } from "cloudinary-react";
import cameraimage from "./media/camera-icon.png";

function ModalPack({ closeModal, getReviewsFromApi }) {
  const [publicId, setPublicId] = useState("");
  const [userName, setUserName] = useState("John Doe");
  const [userScore, setUserScore] = useState(5);
  const [userComment, setUserComment] = useState("Me gustó el sitio");
  const [userPicture, setUserPicture] = useState();
  const [showImage, setShowImage] = useState(
    "https://res.cloudinary.com/dpkfb428j/image/upload/v1648084106/vboavlebkx3xhghqtgt0.jpg"
  );
  const [imageLoading, setImageLoading] = useState(false);
  const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT;
  const API_URL =
    ENVIRONMENT === "local"
      ? "http://localhost:3001/api"
      : "https://xbirrix-server.onrender.com/api";

  const uploadFile = async (evt) => {
    const formData = new FormData();
    formData.append("file", evt.target.files[0]);
    formData.append("upload_preset", "zsffzfbc");
    setImageLoading(true);
    setShowImage(false);
    await Axios.post(
      "https://api.cloudinary.com/v1_1/dpkfb428j/image/upload",
      formData
    ).then((response) => {
      setShowImage(response.data.secure_url);
      setUserPicture(response.data.secure_url);
      setPublicId(response.data.public_id);
    });
    setImageLoading(false);
  };

  const checkIfUploadandExit = () => {
    if (typeof userPicture !== "undefined") {
      addToDeleteDb();
    } else {
      console.log("Error");
    }
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
  const addToDeleteDb = () => {
    Axios.post(`${API_URL}/delete`, {
      urlToDelete: publicId,
    });
  };

  const checkBeforeClose = () => {
    checkIfUploadandExit();
    closeModal();
  };

  return (
    <div className="overlay-modal">
      <div className="modal-container">
        <div className="modal-container-container modal-title">
          <h1>TU OPINIÓN</h1>
        </div>
        <div className="modal-container-container first-div">
          <p className="container-p-picture">¡Elegí una foto!</p>

          <input
            type="file"
            name="photo"
            onChange={uploadFile}
            className="modal-button "
            id="upload-photo"
          />

          <div className="user-profile-container">
            <div className="user-picture-container-inner-div">
              {showImage ? (
                <Image
                  cloudName="dpkfb428j"
                  publicId={showImage}
                  className="user-picture"
                />
              ) : (
                ""
              )}
            </div>
            {imageLoading ? (
              <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
              </div>
            ) : (
              ""
            )}
            <label for="upload-photo">
              <div className="upload-image-icon">
                <img src={cameraimage} className="camera-icon-img"></img>
              </div>
            </label>
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

        <button className="close-button" onClick={checkBeforeClose}>
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
