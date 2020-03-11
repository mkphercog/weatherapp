import React from "react";
import { useSelector } from "react-redux";
import { SetLocalListOfTowns } from "../../../store/actions/localStorageActions";
import { BtnCheckWeather } from "./BtnCheckWeather/BtnCheckWeather";
import { BtnSetMainTown } from "./BtnSetMainTown/BtnSetMainTown";
import { BtnTrash } from "./BtnTrash/BtnTrash";
import "./FavouriteTownList.scss";

export const FavouriteTownList = () => {
  const townList = useSelector(state => state.townList.towns);
  const mainTownRedux = useSelector(state => state.townList.mainTown);

  SetLocalListOfTowns(townList);

  const arrOfTowns = townList.map((town, index) => (
    <li className="settingsView__listItem" key={index}>
      <div className="settingsView__wrapperIconName">
        {mainTownRedux === town ? (
          <i className="fas fa-home settingsView__homeIcon"></i>
        ) : (
          <i className="fas fa-home settingsView__homeIcon settingsView__homeIcon--disabled"></i>
        )}
        <span className="settingsView__townName">{town}</span>
        <BtnTrash town={town} />
      </div>

      <div className="settingsView__wrapperBtn">
        {mainTownRedux === town ? null : <BtnSetMainTown town={town} />}
        <BtnCheckWeather town={town} />
      </div>
    </li>
  ));

  const mainTown = arrOfTowns.find(
    item =>
      item.props.children[0].props.children[0].props.className ===
      "fas fa-home settingsView__homeIcon"
  );
  const otherTowns = arrOfTowns.filter(item => item !== mainTown);

  const showTowns = [mainTown, otherTowns.reverse()];

  return (
    <ul className="settingsView__favouriteList">
      {townList.length ? (
        showTowns
      ) : (
        <li className="settingsView__listItem">Brak danych.</li>
      )}
    </ul>
  );
};
