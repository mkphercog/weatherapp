import React from "react";
// import ResultData from "../components/ResultData";
import "../styles/Result.scss";

const Result = ({ weatherData, clickRefreshBtn, time, showSettings }) => {
  const { main, name, weather, wind, sys } = weatherData;

  const { temp, feels_like, temp_min, temp_max, pressure, humidity } = main;

  const { sunrise, sunset, country } = sys;

  const sunUp = new Date((sunrise + 3600) * 1000);
  const sunDown = new Date((sunset + 3600) * 1000);

  const sunUpText = sunUp.toUTCString();
  const sunDownText = sunDown.toUTCString();

  const tempShow = temp < 0 && temp >= -0.49 ? 0 : temp.toFixed();
  const feelsLikeShow =
    feels_like < 0 && feels_like >= -0.49 ? 0 : feels_like.toFixed();
  const minTempShow =
    temp_min < 0 && temp_min >= -0.49 ? 0 : temp_min.toFixed();
  const maxTempShow =
    temp_max < 0 && temp_max >= -0.49 ? 0 : temp_max.toFixed();

  return (
    <div className="result">
      <div className="result__wrapper">
        <h1 className="result__title">Pogoda</h1>
        <h2>
          {name}
          <span>({country})</span>
        </h2>

        <h1>{tempShow}°C</h1>
        <p>{`${maxTempShow}°C / ${minTempShow}°C`}</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="Weather icon."
        />
        <p>Opis: {weather[0].description}</p>

        <p>Temperatura odczuwalna: {feelsLikeShow}°C</p>
        <p>Ciśnienie: {pressure} pHa</p>
        <p>Wilgotność: {humidity}%</p>
        <p>Prędkość wiatru: {wind.speed} m/s</p>
        <p>Wschód słońca: {sunUpText.slice(-12, -4)}</p>
        <p>Zachód słońca: {sunDownText.slice(-12, -4)}</p>

        <p>Data ostatniej aktualizacji: {time ? time : "Brak danych"}</p>
        <button onClick={clickRefreshBtn}>Refresh data</button>
        {/* <ResultData /> */}
      </div>
      <button onClick={() => showSettings(true)}>Settings</button>
    </div>
  );
};

export default Result;
