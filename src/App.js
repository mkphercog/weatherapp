import React, { useState } from "react";
import Result from "./pages/Result";
import Settings from "./pages/Settings";
import ErrorPage from "./pages/ErrorPage";
import "./styles/App.scss";

const APIKey = "0d90c0d99506c2d578ef4a5f8468ce4f";

const getLocal = localStorage.getItem("townName")
  ? localStorage.getItem("townName")
  : "";

function App() {
  const [inputContent, setInputContent] = useState(getLocal);
  const [weatherData, setWeatherData] = useState("");
  const [err, setErr] = useState(false);

  const handleChangeInputSettings = e => {
    setInputContent(e.target.value);
  };

  const handleClickBtnSettings = () => {
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${inputContent}&APPID=${APIKey}&units=metric`;

    fetch(API)
      .then(res => {
        if (res.ok) {
          localStorage.setItem("townName", inputContent);
          setErr(false);
          return res.json();
        } else {
          throw Error("COŚ POSZŁO NIE TAK!");
        }
      })
      .then(result => setWeatherData(result))
      .catch(err => {
        console.log(new Error(err.message));
        setErr(true);
      });

    setInputContent("");
  };

  return (
    <div className="app">
      {err ? <ErrorPage /> : <Result data={weatherData} />}
      <Settings
        value={inputContent}
        change={handleChangeInputSettings}
        click={handleClickBtnSettings}
      />
    </div>
  );
}

export default App;

// const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

//Mój klucz APPID
//0d90c0d99506c2d578ef4a5f8468ce4f
//Mój nowy: 7eee9c2a3bb4e9f3e8da0776821d2ca0
