import "../App.css";
import "./modalStyle.css";

function ModalPack({ closeModal }) {
  const closeModalFunction = () => {
    closeModal(false);
  };

  const firstDiv = "first-div";
  const secondDiv = "second-div";
  const thirdDiv = "third-div";
  const fourthDiv = "fourth-div";
  const secondDivInput = "second-div-input";
  const thirdDivInput = "third-div-input";
  const fourthDivInput = "fourth-div-input";
  const containerPInputSecondDiv = "container-p-picture-second-div";
  const containerPInputFourthDiv = "container-p-picture-fourth-div";
  const modalTitle = "modal-title";

  return (
    <div className="overlay-modal">
      <div className="modal-container">
        <div className={"modal-container-container ".concat(modalTitle)}>
          <h1>TU OPINIÓN</h1>
        </div>
        <div className={"modal-container-container ".concat(firstDiv)}>
          <p className="container-p-picture">Foto tuya</p>
        </div>
        <div className={"modal-container-container ".concat(secondDiv)}>
          <p className={"container-p-input ".concat(containerPInputSecondDiv)}>
            ¿Cómo te llamas?
          </p>
          <input
            type="text"
            className={"container-input ".concat(secondDivInput)}
            placeholder="Nombre y Apellido"
          ></input>
        </div>
        <div className={"modal-container-container ".concat(thirdDiv)}>
          <p className="container-p-input">¿Qué opinás de nosotros?</p>
          <input
            type="text"
            className={"container-input ".concat(thirdDivInput)}
            placeholder="Redactá tu opinión"
          ></input>
        </div>
        <div className={"modal-container-container ".concat(fourthDiv)}>
          <p className={"container-p-input ".concat(containerPInputFourthDiv)}>
            Dejá tu putaje
          </p>
          <input
            type="text"
            className={"container-input ".concat(fourthDivInput)}
            placeholder="1-5"
          ></input>
        </div>
        <button className="close-button" onClick={closeModalFunction}>
          X
        </button>
        <button className="confirm-button">Confirmar</button>
      </div>
    </div>
  );
}

export default ModalPack;
