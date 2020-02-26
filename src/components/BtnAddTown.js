import React from "react";

const BtnAddTown = ({ clickAddBtn }) => {
  return (
    <button className="settings__btn" onClick={clickAddBtn}>
      Sprawdź pogodę
    </button>
  );
};

export default BtnAddTown;
