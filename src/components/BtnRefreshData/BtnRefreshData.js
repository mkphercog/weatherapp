import React from "react";

const BtnRefreshData = ({ scrollUp, clickRefreshBtn }) => {
  return (
    <i
      onClick={() => {
        scrollUp();
        clickRefreshBtn();
      }}
      className="fas fa-sync-alt result__refreshIcon"
    ></i>
  );
};

export default BtnRefreshData;
