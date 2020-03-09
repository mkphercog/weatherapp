import {
  ADD_TOWN_TO_LIST,
  DELETE_TOWN_FROM_LIST,
  DEFAULT_TOWN_STATE,
  SET_MAIN_TOWN
} from "../types";
import {
  GetLocalMainTown,
  GetLocalListOfTowns
} from "../actions/localStorageActions";

const INITIAL_STATE = {
  towns: GetLocalListOfTowns,
  mainTown: GetLocalMainTown
};

export const townListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TOWN_TO_LIST:
      return {
        ...state,
        towns: [...state.towns, action.town]
      };
    case DELETE_TOWN_FROM_LIST:
      const listWithoutTown = state.towns.filter(town => town !== action.town);
      return { ...state, towns: listWithoutTown };
    case DEFAULT_TOWN_STATE:
      return {
        ...state,
        towns: ["Warszawa"],
        mainTown: "Warszawa"
      };
    case SET_MAIN_TOWN:
      return {
        ...state,
        mainTown: action.main
      };
    default:
      return state;
  }
};
