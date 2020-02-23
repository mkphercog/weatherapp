import React from "react";
import "../styles/ErrorPage.scss";

const ErrorPage = ({ errorMessage }) => {
  return (
    <div className="errorPage">
      <h1>{errorMessage}</h1>
    </div>
  );
};

export default ErrorPage;
