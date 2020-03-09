import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../store/actions/fetchDataAction";
import { resultScrollUp } from "../../../store/actions/scrollsUp";

export const BtnRefreshData = () => {
  const mainTown = useSelector(state => state.townList.mainTown);
  const dispatch = useDispatch();
  return (
    <i
      onClick={() => {
        resultScrollUp();
        dispatch(fetchData(mainTown));
      }}
      className="fas fa-sync-alt result__refreshIcon"
    ></i>
  );
};
