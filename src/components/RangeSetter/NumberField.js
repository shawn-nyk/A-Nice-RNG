import React from "react";
import "./NumberField.css";

const onKeyDownHandler = (event) => {
  if (event.keyCode === 69 || event.keyCode === 187 || event.keyCode === 189) {
    event.preventDefault();
  }
};

const numberField = (props) => {
  return (
    <span id="number-field-container">
      <input
        className="number-field"
        type="number"
        onKeyDown={onKeyDownHandler}
      />
      <p className="limit-text">{props.children}</p>
    </span>
  );
};

export default numberField;
