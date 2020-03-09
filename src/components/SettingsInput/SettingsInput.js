import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { settingsInputContent } from "../../store/actions/settingsInputContentAction";

const SettingsInput = () => {
  const value = useSelector(state => state.settingsInputContent.value);
  const isEmpty = useSelector(state => state.settingsInputContent.isEmpty);
  const dispatch = useDispatch();
  const classes = isEmpty
    ? "settings__input settings__input--isEmpty"
    : "settings__input";

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

export default SettingsInput;
