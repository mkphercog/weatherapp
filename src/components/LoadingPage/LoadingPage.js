import React from "react";
import "./LoadingPage.scss";

const LoadingPage = () => {
  return (
    <div className="loadingPage">
      {/* <i className="fas fa-spinner loadingPage__icon"></i> */}
      <i className="fas fa-sync-alt loadingPage__icon"></i>
      <h1 className="loadingPage__message">ŁADOWANIE</h1>
    </div>
  );
};

export default LoadingPage;
