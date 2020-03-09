import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SettingsInput } from "./SettingsInput/SettingsInput";
import { BtnAddTown } from "./BtnAddTown/BtnAddTown";
import { FavouriteTownList } from "./FavouriteTownList/FavouriteTownList";
import { CloseSettings } from "./CloseSettings/CloseSettings";
import { BtnAddToList } from "./BtnAddToList/BtnAddToList";
import { settingsScrollUp } from "../../store/actions/scrollsUp";
import "./SettingsView.scss";

export const SettingsView = ({
  valueInput,
  changeInput,
  clickAddBtn,
  setMainTownBtn,
  deleteTownFromList,
  checkWeatherHere,
  showSettings
}) => {
  const townList = useSelector(state => state.townList.towns);
  const isVisible = useSelector(state => state.settingsVisible.isVisible);
  const [visible, setVisible] = useState(0);
  const animationSpeed = 10;

  const settingsAnimation = num => {
    setVisible(visible + num);
  };

  if (isVisible && visible < 100) {
    setTimeout(() => settingsAnimation(5), animationSpeed);
  }

  if (!isVisible && visible > 0) {
    settingsScrollUp();
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
          <BtnAddToList />
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
