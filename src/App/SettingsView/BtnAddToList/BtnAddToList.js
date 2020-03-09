import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SetLocalListOfTowns } from "../../../store/actions/localStorageActions";
import { addTownToList } from "../../../store/actions/townsListActions";

export const BtnAddToList = () => {
  const currentTown = useSelector(state => state.fetchData.townData.name);
  const currentList = useSelector(state => state.townList.towns);
  const dispatch = useDispatch();

  const isTownOnList = currentList.find(town => {
    if (town === currentTown) return true;
    return false;
  });

  const classNames =
    isTownOnList || currentTown === "Brak danych"
      ? "settings__btn settings__btn--disabled"
      : "settings__btn";
  return (
    <button
      disabled={isTownOnList || currentTown === "Brak danych"}
      className={classNames}
      onClick={() => {
        dispatch(addTownToList(currentTown));
        SetLocalListOfTowns([...currentList, currentTown]);
      }}
    >
      {isTownOnList || currentTown === "Brak danych" ? (
        "Nic do dodania"
      ) : (
        <p>Dodaj {<span>{currentTown}</span>} do listy</p>
      )}
    </button>
  );
};
