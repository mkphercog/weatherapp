import React from "react";

const SettingsInput = ({ valueInput, changeInput, err }) => {
  return (
    <label htmlFor="">
      Nazwa:
      <input type="text" value={valueInput} onChange={changeInput} />
    </label>
  );
};

export default SettingsInput;
