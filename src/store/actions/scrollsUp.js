export const resultScrollUp = () => {
  if (document.getElementById("resultView__wrapper").scrollTop > 0) {
    document.getElementById("resultView__wrapper").scrollTop -= 5;
    setTimeout(resultScrollUp, 5);
  }
};

export const settingsScrollUp = () => {
  if (document.getElementById("settingsView").scrollTop > 0) {
    document.getElementById("settingsView").scrollTop -= 5;
    setTimeout(settingsScrollUp, 10);
  }
};
