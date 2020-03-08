import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/actions/fetchDataAction";

const BtnRefreshData = ({ scrollUp }) => {
  const mainTown = useSelector(state => state.townList.mainTown);
  const dispatch = useDispatch();
  return (
    <i
      onClick={() => {
        scrollUp();
        dispatch(fetchData(mainTown));
      }}
      className="fas fa-sync-alt result__refreshIcon"
    ></i>
  );
};

export default BtnRefreshData;
