import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Result } from "./components/ResultPage/ResultPage";
import Settings from "./components/SettingsPage/SettingsPage";
// import ErrorPage from "./components/ErrorPage/ErrorPage";
import "./App.scss";
import { fetchData } from "./store/actions/fetchDataAction";
import {
  SetLocalMainTown,
  SetLocalListOfTowns
} from "./store/actions/localStorageActions";
import LoadingPage from "./components/LoadingPage/LoadingPage";

function App() {
  const dispatch = useDispatch();
  const mainTown = useSelector(state => state.townList.mainTown);
  const townsList = useSelector(state => state.townList.towns);
  const isFeatching = useSelector(state => state.fetchData.featching);

  useEffect(() => {
    SetLocalMainTown(mainTown);
    SetLocalListOfTowns(townsList);
    dispatch(fetchData(mainTown));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <Result />
      <Settings />
      {isFeatching ? <LoadingPage /> : null}
      {/* {err ? <ErrorPage errorMessage={errorMessage} /> : null} */}
    </div>
  );
}

export default App;
