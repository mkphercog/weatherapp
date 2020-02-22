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

const getLocalListOfTowns = localStorage.getItem("favouriteTownsList")
  ? JSON.parse(localStorage.getItem("favouriteTownsList"))
  : [];

function App() {
  const [inputContent, setInputContent] = useState("");
  const [weatherData, setWeatherData] = useState(getLocalData);
  const [isMainTown, setIsMainTown] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [time, setTime] = useState(getLocalTimeOfData);
  const [listOfFavouriteTowns, setListOfFavouriteTowns] = useState(
    getLocalListOfTowns
  );

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

    if (inputContent === "") {
      alert("Pusty!");
    } else {
      fetch(API)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            // setInputContent("Nie ma takiego miasta");
            // throw Error("Nie ma takiego miasta!");
            throw res.status;
          }
        })
        .then(result => {
          if (isMainTown) {
            localStorage.setItem("townName", inputContent);
            localStorage.setItem("localData", JSON.stringify(result));
            localStorage.setItem("timeOfData", `${dateClick} ${timeClick}`);
            setTime(localStorage.getItem("timeOfData"));
            if (!isFavourite) {
              const checkDoubleName = listOfFavouriteTowns.findIndex(
                town => town === inputContent
              );
              if (checkDoubleName === -1) {
                const newOne = inputContent;
                let newArr = listOfFavouriteTowns;
                newArr.push(newOne);
                localStorage.setItem(
                  "favouriteTownsList",
                  JSON.stringify(newArr)
                );
                setListOfFavouriteTowns(newArr);
              }
            }
          }
          if (isFavourite) {
            const checkDoubleName = listOfFavouriteTowns.findIndex(
              town => town === inputContent
            );
            if (checkDoubleName === -1) {
              const newOne = inputContent;
              let newArr = listOfFavouriteTowns;
              newArr.push(newOne);
              localStorage.setItem(
                "favouriteTownsList",
                JSON.stringify(newArr)
              );
              setListOfFavouriteTowns(newArr);
            }
          }
          setWeatherData(result);
        })
        .catch(err => {
          if (err === 404) {
            console.log("Error 404!");
          } else if (err === 400) {
            console.log("Error 400!");
          } else if (err === 500) {
            console.log("Błąd serwera! 500!");
          }
        });
    }
    setInputContent("");
    setIsFavourite(false);
    setIsMainTown(false);
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
          throw Error("BRAK DANYCH!");
        }
      })
      .then(result => {
        localStorage.setItem("localData", JSON.stringify(result));
        localStorage.setItem("timeOfData", `${dateClick} ${timeClick}`);
        setTime(localStorage.getItem("timeOfData"));
        setWeatherData(result);
      })
      .catch(err => {
        console.log(new Error(err.message));
      });
  };

  const setMainTownBtn = town => {
    localStorage.setItem("townName", town);
    handleClickBtnRefresh();
  };

  const deleteTownFromList = town => {
    const arr = listOfFavouriteTowns.filter(item => item !== town);
    setListOfFavouriteTowns(arr);
    if (town === localStorage.getItem("townName")) {
      localStorage.setItem("townName", "");
      localStorage.setItem("localData", []);
      localStorage.setItem("timeOfData", "");
    }
    localStorage.setItem("favouriteTownsList", JSON.stringify(arr));
  };

  const checkWeatherHere = town => {
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${town}&APPID=${APIKey}&units=metric`;

    const dateClick = new Date().toLocaleDateString();
    const timeClick = new Date().toLocaleTimeString();

    fetch(API)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("BRAK DANYCH!");
        }
      })
      .then(result => {
        localStorage.setItem("localData", JSON.stringify(result));
        localStorage.setItem("timeOfData", `${dateClick} ${timeClick}`);
        setTime(localStorage.getItem("timeOfData"));
        setWeatherData(result);
      })
      .catch(err => {
        console.log(new Error(err.message));
      });
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
        favouriteTowns={listOfFavouriteTowns}
        setMainTownBtn={setMainTownBtn}
        deleteTownFromList={deleteTownFromList}
        checkWeatherHere={checkWeatherHere}
      />
    </div>
  );
}

export default App;

// const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

//Mój klucz APPID
//0d90c0d99506c2d578ef4a5f8468ce4f
//Mój nowy: 7eee9c2a3bb4e9f3e8da0776821d2ca0
