import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMainTown } from "../../store/actions/townsListActions";
import { fetchData } from "../../store/actions/fetchDataAction";

const FavouriteTownList = ({
  setMainTownBtn,
  deleteTownFromList,
  checkWeatherHere
}) => {
  const townList = useSelector(state => state.townList.towns);
  const dispatch = useDispatch();

  const arrOfTowns = townList.map((town, index) => (
    <li className="settings__listItem" key={index}>
      <div className="settings__wrapperIconName">
        {localStorage.getItem("townName") === town ? (
          <i className="fas fa-home settings__homeIcon"></i>
        ) : (
          <i className="fas fa-home settings__homeIcon settings__homeIcon--disabled"></i>
        )}
        <span className="settings__townName">{town}</span>
        <i
          onClick={() => deleteTownFromList(town)}
          className="fas fa-trash-alt settings__trashIcon"
        ></i>
      </div>
      <div className="settings__wrapperBtn">
        {localStorage.getItem("townName") === town ? null : (
          <button
            className="settings__btn"
            // onClick={() => setMainTownBtn(town)}
            onClick={() => dispatch(setMainTown(town))}
          >
            Główne miasto
          </button>
        )}
        <button
          className="settings__btn"
          onClick={() => dispatch(fetchData(town))}
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

export default FavouriteTownList;
