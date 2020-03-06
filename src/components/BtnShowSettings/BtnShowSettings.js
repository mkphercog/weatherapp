import React from "react";

const BtnShowSettings = ({ scrollUp, showSettings }) => {
  return (
    <i
      onClick={() => {
        scrollUp();
        showSettings(true);
      }}
      className="fas fa-cogs result__settingsIcon"
    ></i>
  );
};

export default BtnShowSettings;
