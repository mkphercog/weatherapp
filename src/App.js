import React from "react";
import Result from "./pages/Result";
import Settings from "./pages/Settings";
import ErrorPage from "./pages/Result";
import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <Result />
      <Settings />
      <ErrorPage />
    </div>
  );
}

export default App;
