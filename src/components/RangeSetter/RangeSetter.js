import React from "react";
import "./RangeSetter.css";
import NumberField from "./NumberField";

const rangeSetter = (props) => {
  return (
    <div id="range-setter-container">
      <h2>Enter your range:</h2>
      <div id="number-fields-container">
        <NumberField id="lower-limit-number">lower limit</NumberField>
        <p id="dash">-</p>
        <NumberField id="upper-limit-number">upper limit</NumberField>
      </div>
      <button type="button" id="generate-button" onClick={props.onClickHandler}>
        Generate
      </button>
    </div>
  );
};

export default rangeSetter;
