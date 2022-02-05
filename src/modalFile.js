import React, { useState } from "react";
import "./App.css";

function ModalPack() {
  const [show, setShow] = useState(false);

  const buttonShow = () => {
    setShow(true);
  };
  const buttonHide = () => {
    setShow(false);
  };
  return (
    <>
      <button className="reviews-input-btn" show={show} onHide={buttonHide}>
        <a>DEJÁ TU OPINIÓN</a>
      </button>
    </>
  );
}

export default ModalPack;
