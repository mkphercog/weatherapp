import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SettingsInput } from "./SettingsInput/SettingsInput";
import { BtnCheckTown } from "./BtnCheckTown/BtnCheckTown";
import { FavouriteTownList } from "./FavouriteTownList/FavouriteTownList";
import { CloseSettings } from "./CloseSettings/CloseSettings";
import { BtnAddToList } from "./BtnAddToList/BtnAddToList";
import { settingsScrollUp } from "../../store/actions/scrollsUp";
import "./SettingsView.scss";

export const SettingsView = () => {
  const isVisible = useSelector((state) => state.settingsVisible.isVisible);
  const [visible, setVisible] = useState(0);
  const animationSpeed = 10;

  const settingsAnimation = (num) => {
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
      className="settingsView"
      id="settingsView"
      style={{
        display: `${visible !== 0 ? "block" : "none"}`,
        opacity: `${visible}%`,
      }}
    >
      <div className="settingsView__wrapper">
        <h1 className="settingsView__title">Ustawienia</h1>

        <div className="settingsView__wrapperAddTown">
          <SettingsInput />
          <BtnCheckTown />
          <BtnAddToList />
        </div>

        <div className="settingsView__wrapperFavouriteList">
          <h3 className="settingsView__favouriteTitle">
            Lista ulubionych miast
          </h3>
          <FavouriteTownList />
        </div>

        <CloseSettings />

        <p className="settingsView__author">
          Projekt i realizacja:{" "}
          <a
            className="settingsView__author--link"
            href="https://mkphercog.github.io/mywebsite"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marcin Hercog
          </a>
        </p>
      </div>
    </div>
  );
};
