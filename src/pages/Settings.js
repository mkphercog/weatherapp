import React from "react";
import SettingsInput from "../components/SettingsInput";
import "../styles/Settings.scss";

const Settings = ({ value, change }) => {
  return (
    <div className="settings">
      <h1>Hello from Settings!</h1>
      <SettingsInput value={value} change={change} />
      <button>Sprawdź pogodę</button>
    </div>
  );
};

export default Settings;
