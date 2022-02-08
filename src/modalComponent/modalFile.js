import "../App.css";
import "./modalStyle.css";

function ModalPack({ closeModal }) {
  const closeModalFunction = () => {
    closeModal(false);
  };
  return (
    <div className="modal-container">
      <h1>MODALJEJE</h1>
      <button onClick={closeModalFunction}>CANCEL</button>{" "}
      {/* como funca es esto? */}
    </div>
  );
}

export default ModalPack;
