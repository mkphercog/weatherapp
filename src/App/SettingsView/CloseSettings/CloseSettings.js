import React from "react";
import { useDispatch } from "react-redux";
import { hideSettings } from "../../../store/actions/settingsVisibleActions";
import "./CloseSettings.scss";

export const CloseSettings = () => {
  const dispatch = useDispatch();

  return (
    <i
      className="fas fa-times settingsView__close"
      onClick={() => dispatch(hideSettings())}
    ></i>
  );
};
