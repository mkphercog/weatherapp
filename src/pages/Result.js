import React from "react";
// import ResultData from "../components/ResultData";
import "../styles/Result.scss";

const Result = ({ weatherData, clickRefreshBtn, time, showSettings }) => {
  const { main, name, weather, wind, sys } = weatherData;

  const { temp, feels_like, temp_min, temp_max, pressure, humidity } = main;

  const { sunrise, sunset } = sys;

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
        <h1 className="result__townName">{name}</h1>

        <div className="result__wrapperTemp">
          <h2 className="result__temp">{tempShow}°C</h2>
          <p className="result__maxMinTemp">{`${maxTempShow}°C / ${minTempShow}°C`}</p>
        </div>

        <img
          className="result__weatherIcon"
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="Weather icon."
        />

        <div className="result__wrapperInfo">
          <p className="result__infoText">
            Opis: <span className="result__info">{weather[0].description}</span>
          </p>
          <p className="result__infoText">
            Odczuwalna: <span className="result__info">{feelsLikeShow}°C</span>
          </p>
          <p className="result__infoText">
            Ciśnienie: <span className="result__info">{pressure} pHa</span>
          </p>
          <p className="result__infoText">
            Wilgotność: <span className="result__info">{humidity}%</span>
          </p>
          <p className="result__infoText">
            Prędkość wiatru:{" "}
            <span className="result__info">{wind.speed} m/s</span>
          </p>
          <p className="result__infoText">
            Wschód słońca:{" "}
            <span className="result__info">{sunUpText.slice(-12, -4)}</span>
          </p>
          <p className="result__infoText">
            Zachód słońca:{" "}
            <span className="result__info">{sunDownText.slice(-12, -4)}</span>
          </p>
        </div>

        <div className="result__wrapperIcons">
          <i
            onClick={clickRefreshBtn}
            className="fas fa-sync-alt result__refreshIcon"
          ></i>
          <i
            onClick={() => showSettings(true)}
            className="fas fa-cogs result__settingsIcon"
          ></i>
        </div>

        <p className="result__dateOfRefresh">
          Dane z: {time ? time : "Brak danych"}
        </p>
      </div>
    </div>
  );
};

export default Result;
