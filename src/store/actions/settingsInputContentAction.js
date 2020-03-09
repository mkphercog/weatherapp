import { CHANGE_SETTINGS_INPUT_CONTENT, SETTINGS_INPUT_EMPTY } from "../types";

export const settingsInputContent = value => ({
  type: CHANGE_SETTINGS_INPUT_CONTENT,
  value: value
});

export const settingsInputEmpty = isEmpty => ({
  type: SETTINGS_INPUT_EMPTY,
  isEmpty: isEmpty
});
