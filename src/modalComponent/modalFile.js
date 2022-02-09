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
  const containerPPictureSecondDiv = "container-p-picture-second-div";

  return (
    <div className="modal-container">
      <div className={"modal-container-container ".concat(firstDiv)}>
        <p className="container-p-picture">Dejanos tu foto</p>
      </div>
      <div className={"modal-container-container ".concat(secondDiv)}>
        <p className={"container-p-input ".concat(containerPPictureSecondDiv)}>
          ¿Cómo te llamas?
        </p>
        <input
          type="text"
          className={"container-input ".concat(secondDivInput)}
        ></input>
      </div>
      <div className={"modal-container-container ".concat(thirdDiv)}>
        <p className="container-p-input">¿Qué opinás de nosotros?</p>
        <input
          type="text"
          className={"container-input ".concat(thirdDivInput)}
        ></input>
      </div>
      <div className={"modal-container-container ".concat(fourthDiv)}>
        <p className="container-p-input">¿Cuántas estrellas nos dejás?</p>
        <input type="text" className="container-input"></input>
      </div>
      <button className="close-button" onClick={closeModalFunction}>
        X
      </button>
    </div>
  );
}

export default ModalPack;
