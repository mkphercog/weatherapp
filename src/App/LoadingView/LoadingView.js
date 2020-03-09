import React from "react";
import "./LoadingView.scss";

export const LoadingView = () => (
  <div className="loadingView">
    <i className="fas fa-sync-alt loadingView__icon"></i>
    <h1 className="loadingView__message">Ładowanie</h1>
  </div>
);
