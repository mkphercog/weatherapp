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
      <li key={index}>
        {localStorage.getItem("townName") === town ? (
          <span>GŁÓWNE: </span>
        ) : null}
        <span>{town}</span>
        {localStorage.getItem("townName") === town ? null : (
          <button onClick={() => setMainTownBtn(town)}>
            Ustaw jako główne miasto.
          </button>
        )}
        {localStorage.getItem("townName") === town ? null : (
          <button onClick={() => checkWeatherHere(town)}>
            Sprawdz pogodę w tym mieście.
          </button>
        )}
        <button onClick={() => deleteTownFromList(town)}>X</button>
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
      <h1>Ustawienia</h1>
      <SettingsInput valueInput={valueInput} changeInput={changeInput} />
      <button onClick={clickAddBtn}>Sprawdź pogodę</button>

      <input
        type="checkbox"
        name="isMainTown"
        id="isMainTown"
        checked={isMainTown}
        onChange={checkIsMainTown}
      />
      <label htmlFor="isMainTown">Ustaw jako główne miasto.</label>

      <input
        type="checkbox"
        name="isFavourite"
        id="isFavourite"
        checked={isMainTown ? isMainTown : isFavourite}
        onChange={checkIsFavourite}
        disabled={isMainTown}
      />
      <label htmlFor="isFavourite">Dodaj do listy ulubionych miast.</label>
      {favouriteTowns.length ? (
        <div>
          <ul>{arrOfTowns.reverse()}</ul>
        </div>
      ) : (
        <div>NIC TU NIE MA</div>
      )}
      <button onClick={() => showSettings(false)}>CLOSE</button>
    </div>
  );
};

export default Settings;
