import { ADD_TOWN_TO_LIST } from "../types";

export const addTownToList = townName => ({
  type: ADD_TOWN_TO_LIST,
  town: townName
});
