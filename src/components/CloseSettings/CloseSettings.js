import React from "react";
import { useDispatch } from "react-redux";
import { hideSettings } from "../../store/actions/settingsVisibleActions";

const CloseSettings = () => {
  const dispatch = useDispatch();
  return (
    <i
      className="fas fa-times settings__close"
      onClick={() => dispatch(hideSettings())}
    ></i>
  );
};

export default CloseSettings;
