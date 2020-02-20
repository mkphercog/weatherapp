import React from "react";
// import ResultData from "../components/ResultData";
import "../styles/Result.scss";

const Result = ({ data, click, time }) => {
  return (
    <div className="result">
      <h1>Hello from Result!</h1>
      <p>{data ? data.name : ""}</p>
      <p>{data ? data.main.temp.toFixed() : ""}</p>
      <p>Data ostatniej aktualizacji: {time}</p>
      <button onClick={click}>Refresh data</button>
      {/* <ResultData /> */}
    </div>
  );
};

export default Result;
