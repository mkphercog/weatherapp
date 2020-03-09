import React from "react";
import "./LoadingPage.scss";

const LoadingPage = () => {
  return (
    <div className="loadingPage">
      <i className="fas fa-sync-alt loadingPage__icon"></i>
      <h1 className="loadingPage__message">Ładowanie</h1>
    </div>
  );
};

export default LoadingPage;
