import React from "react";

const SettingsInput = ({ valueInput, changeInput }) => {
  return (
    <input
      type="text"
      value={valueInput}
      onChange={changeInput}
      className="settings__input"
      placeholder="Nazwa miasta..."
    />
  );
};

export default SettingsInput;
