export const GetLocalMainTown = localStorage.getItem("mainTown")
  ? localStorage.getItem("mainTown")
  : "Warszawa";

export const SetLocalMainTown = mainTown =>
  localStorage.setItem("mainTown", mainTown);

export const GetLocalListOfTowns =
  localStorage.getItem("favouriteTownsList") === null ||
  localStorage.getItem("favouriteTownsList") === "[]"
    ? ["Warszawa"]
    : JSON.parse(localStorage.getItem("favouriteTownsList"));

export const SetLocalListOfTowns = newListOfTowns =>
  localStorage.setItem("favouriteTownsList", JSON.stringify(newListOfTowns));
