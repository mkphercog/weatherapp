import React, { useState } from "react";
import Result from "./pages/Result";
import Settings from "./pages/Settings";
import ErrorPage from "./pages/ErrorPage";
import "./styles/App.scss";

// WEBSITE: `http://api.openweathermap.org/data/2.5/weather?q=${town_here}&APPID=${APIKey}&units=metric`;
const APIKey = "0d90c0d99506c2d578ef4a5f8468ce4f";
//My key: 0d90c0d99506c2d578ef4a5f8468ce4f
//My other key: 7eee9c2a3bb4e9f3e8da0776821d2ca0

// LOCALSTORAGE WHEN REFRESH WEB OR FIRST VISIT--
const getLocalData = localStorage.getItem("localData")
  ? JSON.parse(localStorage.getItem("localData"))
  : "";

const getLocalTimeOfData = localStorage.getItem("timeOfData")
  ? localStorage.getItem("timeOfData")
  : "";

const getLocalListOfTowns = localStorage.getItem("favouriteTownsList")
  ? JSON.parse(localStorage.getItem("favouriteTownsList"))
  : [];
//--

function App() {
  //HOOKS HERE
  const [inputContent, setInputContent] = useState("");
  const [weatherData, setWeatherData] = useState(getLocalData);
  const [isMainTown, setIsMainTown] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [time, setTime] = useState(getLocalTimeOfData);
  const [listOfFavouriteTowns, setListOfFavouriteTowns] = useState(
    getLocalListOfTowns
  );
  const [err, setErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // --

  //GET TIME
  const getDate = () => {
    const dateClick = new Date().toLocaleDateString();
    const timeClick = new Date().toLocaleTimeString();
    return `${dateClick}, ${timeClick}`;
  };
  // --

  //ONE FETCH FUNCTION
  const getDataAPI = (townName = inputContent) => {
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${townName}&APPID=${APIKey}&units=metric`;
    const time = getDate();

    fetch(API)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw res.status;
        }
      })
      .then(result => {
        if (townName === inputContent) {
          if (isFavourite || isMainTown) {
            const checkDoubleName = listOfFavouriteTowns.findIndex(
              town => town === townName
            );
            if (checkDoubleName === -1) {
              let newArr = listOfFavouriteTowns;
              newArr.push(townName);

              localStorage.setItem(
                "favouriteTownsList",
                JSON.stringify(newArr)
              );
              setListOfFavouriteTowns(newArr);

              if (isMainTown) {
                localStorage.setItem("townName", townName);
                localStorage.setItem("localData", JSON.stringify(result));
              }
            } else {
              alert("Miasto jest już zapisane!");
              //coś do powiadomienia urzytkownika o tym samym miescie na liscie
            }
          }
        }

        if (townName === localStorage.getItem("townName")) {
          localStorage.setItem("localData", JSON.stringify(result));
          localStorage.setItem("timeOfData", time);
          setTime(localStorage.getItem("timeOfData"));
        } else {
          setTime(time);
        }

        setWeatherData(result);
        setErr(false);
      })
      .catch(err => {
        console.log(new Error(err));
        setErr(true);
        if (localStorage.getItem("townName")) {
          setErrorMessage("Błąd 404! Nazwa miasta błędna!");
        } else {
          setErrorMessage("Brak przypisanego miasta głównego!");
        }
        setTimeout(() => setErr(false), 2000);
      });
  };
  // --

  const handleClickAddTown = () => {
    if (inputContent === "") {
      setErr(true);
      setErrorMessage("Wpisz nazwę miasta!");
      setTimeout(() => setErr(false), 2000);
    } else {
      getDataAPI();
      setInputContent("");
      setIsFavourite(false);
      setIsMainTown(false);
    }
  };

  const handleClickBtnRefresh = () => {
    getDataAPI(localStorage.getItem("townName"));
  };

  const setMainTownBtn = town => {
    localStorage.setItem("townName", town);
    getDataAPI(localStorage.getItem("townName"));
  };

  const checkWeatherHere = town => {
    getDataAPI(town);
  };

  const handleChangeInputSettings = e => {
    setInputContent(e.target.value);
  };

  const handleChangeIsMainTown = () => {
    setIsMainTown(!isMainTown);
  };

  const handleChangeIsFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  const deleteTownFromList = town => {
    const arr = listOfFavouriteTowns.filter(item => item !== town);
    setListOfFavouriteTowns(arr);
    if (town === localStorage.getItem("townName")) {
      localStorage.clear();
    }
    localStorage.setItem("favouriteTownsList", JSON.stringify(arr));
  };

  return (
    <div className="app">
      <Result
        weatherData={weatherData}
        clickRefreshBtn={handleClickBtnRefresh}
        time={time}
      />

      <Settings
        valueInput={inputContent}
        changeInput={handleChangeInputSettings}
        clickAddBtn={handleClickAddTown}
        isMainTown={isMainTown}
        checkIsMainTown={handleChangeIsMainTown}
        isFavourite={isFavourite}
        checkIsFavourite={handleChangeIsFavourite}
        favouriteTowns={listOfFavouriteTowns}
        setMainTownBtn={setMainTownBtn}
        deleteTownFromList={deleteTownFromList}
        checkWeatherHere={checkWeatherHere}
      />

      {err ? <ErrorPage errorMessage={errorMessage} /> : null}
    </div>
  );
}

export default App;
