import React from "react";
import "./LoadingView.scss";

export const LoadingView = () => {
  return (
    <div className="loadingPage">
      <i className="fas fa-sync-alt loadingPage__icon"></i>
      <h1 className="loadingPage__message">Ładowanie</h1>
    </div>
  );
};
