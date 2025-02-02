import React from "react";
import "./AddButton.scss";

function AddButton({ image, alt, classname, onClick }) {
  return (
    <>
      <button type="submit" className={classname} onClick={onClick}>
        <img src={image} alt={alt} />
      </button>
    </>
  );
}

export default AddButton;
