import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setMainTown,
  deleteTownFromList
} from "../../../store/actions/townsListActions";
import { fetchData } from "../../../store/actions/fetchDataAction";
import {
  SetLocalMainTown,
  SetLocalListOfTowns
} from "../../../store/actions/localStorageActions";
import { hideSettings } from "../../../store/actions/settingsVisibleActions";

export const FavouriteTownList = () => {
  const townList = useSelector(state => state.townList.towns);
  const mainTownRedux = useSelector(state => state.townList.mainTown);
  const dispatch = useDispatch();
  SetLocalListOfTowns(townList);
  const arrOfTowns = townList.map((town, index) => (
    <li className="settings__listItem" key={index}>
      <div className="settings__wrapperIconName">
        {mainTownRedux === town ? (
          <i className="fas fa-home settings__homeIcon"></i>
        ) : (
          <i className="fas fa-home settings__homeIcon settings__homeIcon--disabled"></i>
        )}
        <span className="settings__townName">{town}</span>
        <i
          onClick={() => {
            dispatch(deleteTownFromList(town));
            if (town === mainTownRedux) {
              dispatch(setMainTown(""));
              SetLocalMainTown("");
            }
            SetLocalListOfTowns([]);
          }}
          className="fas fa-trash-alt settings__trashIcon"
        ></i>
      </div>
      <div className="settings__wrapperBtn">
        {mainTownRedux === town ? null : (
          <button
            className="settings__btn"
            onClick={() => {
              dispatch(setMainTown(town));
              SetLocalMainTown(town);
            }}
          >
            Główne miasto
          </button>
        )}
        <button
          className="settings__btn"
          onClick={() => {
            dispatch(fetchData(town));
            dispatch(hideSettings());
          }}
        >
          Sprawdź pogodę
        </button>
      </div>
    </li>
  ));

  const mainTown = arrOfTowns.find(
    item =>
      item.props.children[0].props.children[0].props.className ===
      "fas fa-home settings__homeIcon"
  );
  const otherTowns = arrOfTowns.filter(item => item !== mainTown);

  const showTowns = [mainTown, otherTowns.reverse()];

  return showTowns;
};
