import { fetchTownReducer } from "./fetchDataReducer";
import { townListReducer } from "./townsListReducer";
import { settingsInputContentReducer } from "./settingsInputContentReducer";
import { settingsVisibleReducer } from "./settingsVisibleReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  townList: townListReducer,
  fetchData: fetchTownReducer,
  settingsInputContent: settingsInputContentReducer,
  settingsVisible: settingsVisibleReducer
});
