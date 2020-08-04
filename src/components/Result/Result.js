import React from "react";
import "./Result.css";

const result = (props) => {
  return (
    <div id="result-container">
      <h3 id="result-header">Your random number is:</h3>
      <p id="result-number">{props.generatedResult}</p>
    </div>
  );
};

export default result;
