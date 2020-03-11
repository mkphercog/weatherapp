import React from "react";
import { useDispatch } from "react-redux";
import { SetLocalMainTown } from "../../../../store/actions/localStorageActions";
import { setMainTown } from "../../../../store/actions/townsListActions";
import "./BtnSetMainTown.scss";

export const BtnSetMainTown = ({ town }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="settingsView__btn"
      onClick={() => {
        dispatch(setMainTown(town));
        SetLocalMainTown(town);
      }}
    >
      Główne miasto
    </button>
  );
};
