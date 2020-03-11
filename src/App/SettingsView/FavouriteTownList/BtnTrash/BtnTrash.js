import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setMainTown,
  deleteTownFromList
} from "../../../../store/actions/townsListActions";
import {
  SetLocalMainTown,
  SetLocalListOfTowns
} from "../../../../store/actions/localStorageActions";
import "./BtnTrash.scss";

export const BtnTrash = ({ town }) => {
  const dispatch = useDispatch();
  const mainTownRedux = useSelector(state => state.townList.mainTown);

  return (
    <i
      className="fas fa-trash-alt settingsView__trashIcon"
      onClick={() => {
        dispatch(deleteTownFromList(town));
        if (town === mainTownRedux) {
          dispatch(setMainTown(""));
          SetLocalMainTown("");
        }
        SetLocalListOfTowns([]);
      }}
    ></i>
  );
};
