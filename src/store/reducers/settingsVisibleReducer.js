import { SHOW_SETTINGS, HIDE_SETTINGS } from "../types";

const INITIAL_STATE = {
  isVisible: false
};

export const settingsVisibleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_SETTINGS:
      return {
        ...state,
        isVisible: true
      };
    case HIDE_SETTINGS:
      return {
        ...state,
        isVisible: false
      };
    default:
      return state;
  }
};
