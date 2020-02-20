import React from "react";
import ResultData from "../components/ResultData";
import "../styles/Result.scss";

const Result = ({ data }) => {
  return (
    <div className="result">
      <h1>Hello from Result!</h1>
      <p>{data ? data.name : ""}</p>
      <p>{data ? data.main.temp : ""}</p>
      <ResultData />
    </div>
  );
};

export default Result;
