import React from "react";
import SettingsInput from "../components/SettingsInput";
import "../styles/Settings.scss";

const Settings = ({
  value,
  change,
  click,
  isMainTown,
  check,
  isFavourite,
  checkFav,
  favouriteTowns,
  setMainTownBtn,
  deleteTownFromList,
  checkWeatherHere
}) => {
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
    <div className="settings">
      <h1>Hello from Settings!</h1>
      <SettingsInput value={value} change={change} />
      <button onClick={click}>Sprawdź pogodę</button>

      <input
        type="checkbox"
        name="isMainTown"
        id="isMainTown"
        checked={isMainTown}
        onChange={check}
      />
      <label htmlFor="isMainTown">Ustaw jako główne miasto.</label>

      <input
        type="checkbox"
        name="isFavourite"
        id="isFavourite"
        checked={isFavourite}
        onChange={checkFav}
        disabled={isMainTown}
      />
      <label htmlFor="isFavourite">Dodaj do listy ulubionych miast.</label>
      <ul>{arrOfTowns.reverse()}</ul>
    </div>
  );
};

export default Settings;
