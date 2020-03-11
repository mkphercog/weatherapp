import React from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../../../store/actions/fetchDataAction";
import { hideSettings } from "../../../../store/actions/settingsVisibleActions";
import "./BtnCheckWeather.scss";

export const BtnCheckWeather = ({ town }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="settingsView__btn"
      onClick={() => {
        dispatch(fetchData(town));
        dispatch(hideSettings());
      }}
    >
      Sprawdź pogodę
    </button>
  );
};
