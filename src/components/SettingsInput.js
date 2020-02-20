import React from "react";

const SettingsInput = ({ value, change }) => {
  return (
    <label htmlFor="">
      Nazwa:
      <input type="text" value={value} onChange={change} />
    </label>
  );
};

export default SettingsInput;
