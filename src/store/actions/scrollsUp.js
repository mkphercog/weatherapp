export const resultScrollUp = () => {
  if (document.getElementById("result__wrapper").scrollTop > 0) {
    document.getElementById("result__wrapper").scrollTop -= 5;
    setTimeout(resultScrollUp, 5);
  }
};

export const settingsScrollUp = () => {
  if (document.getElementById("settings").scrollTop > 0) {
    document.getElementById("settings").scrollTop -= 5;
    setTimeout(settingsScrollUp, 10);
  }
};
