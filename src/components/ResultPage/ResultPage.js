import React from "react";
import { useSelector } from "react-redux";

import BtnRefreshData from "../BtnRefreshData/BtnRefreshData";
import BtnShowSettings from "../BtnShowSettings/BtnShowSettings";
import greenVillage from "../../images/greenVillage.jpg";
import rain from "../../images/rain.jpg";
import summer from "../../images/summer.jpg";
import thunder from "../../images/thunder.jpg";
import winter from "../../images/winter.jpg";
import "./ResultPage.scss";

const scrollUp = () => {
  if (document.getElementById("result__wrapper").scrollTop > 0) {
    document.getElementById("result__wrapper").scrollTop -= 5;
    setTimeout(scrollUp, 5);
  }
};

export const Result = ({ clickRefreshBtn, showSettings }) => {
  const dateOfData = useSelector(state => state.fetchData.dateOfData);
  const dataOfTown = useSelector(state => state.fetchData.townData);
  const mainTown = useSelector(state => state.townList.mainTown);

  const { main, name, weather, wind, sys } = dataOfTown;
  const { temp, feels_like, temp_min, temp_max, pressure, humidity } = main;
  const { sunrise, sunset } = sys;

  const sunUp = new Date((sunrise + 3600) * 1000);
  const sunDown = new Date((sunset + 3600) * 1000);
  const sunUpText = sunUp.toUTCString();
  const sunDownText = sunDown.toUTCString();

  const windKmH = wind.speed * 3.6;

  const tempShow = temp < 0 && temp >= -0.49 ? 0 : temp.toFixed();
  const feelsLikeShow =
    feels_like < 0 && feels_like >= -0.49 ? 0 : feels_like.toFixed();
  const minTempShow =
    temp_min < 0 && temp_min >= -0.49 ? 0 : temp_min.toFixed();
  const maxTempShow =
    temp_max < 0 && temp_max >= -0.49 ? 0 : temp_max.toFixed();

  let photoResult = greenVillage;

  if (tempShow <= 0 || weather[0].icon.includes("13")) {
    photoResult = winter;
  } else if (tempShow > 0 && tempShow <= 20) {
    photoResult = greenVillage;
  } else if (tempShow > 20) {
    photoResult = summer;
  }

  if (weather[0].icon.includes("09") || weather[0].icon.includes("10")) {
    photoResult = rain;
  }
  if (weather[0].icon.includes("11")) {
    photoResult = thunder;
  }

  return (
    <div
      className="result"
      style={{
        backgroundImage: `url("${photoResult}")`
      }}
    >
      <div className="result__wrapper" id="result__wrapper">
        <h1 className="result__townName">{name}</h1>

        <div className="result__wrapperTemp">
          <h2 className="result__temp">{tempShow}°C</h2>
          <p className="result__maxMinTemp">{`${maxTempShow}°C / ${minTempShow}°C`}</p>
        </div>

        <img
          className="result__weatherIcon"
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
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
            <span className="result__info">{windKmH.toFixed(2)} km/h</span>
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
          <BtnRefreshData
            scrollUp={scrollUp}
            clickRefreshBtn={clickRefreshBtn}
          />
          <BtnShowSettings scrollUp={scrollUp} showSettings={showSettings} />
        </div>
        <p className="result__dateOfRefresh">
          Dane z: {dateOfData ? dateOfData : "Brak danych"}
        </p>
        <p className="result__mainTown">
          Główne miasto:{" "}
          <span className="result__info">
            {mainTown ? mainTown : "Brak danych"}
          </span>
        </p>
      </div>
    </div>
  );
};
