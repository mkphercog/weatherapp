import React from "react";
import { useDispatch } from "react-redux";
import { showSettings } from "../../../store/actions/settingsVisibleActions";

export const BtnShowSettings = ({ scrollUp }) => {
  const dispatch = useDispatch();
  return (
    <i
      onClick={() => {
        scrollUp();
        dispatch(showSettings());
      }}
      className="fas fa-cogs result__settingsIcon"
    ></i>
  );
};
