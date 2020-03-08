import { DATA_FETCHING, DATA_FETCHED, DATA_ERROR } from "../types";
import NoResult from "../../NoResult.json";
// import { GetLocalData } from "../actions/localStorageActions";

// const localData = GetLocalData();

const INITIAL_STATE = {
  featching: false,
  featched: false,
  townData: NoResult,
  dateOfData: "",
  error: false,
  errorMessage: ""
};

export const fetchTownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_FETCHING:
      return {
        ...state,
        featching: true,
        featched: false,
        townData: NoResult,
        dateOfData: "",
        error: false,
        errorMessage: ""
      };
    case DATA_FETCHED:
      return {
        ...state,
        featching: false,
        featched: true,
        townData: action.payload,
        dateOfData: action.dateOfData,
        error: false,
        errorMessage: ""
      };
    case DATA_ERROR:
      return {
        ...state,
        featching: false,
        featched: false,
        townData: NoResult,
        dateOfData: "",
        error: true,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
