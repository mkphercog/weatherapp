import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Result } from "./components/ResultPage/ResultPage";
import Settings from "./components/SettingsPage/SettingsPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
// import NoResult from "./NoResult.json";
import "./App.scss";
import { fetchData } from "./store/actions/fetchDataAction";

//WEBSITE: https://api.openweathermap.org/data/2.5/weather?q=${townName}&APPID=${APIKey}&lang=pl&units=metric
// const APIKey = "0d90c0d99506c2d578ef4a5f8468ce4f";
//My key: 0d90c0d99506c2d578ef4a5f8468ce4f
//My other key: 7eee9c2a3bb4e9f3e8da0776821d2ca0

// LOCALSTORAGE --
// const getLocalData = localStorage.getItem("localData")
//   ? JSON.parse(localStorage.getItem("localData"))
//   : NoResult;

// const getLocalTimeOfData = localStorage.getItem("timeOfData")
//   ? localStorage.getItem("timeOfData")
//   : "";

// const getLocalListOfTowns = localStorage.getItem("favouriteTownsList")
//   ? JSON.parse(localStorage.getItem("favouriteTownsList"))
//   : [];
//--

function App() {
  //HOOKS HERE
  const [inputContent, setInputContent] = useState("");
  // const [weatherData, setWeatherData] = useState(getLocalData);
  const [isMainTown, setIsMainTown] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  // const [time, setTime] = useState(getLocalTimeOfData);
  // const [listOfFavouriteTowns, setListOfFavouriteTowns] = useState(
  //   getLocalListOfTowns
  // );

  const [err, setErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [settingsVisible, setSettingVisible] = useState(false);
  const [firstVisitWeb, setFirstVisitWeb] = useState(true);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!localStorage.getItem("townName")) {
  //     localStorage.setItem("townName", "Warszawa");
  //     getDataAPI("Warszawa");
  //   } else if (localStorage.getItem("townName") && firstVisitWeb) {
  //     setFirstVisitWeb(false);
  //     getDataAPI(localStorage.getItem("townName"));
  // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [firstVisitWeb]);
  // --

  //GET TIME
  // const getDate = () => {
  //   const dateClick = new Date().toLocaleDateString();
  //   const timeClick = new Date().toLocaleTimeString();
  //   return `${dateClick}, ${timeClick}`;
  // };
  // --

  //ONE FETCH FUNCTION
  // const getDataAPI = (townName = inputContent) => {
  // const API = `https://api.openweathermap.org/data/2.5/weather?q=${townName}&APPID=${APIKey}&lang=pl&units=metric`;
  // const time = getDate();

  // fetch(API)
  //     .then(res => {
  //       if (res.ok) {
  //         return res.json();
  //       } else {
  //         throw res.status;
  //       }
  //     })
  //     .then(result => {
  //       if (townName === inputContent.trim()) {
  //         if (isFavourite || isMainTown) {
  //           const checkDoubleName = listOfFavouriteTowns.findIndex(
  //             town => town.toUpperCase() === townName.toUpperCase()
  //           );
  //           if (checkDoubleName === -1) {
  //             let newArr = listOfFavouriteTowns;
  //             newArr.push(townName);

  //             localStorage.setItem(
  //               "favouriteTownsList",
  //               JSON.stringify(newArr)
  //             );
  //             setListOfFavouriteTowns(newArr);

  //             if (isMainTown) {
  //               localStorage.setItem("townName", townName);
  //               localStorage.setItem("localData", JSON.stringify(result));
  //               setSettingVisible(false);
  //             }
  //           } else {
  //             setErr(true);
  //             setErrorMessage("Miaso istnieje już na liście!");
  //             setTimeout(() => setErr(false), 2000);
  //           }
  //         }
  //       }

  //       if (townName === localStorage.getItem("townName")) {
  //         localStorage.setItem("localData", JSON.stringify(result));
  //         localStorage.setItem("timeOfData", time);
  //         setTime(localStorage.getItem("timeOfData"));
  //       } else {
  //         setTime(time);
  //       }

  //       setWeatherData(result);
  //       if (!isMainTown && !isFavourite) {
  //         setSettingVisible(false);
  //       }
  //     })
  //     .catch(err => {
  //       console.log(new Error(err));
  //       setErr(true);
  //       if (!localStorage.getItem("townName")) {
  //         setErrorMessage("Brak przypisanego miasta głównego!");
  //       } else {
  //         setErrorMessage(
  //           `Nie istnieje miasto o nazwie ${inputContent.toUpperCase()}!`
  //         );
  //       }
  //       setTimeout(() => setErr(false), 2000);
  //     });
  // };
  // --

  const handleClickAddTown = () => {
    if (inputContent === "") {
      setErr(true);
      setErrorMessage("Wpisz nazwę miasta!");
      setTimeout(() => setErr(false), 2000);
    } else {
      const inputTrimed = inputContent.trim();
      // getDataAPI(inputTrimed);
      dispatch(fetchData(inputTrimed));
      setInputContent("");
      setIsFavourite(false);
      setIsMainTown(false);
    }
  };

  const handleClickBtnRefresh = () => {
    // getDataAPI(localStorage.getItem("townName"));
  };

  const setMainTownBtn = town => {
    localStorage.setItem("townName", town);
    // getDataAPI(localStorage.getItem("townName"));
  };

  const checkWeatherHere = town => {
    // getDataAPI(town);
    setSettingVisible(false);
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
    // const arr = listOfFavouriteTowns.filter(item => item !== town);
    // setListOfFavouriteTowns(arr);
    if (town === localStorage.getItem("townName")) {
      localStorage.clear();
      // setWeatherData(NoResult);
      // setTime("");
    }
    // localStorage.setItem("favouriteTownsList", JSON.stringify(arr));
  };

  const showSettings = bool => {
    setSettingVisible(bool);
  };

  return (
    <div className="app">
      <Result
        clickRefreshBtn={handleClickBtnRefresh}
        showSettings={showSettings}
      />

      <Settings
        valueInput={inputContent}
        changeInput={handleChangeInputSettings}
        clickAddBtn={handleClickAddTown}
        isMainTown={isMainTown}
        checkIsMainTown={handleChangeIsMainTown}
        isFavourite={isFavourite}
        checkIsFavourite={handleChangeIsFavourite}
        // favouriteTowns={listOfFavouriteTowns}
        setMainTownBtn={setMainTownBtn}
        deleteTownFromList={deleteTownFromList}
        checkWeatherHere={checkWeatherHere}
        settingsVisible={settingsVisible}
        showSettings={showSettings}
      />

      {err ? <ErrorPage errorMessage={errorMessage} /> : null}
    </div>
  );
}

export default App;
