import React from "react";
import { useDispatch } from "react-redux";
import { showSettings } from "../../store/actions/settingsVisibleActions";

const BtnShowSettings = ({ scrollUp }) => {
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

export default BtnShowSettings;
