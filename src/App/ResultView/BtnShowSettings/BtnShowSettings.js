import React from "react";
import { useDispatch } from "react-redux";
import { showSettings } from "../../../store/actions/settingsVisibleActions";
import { resultScrollUp } from "../../../store/actions/scrollsUp";
import "./BtnShowSettings.scss";

export const BtnShowSettings = () => {
  const dispatch = useDispatch();

  return (
    <i
      onClick={() => {
        dispatch(showSettings());
        resultScrollUp();
      }}
      className="fas fa-cogs resultView__settingsIcon"
    ></i>
  );
};
