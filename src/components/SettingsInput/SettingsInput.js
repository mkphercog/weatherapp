import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { settingsInputContent } from "../../store/actions/settingsInputContentAction";

const SettingsInput = ({ valueInput, changeInput }) => {
  const value = useSelector(state => state.settingsInputContent.value);
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      value={value}
      onChange={e => dispatch(settingsInputContent(e.target.value))}
      className="settings__input"
      placeholder="Nazwa miasta..."
    />
  );
};

export default SettingsInput;
