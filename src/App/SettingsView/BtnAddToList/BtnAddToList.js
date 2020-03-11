import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SetLocalListOfTowns } from "../../../store/actions/localStorageActions";
import { addTownToList } from "../../../store/actions/townsListActions";
import "./BtnAddToList.scss";

export const BtnAddToList = () => {
  const currentTown = useSelector(state => state.fetchData.townData.name);
  const currentTownList = useSelector(state => state.townList.towns);
  const dispatch = useDispatch();

  const isTownOnList = currentTownList.find(town => {
    if (town === currentTown) return true;
    return false;
  });

  const isTownOnListOrNoResult = isTownOnList || currentTown === "Brak danych";

  const classNames = isTownOnListOrNoResult
    ? "settingsView__btnAddTown settingsView__btn--disabled"
    : "settingsView__btnAddTown";

  return (
    <button
      disabled={isTownOnListOrNoResult}
      className={classNames}
      onClick={() => {
        dispatch(addTownToList(currentTown));
        SetLocalListOfTowns([...currentTownList, currentTown]);
      }}
    >
      {isTownOnListOrNoResult ? (
        "Nic do dodania"
      ) : (
        <p>
          Dodaj {<span className="settingsView__TownToAdd">{currentTown}</span>}{" "}
          do listy
        </p>
      )}
    </button>
  );
};
