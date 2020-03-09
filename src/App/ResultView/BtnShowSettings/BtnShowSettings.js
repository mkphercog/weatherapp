import React from "react";
import { useDispatch } from "react-redux";
import { showSettings } from "../../../store/actions/settingsVisibleActions";
import { resultScrollUp } from "../../../store/actions/scrollsUp";

export const BtnShowSettings = () => {
  const dispatch = useDispatch();
  return (
    <i
      onClick={() => {
        resultScrollUp();
        dispatch(showSettings());
      }}
      className="fas fa-cogs result__settingsIcon"
    ></i>
  );
};
