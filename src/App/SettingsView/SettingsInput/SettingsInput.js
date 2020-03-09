import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { settingsInputContent } from "../../../store/actions/settingsInputContentAction";

export const SettingsInput = () => {
  const value = useSelector(state => state.settingsInputContent.value);
  const isEmpty = useSelector(state => state.settingsInputContent.isEmpty);
  const dispatch = useDispatch();
  const classes = isEmpty
    ? "settingsView__input settingsView__input--isEmpty"
    : "settingsView__input";

  return (
    <input
      type="text"
      value={value}
      onChange={e => dispatch(settingsInputContent(e.target.value))}
      className={classes}
      placeholder="Nazwa miasta..."
    />
  );
};
