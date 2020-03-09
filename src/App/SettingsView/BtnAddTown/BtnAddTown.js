import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../store/actions/fetchDataAction";
import {
  settingsInputContent,
  settingsInputEmpty
} from "../../../store/actions/settingsInputContentAction";

export const BtnAddTown = () => {
  const inputValue = useSelector(state => state.settingsInputContent.value);
  const dispatch = useDispatch();

  return (
    <button
      className="settingsView__btn"
      onClick={() => {
        if (inputValue === "") {
          dispatch(settingsInputEmpty(true));
          setTimeout(() => dispatch(settingsInputEmpty(false)), 2000);
        } else {
          inputValue.trim();
          dispatch(fetchData(inputValue));
          dispatch(settingsInputContent(""));
        }
      }}
    >
      Sprawdź miasto
    </button>
  );
};
