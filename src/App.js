import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import RangeSetter from "./components/RangeSetter/RangeSetter";
import Result from "./components/Result/Result";

function App() {
  const [result, setResult] = useState();

  const onClickHandler = () => {
    const lowerLimit = parseInt(
      document.getElementById("lower-limit-number").value
    );
    const upperLimit = parseInt(
      document.getElementById("upper-limit-number").value
    );
    const range = upperLimit - lowerLimit;
    setResult(Math.round(Math.random() * range) + lowerLimit);
  };

  return (
    <div className="App">
      <Header />
      <RangeSetter onClickHandler={onClickHandler} />
      <Result generatedResult={result} />
    </div>
  );
}

export default App;
