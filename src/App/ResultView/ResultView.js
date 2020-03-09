import React from "react";
import { useSelector } from "react-redux";
import { BtnRefreshData } from "./BtnRefreshData/BtnRefreshData";
import { BtnShowSettings } from "./BtnShowSettings/BtnShowSettings";
import greenVillage from "../../images/greenVillage.jpg";
import rain from "../../images/rain.jpg";
import summer from "../../images/summer.jpg";
import thunder from "../../images/thunder.jpg";
import winter from "../../images/winter.jpg";
import "./ResultView.scss";

export const ResultView = () => {
  const dateOfData = useSelector(state => state.fetchData.dateOfData);
  const dataOfTown = useSelector(state => state.fetchData.townData);
  const mainTown = useSelector(state => state.townList.mainTown);

  const { main, name, weather, wind, sys } = dataOfTown;
  const { temp, feels_like, temp_min, temp_max, pressure, humidity } = main;
  const { sunrise, sunset } = sys;
  const weatherData = weather[0];
  const windKmH = (wind.speed * 3.6).toFixed(2);
  const sunUp = new Date((sunrise + 3600) * 1000).toUTCString().slice(-12, -4);
  const sunDown = new Date((sunset + 3600) * 1000).toUTCString().slice(-12, -4);

  const tempShow = temp < 0 && temp >= -0.49 ? 0 : temp.toFixed();
  const feelsLikeShow =
    feels_like < 0 && feels_like >= -0.49 ? 0 : feels_like.toFixed();
  const minTempShow =
    temp_min < 0 && temp_min >= -0.49 ? 0 : temp_min.toFixed();
  const maxTempShow =
    temp_max < 0 && temp_max >= -0.49 ? 0 : temp_max.toFixed();

  let photoResult = greenVillage;

  if (tempShow <= 0 || weatherData.icon.includes("13")) {
    photoResult = winter;
  } else if (tempShow > 0 && tempShow <= 20) {
    photoResult = greenVillage;
  } else if (tempShow > 20) {
    photoResult = summer;
  }

  if (weatherData.icon.includes("09") || weatherData.icon.includes("10")) {
    photoResult = rain;
  }

  if (weatherData.icon.includes("11")) {
    photoResult = thunder;
  }

  return (
    <div
      className="resultView"
      style={{
        backgroundImage: `url("${photoResult}")`
      }}
    >
      {/*ID just for scrollUp function*/}
      <div className="resultView__wrapper" id="resultView__wrapper">
        <h1 className="resultView__townName">{name}</h1>

        <div className="resultView__wrapperTemp">
          <h2 className="resultView__temp">{tempShow}°C</h2>
          <p className="resultView__maxMinTemp">{`${maxTempShow}°C / ${minTempShow}°C`}</p>
        </div>

        <img
          className="resultView__weatherIcon"
          src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          alt="Weather icon."
        />

        <div className="resultView__wrapperInfo">
          <p className="resultView__infoText">
            Opis:{" "}
            <span className="resultView__info">{weatherData.description}</span>
          </p>
          <p className="resultView__infoText">
            Odczuwalna:{" "}
            <span className="resultView__info">{feelsLikeShow}°C</span>
          </p>
          <p className="resultView__infoText">
            Ciśnienie: <span className="resultView__info">{pressure} pHa</span>
          </p>
          <p className="resultView__infoText">
            Wilgotność: <span className="resultView__info">{humidity}%</span>
          </p>
          <p className="resultView__infoText">
            Prędkość wiatru:{" "}
            <span className="resultView__info">{windKmH} km/h</span>
          </p>
          <p className="resultView__infoText">
            Wschód słońca: <span className="resultView__info">{sunUp}</span>
          </p>
          <p className="resultView__infoText">
            Zachód słońca: <span className="resultView__info">{sunDown}</span>
          </p>
        </div>

        <div className="resultView__wrapperIcons">
          <BtnRefreshData />
          <BtnShowSettings />
        </div>

        <p className="resultView__dateOfRefresh">
          Dane z: {dateOfData ? dateOfData : "Brak danych"}
        </p>
        <p className="resultView__mainTown">
          Główne miasto:{" "}
          <span className="resultView__info">
            {mainTown ? mainTown : "Brak danych"}
          </span>
        </p>
      </div>
    </div>
  );
};
