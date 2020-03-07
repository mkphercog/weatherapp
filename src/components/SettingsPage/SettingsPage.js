import React, { useState } from "react";
import { useSelector } from "react-redux";

import SettingsInput from "../SettingsInput/SettingsInput";
import BtnAddTown from "../BtnAddTown/BtnAddTown";
import CheckBoxes from "../CheckBoxes/CheckBoxes";
import FavouriteTownList from "../FavouriteTownList/FavouriteTownList";
import CloseSettings from "../CloseSettings/CloseSettings";
import "./SettingsPage.scss";

const Settings = ({
  valueInput,
  changeInput,
  clickAddBtn,
  isMainTown,
  checkIsMainTown,
  isFavourite,
  checkIsFavourite,
  favouriteTowns,
  setMainTownBtn,
  deleteTownFromList,
  checkWeatherHere,
  settingsVisible,
  showSettings
}) => {
  const townList = useSelector(state => state.townList.towns);
  const [visible, setVisible] = useState(0);
  const animationSpeed = 10;

  const settingsAnimation = num => {
    setVisible(visible + num);
  };

  const scrollUp = () => {
    if (document.getElementById("settings").scrollTop > 0) {
      document.getElementById("settings").scrollTop -= 5;
      setTimeout(scrollUp, 10);
    }
  };

  if (settingsVisible && visible < 100) {
    scrollUp();
    setTimeout(() => settingsAnimation(5), animationSpeed);
  }

  if (!settingsVisible && visible > 0) {
    setTimeout(() => settingsAnimation(-5), animationSpeed);
  }

  return (
    <div
      className="settings"
      id="settings"
      style={{
        display: `${visible !== 0 ? "block" : "none"}`,
        opacity: `${visible}%`
      }}
    >
      <div className="settings__wrapper">
        <h1 className="settings__title">Ustawienia</h1>

        <div className="settings__wrapperAddTown">
          <SettingsInput valueInput={valueInput} changeInput={changeInput} />
          <BtnAddTown clickAddBtn={clickAddBtn} />
          <CheckBoxes
            isMainTown={isMainTown}
            checkIsMainTown={checkIsMainTown}
            isFavourite={isFavourite}
            checkIsFavourite={checkIsFavourite}
          />
        </div>

        <div className="settings__wrapperFavouriteList">
          <h3 className="settings__favouriteTitle">Lista ulubionych miast</h3>
          <ul className="settings__favouriteList">
            {townList.length ? (
              <FavouriteTownList
                townList={townList}
                setMainTownBtn={setMainTownBtn}
                deleteTownFromList={deleteTownFromList}
                checkWeatherHere={checkWeatherHere}
              />
            ) : (
              <li className="settings__listItem">Brak danych.</li>
            )}
          </ul>
        </div>
        <CloseSettings showSettings={showSettings} />

        <p className="settings__author">Projekt i realizacja: Marcin Hercog</p>
      </div>
    </div>
  );
};

export default Settings;
