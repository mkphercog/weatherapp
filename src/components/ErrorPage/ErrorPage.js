import React from "react";
import "./ErrorPage.scss";
import { useSelector } from "react-redux";

const ErrorPage = () => {
  const errorMessage = useSelector(state => state.fetchData.errorMessage);

  return (
    <div className="errorPage">
      <h1 className="errorPage__message">{errorMessage}</h1>
    </div>
  );
};

export default ErrorPage;
