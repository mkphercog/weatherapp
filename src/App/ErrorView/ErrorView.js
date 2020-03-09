import React from "react";
import { useSelector } from "react-redux";
import "./ErrorView.scss";

export const ErrorView = () => {
  const errorMessage = useSelector(state => state.fetchData.errorMessage);

  return (
    <div className="errorView">
      <h1 className="errorView__message">{errorMessage}</h1>
    </div>
  );
};
