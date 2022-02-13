import "../App.css";
import "./modalStyle.css";

function ModalPack({ closeModal }) {
  const closeModalFunction = () => {
    closeModal(false);
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
          ></input>
        </div>
        <div className="modal-container-container third-div">
          <p className="container-p-input">¿Qué opinás de nosotros?</p>
          <input
            type="text"
            className="container-input third-div-input"
            placeholder="Redactá tu opinión"
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
