import React, { useState } from "react";
import SettingsInput from "../components/SettingsInput";
import "../styles/Settings.scss";

const Settings = ({
  valueInput,
  changeInput,
  clickAddBtn,
  isMainTown,
  checkIsMainTown,
  isFavourite,
  checkIsFavourite,
  favouriteTowns,
  setMainTownBtn,
  deleteTownFromList,
  checkWeatherHere,
  settingsVisible,
  showSettings
}) => {
  const [visible, setVisible] = useState(0);
  const animationSpeed = 10;

  const fun = num => {
    setVisible(visible + num);
  };

  if (settingsVisible && visible < 100) {
    setTimeout(() => fun(5), animationSpeed);
  }

  if (!settingsVisible && visible > 0) {
    setTimeout(() => fun(-5), animationSpeed);
  }

  let arrOfTowns = [];

  if (favouriteTowns) {
    arrOfTowns = favouriteTowns.map((town, index) => (
      <li className="settings__listItem" key={index}>
        <div className="settings__wrapperIconName">
          {localStorage.getItem("townName") === town ? (
            <i className="fas fa-home settings__homeIcon"></i>
          ) : (
            <i className="fas fa-home settings__homeIcon settings__homeIcon--disabled"></i>
          )}
          <span className="settings__townName">{town}</span>
          <i
            onClick={() => deleteTownFromList(town)}
            className="fas fa-trash-alt settings__trashIcon"
          ></i>
        </div>
        <div className="settings__wrapperBtn">
          {localStorage.getItem("townName") === town ? null : (
            <button
              className="settings__btn"
              onClick={() => setMainTownBtn(town)}
            >
              Główne miasto
            </button>
          )}
          <button
            className="settings__btn"
            onClick={() => checkWeatherHere(town)}
          >
            Sprawdź pogodę
          </button>
        </div>
      </li>
    ));
  }

  return (
    <div
      className="settings"
      style={{
        display: `${visible !== 0 ? "block" : "none"}`,
        opacity: `${visible}%`
      }}
    >
      <div className="settings__wrapper">
        <h1 className="settings__title">Ustawienia</h1>

        <div className="settings__wrapperAddTown">
          <SettingsInput valueInput={valueInput} changeInput={changeInput} />
          <button className="settings__btn" onClick={clickAddBtn}>
            Sprawdź pogodę
          </button>
          <label className="settings__checkLabel" htmlFor="isMainTown">
            <input
              type="checkbox"
              name="isMainTown"
              id="isMainTown"
              className="settings__check"
              checked={isMainTown}
              onChange={checkIsMainTown}
            />
            Ustaw jako główne miasto.
          </label>

          <label className="settings__checkLabel" htmlFor="isFavourite">
            <input
              type="checkbox"
              name="isFavourite"
              id="isFavourite"
              className="settings__check"
              checked={isMainTown ? isMainTown : isFavourite}
              onChange={checkIsFavourite}
              disabled={isMainTown}
            />
            Dodaj do listy ulubionych miast.
          </label>
        </div>

        {favouriteTowns.length ? (
          <div className="settings__wrapperFavouriteList">
            <h3 className="settings__favouriteTitle">Lista ulubionych miast</h3>
            <ul className="settings__favouriteList">{arrOfTowns.reverse()}</ul>
          </div>
        ) : (
          <div className="settings__wrapperFavouriteList">
            <h3 className="settings__favouriteTitle">Lista ulubionych miast</h3>
            <ul className="settings__favouriteList">
              <li className="settings__listItem">Brak danych.</li>
            </ul>
          </div>
        )}
        <i
          className="fas fa-times settings__close"
          onClick={() => showSettings(false)}
        ></i>
        <p className="settings__author">Projekt i realizacja: Marcin Hercog</p>
      </div>
    </div>
  );
};

export default Settings;
