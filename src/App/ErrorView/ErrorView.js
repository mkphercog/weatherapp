import React from "react";
import "./ErrorView.scss";
import { useSelector } from "react-redux";

export const ErrorView = () => {
  const errorMessage = useSelector(state => state.fetchData.errorMessage);

  return (
    <div className="errorPage">
      <h1 className="errorPage__message">{errorMessage}</h1>
    </div>
  );
};
