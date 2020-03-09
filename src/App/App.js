import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResultView } from "./ResultView/ResultView";
import { SettingsView } from "./SettingsView/SettingsView";
import { ErrorView } from "./ErrorView/ErrorView";
import { LoadingView } from "./LoadingView/LoadingView";
import { fetchData } from "../store/actions/fetchDataAction";
import { SetLocalMainTown } from "../store/actions/localStorageActions";
import { hideSettings } from "../store/actions/settingsVisibleActions";
import { setMainTown, defaultState } from "../store/actions/townsListActions";
import "./App.scss";

export const App = () => {
  const dispatch = useDispatch();
  const mainTown = useSelector(state => state.townList.mainTown);
  const townsList = useSelector(state => state.townList.towns);
  const isFeatching = useSelector(state => state.fetchData.featching);
  const isError = useSelector(state => state.fetchData.error);

  useEffect(() => {
    SetLocalMainTown(mainTown);
    dispatch(fetchData(mainTown));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchErrorResult = () => {
    if (mainTown) {
      //error but you still have main Town, so just refresh data of main town
      dispatch(fetchData(mainTown));
      dispatch(hideSettings());
    } else if (townsList.length > 0) {
      //error and you don't have main town, but you have list of favourite towns, so your main town will be random from list
      const randomIndex = Math.floor(Math.random() * townsList.length);
      SetLocalMainTown(townsList[randomIndex]);
      dispatch(setMainTown(townsList[randomIndex]));
    } else {
      //error and you don't have main town and your list is empty, so return default state of app, with "Warszawa" in main town
      localStorage.clear();
      dispatch(defaultState());
    }
  };

  if (isError) {
    setTimeout(fetchErrorResult, 1500);
  }

  return (
    <div className="app">
      <ResultView />
      <SettingsView />
      {isFeatching ? <LoadingView /> : null}
      {isError ? <ErrorView /> : null}
    </div>
  );
};
