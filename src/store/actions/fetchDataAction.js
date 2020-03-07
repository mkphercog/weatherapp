import { DATA_FETCHING, DATA_FETCHED, DATA_ERROR } from "../types";
import axios from "axios";

export const fetchData = townName => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${townName}&APPID=0d90c0d99506c2d578ef4a5f8468ce4f&lang=pl&units=metric`;
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return dispatch => {
    dispatch({
      type: DATA_FETCHING
    });

    axios
      .get(URL)
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: DATA_FETCHED,
            payload: res.data,
            dateOfData: `${date}, ${time}`
          });
        }
      })
      .catch(err =>
        dispatch({
          type: DATA_ERROR,
          payload: err.message
        })
      );
  };
};
