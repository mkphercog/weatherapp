import React from "react";
// import ResultData from "../components/ResultData";
import "../styles/Result.scss";

const Result = ({ weatherData, clickRefreshBtn, time, err }) => {
  return (
    <div className="result">
      <h1>Hello from Result!</h1>
      <p>
        {!err && weatherData ? weatherData.name : "Brak przypisanego miasta"}
      </p>
      <p>
        {!err && weatherData ? weatherData.main.temp.toFixed() : "Brak danych"}
      </p>
      {!err && weatherData ? (
        <p>Data ostatniej aktualizacji: {time}</p>
      ) : (
        <p>Brak danych</p>
      )}
      <button onClick={clickRefreshBtn}>Refresh data</button>
      {/* <ResultData /> */}
    </div>
  );
};

export default Result;
