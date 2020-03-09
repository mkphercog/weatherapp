import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../store/actions/fetchDataAction";
import { resultScrollUp } from "../../../store/actions/scrollsUp";
import "./BtnRefreshData.scss";

export const BtnRefreshData = () => {
  const mainTown = useSelector(state => state.townList.mainTown);
  const dispatch = useDispatch();

  return (
    <i
      onClick={() => {
        dispatch(fetchData(mainTown));
        resultScrollUp();
      }}
      className="fas fa-sync-alt resultView__refreshIcon"
    ></i>
  );
};
