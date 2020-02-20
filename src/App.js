import React, { useState } from "react";
import Result from "./pages/Result";
import Settings from "./pages/Settings";
import "./styles/App.scss";

const APIKey = "0d90c0d99506c2d578ef4a5f8468ce4f";

// const getLocalName = localStorage.getItem("townName")
//   ? localStorage.getItem("townName")
//   : "";

const getLocalData = localStorage.getItem("localData")
  ? JSON.parse(localStorage.getItem("localData"))
  : "";

const getLocalTimeOfData = localStorage.getItem("timeOfData")
  ? localStorage.getItem("timeOfData")
  : "";

function App() {
  const [inputContent, setInputContent] = useState("");
  const [weatherData, setWeatherData] = useState(getLocalData);
  const [isMainTown, setIsMainTown] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [time, setTime] = useState(getLocalTimeOfData);

  const handleChangeInputSettings = e => {
    setInputContent(e.target.value);
  };

  const handleChangeCheckBox = () => {
    setIsMainTown(!isMainTown);
  };

  const handleChangeCheckBoxFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  const handleClickBtnSettings = () => {
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${inputContent}&APPID=${APIKey}&units=metric`;

    const dateClick = new Date().toLocaleDateString();
    const timeClick = new Date().toLocaleTimeString();

    fetch(API)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          setInputContent("Nie ma takiego miasta");
          throw Error("Nie ma takiego miasta!");
        }
      })
      .then(result => {
        if (isMainTown) {
          localStorage.setItem("townName", inputContent);
          localStorage.setItem("localData", JSON.stringify(result));
          localStorage.setItem("timeOfData", `${dateClick} ${timeClick}`);
          setTime(localStorage.getItem("timeOfData"));
        }
        setWeatherData(result);
      })
      .catch(err => {
        console.log(new Error(err.message));
      });

    setInputContent("");
  };

  const handleClickBtnRefresh = () => {
    const localNameOfTown = localStorage.getItem("townName");
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${localNameOfTown}&APPID=${APIKey}&units=metric`;

    const dateClick = new Date().toLocaleDateString();
    const timeClick = new Date().toLocaleTimeString();

    fetch(API)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("COŚ POSZŁO NIE TAK!");
        }
      })
      .then(result => {
        localStorage.setItem("localData", JSON.stringify(result));
        setWeatherData(result);
      })
      .catch(err => {
        console.log(new Error(err.message));
      });
    localStorage.setItem("timeOfData", `${dateClick} ${timeClick}`);
    setTime(localStorage.getItem("timeOfData"));
  };

  return (
    <div className="app">
      <Result data={weatherData} click={handleClickBtnRefresh} time={time} />

      <Settings
        value={inputContent}
        change={handleChangeInputSettings}
        click={handleClickBtnSettings}
        isMainTown={isMainTown}
        check={handleChangeCheckBox}
        isFavourite={isFavourite}
        checkFav={handleChangeCheckBoxFavourite}
      />
    </div>
  );
}

export default App;

// const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

//Mój klucz APPID
//0d90c0d99506c2d578ef4a5f8468ce4f
//Mój nowy: 7eee9c2a3bb4e9f3e8da0776821d2ca0
