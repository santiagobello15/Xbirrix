import "./App.css";

function ModalPack({ closeModal }) {
  return (
    <>
      <h1>MODALJEJE</h1>
      <button onClick={() => closeModal(false)}>CANCEL</button>{" "}
      {/* como funca es esto? */}
    </>
  );
}

export default ModalPack;
