import {
  ADD_TOWN_TO_LIST,
  DELETE_TOWN_FROM_LIST,
  DEFAULT_TOWN_STATE,
  SET_MAIN_TOWN
} from "../types";

export const addTownToList = townName => ({
  type: ADD_TOWN_TO_LIST,
  town: townName
});

export const deleteTownFromList = townName => ({
  type: DELETE_TOWN_FROM_LIST,
  town: townName
});

export const setMainTown = mainTown => ({
  type: SET_MAIN_TOWN,
  main: mainTown
});

export const defaultState = () => ({ type: DEFAULT_TOWN_STATE });
