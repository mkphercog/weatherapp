import React from "react";

const CloseSettings = ({ showSettings }) => {
  return (
    <i
      className="fas fa-times settings__close"
      onClick={() => showSettings(false)}
    ></i>
  );
};

export default CloseSettings;
