import React from "react";
import SettingsInput from "../components/SettingsInput";
import "../styles/Settings.scss";

const Settings = ({
  value,
  change,
  click,
  isMainTown,
  check,
  isFarourite,
  checkFav
}) => {
  return (
    <div className="settings">
      <h1>Hello from Settings!</h1>
      <SettingsInput value={value} change={change} />
      <button onClick={click}>Sprawdź pogodę</button>

      <input
        type="checkbox"
        name="localStorage"
        id="localStorage"
        checked={isMainTown}
        onChange={check}
      />
      <label htmlFor="localStorage">Ustaw jako główne miasto.</label>

      <input
        type="checkbox"
        name="favouriteTown"
        id="favouriteTown"
        checked={isFarourite}
        onChange={checkFav}
      />
      <label htmlFor="favouriteTown">Dodaj do listy ulubionych miast.</label>
    </div>
  );
};

export default Settings;
