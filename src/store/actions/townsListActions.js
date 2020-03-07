import { ADD_TOWN_TO_LIST, SET_MAIN_TOWN } from "../types";

export const addTownToList = townName => ({
  type: ADD_TOWN_TO_LIST,
  town: townName
});

export const setMainTown = mainTown => ({
  type: SET_MAIN_TOWN,
  main: mainTown
});
