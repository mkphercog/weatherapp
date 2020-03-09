import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResultView } from "./ResultView/ResultView";
import { SettingsView } from "./SettingsView/SettingsView";
import { ErrorView } from "./ErrorView/ErrorView";
import "./App.scss";
import { fetchData } from "../store/actions/fetchDataAction";
import {
  SetLocalMainTown,
  SetLocalListOfTowns
} from "../store/actions/localStorageActions";
import { LoadingView } from "./LoadingView/LoadingView";
import { hideSettings } from "../store/actions/settingsVisibleActions";
import { setMainTown, defaultState } from "../store/actions/townsListActions";

function App() {
  const dispatch = useDispatch();
  const mainTown = useSelector(state => state.townList.mainTown);
  const townsList = useSelector(state => state.townList.towns);
  const isFeatching = useSelector(state => state.fetchData.featching);
  const isError = useSelector(state => state.fetchData.error);

  useEffect(() => {
    SetLocalMainTown(mainTown);
    SetLocalListOfTowns(townsList);
    dispatch(fetchData(mainTown));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const errFetch = () => {
    if (mainTown) {
      dispatch(fetchData(mainTown));
      dispatch(hideSettings());
    } else if (townsList.length > 0) {
      const randomIndex = Math.floor(Math.random() * townsList.length);
      SetLocalMainTown(townsList[randomIndex]);
      dispatch(setMainTown(townsList[randomIndex]));
    } else {
      localStorage.clear();
      dispatch(defaultState());
      SetLocalMainTown(mainTown);
    }
  };

  if (isError) {
    setTimeout(errFetch, 1500);
  }

  return (
    <div className="app">
      <ResultView />
      <SettingsView />
      {isFeatching ? <LoadingView /> : null}
      {isError ? <ErrorView /> : null}
    </div>
  );
}

export default App;
