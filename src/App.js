import React, { useState } from "react";
import Result from "./pages/Result";
import Settings from "./pages/Settings";
// import ErrorPage from "./pages/Result";
import "./styles/App.scss";

function App() {
  const [inputContent, setInputContent] = useState("");

  const onChange = e => {
    setInputContent(e.target.value);
  };

  return (
    <div className="app">
      <Result />
      <Settings value={inputContent} change={onChange} />
      {/* <ErrorPage /> */}
    </div>
  );
}

export default App;
