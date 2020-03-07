import { CHANGE_SETTINGS_INPUT_CONTENT } from "../types";

export const settingsInputContent = value => ({
  type: CHANGE_SETTINGS_INPUT_CONTENT,
  value: value
});
