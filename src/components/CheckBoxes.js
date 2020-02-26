import React from "react";

const CheckBoxes = ({
  isMainTown,
  checkIsMainTown,
  isFavourite,
  checkIsFavourite
}) => {
  const check = [
    {
      text: "Ustaw jako główne miasto.",
      name: "isMainTown",
      checked: isMainTown,
      fun: checkIsMainTown
    },
    {
      text: "Dodaj do listy ulubionych miast.",
      name: "isFavourite",
      checked: isMainTown ? isMainTown : isFavourite,
      fun: checkIsFavourite,
      disabled: isMainTown
    }
  ];

  const checkBoxes = check.map(item => (
    <label key={item.text} className="settings__checkLabel" htmlFor={item.name}>
      <input
        type="checkbox"
        name={item.name}
        id={item.name}
        className="settings__check"
        checked={item.checked}
        onChange={item.fun}
        disabled={item.disabled}
      />
      {item.text}
    </label>
  ));
  return checkBoxes;
};

export default CheckBoxes;
