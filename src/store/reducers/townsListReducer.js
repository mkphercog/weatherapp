import { ADD_TOWN_TO_LIST, SET_MAIN_TOWN } from "../types";

const INITIAL_STATE = {
  towns: ["Racibórz"],
  mainTown: "Racibórz"
};

export const townListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TOWN_TO_LIST:
      return {
        ...state,
        towns: [...state.towns, action.town]
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
