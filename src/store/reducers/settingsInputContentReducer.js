import { CHANGE_SETTINGS_INPUT_CONTENT, SETTINGS_INPUT_EMPTY } from "../types";

const INITIAL_STATE = {
  value: "",
  isEmpty: false
};

export const settingsInputContentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SETTINGS_INPUT_CONTENT:
      return {
        ...state,
        value: action.value,
        isEmpty: false
      };
    case SETTINGS_INPUT_EMPTY:
      return {
        ...state,
        isEmpty: action.isEmpty
      };
    default:
      return state;
  }
};
