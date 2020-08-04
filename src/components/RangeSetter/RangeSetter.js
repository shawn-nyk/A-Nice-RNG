import React from "react";
import "./RangeSetter.css";
import NumberField from "./NumberField";

const rangeSetter = () => {
  return (
    <div id="range-setter-container">
      <h2>Enter your range:</h2>
      <div id="number-fields-container">
        <NumberField>lower limit</NumberField>
        <NumberField>upper limit</NumberField>
      </div>
    </div>
  );
};

export default rangeSetter;
