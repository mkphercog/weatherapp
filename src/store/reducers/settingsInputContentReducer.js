import { CHANGE_SETTINGS_INPUT_CONTENT } from "../types";

const INITIAL_STATE = {
  value: ""
};

export const settingsInputContentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SETTINGS_INPUT_CONTENT:
      return {
        ...state,
        value: action.value
      };
    default:
      return state;
  }
};
