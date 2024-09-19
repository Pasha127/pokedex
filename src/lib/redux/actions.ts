import { SearchResult } from "../types";

const baseSearchURL = import.meta.env.VITE_API_BASE_URL;

export enum PokeAppActions {
  SetPageResults = "SET_PAGE_RESULTS",
  SetPokemon = "SET_POKEMON",
}

export type ReduxAction = {
  type: PokeAppActions;
  payload: SearchResult | Record<string, unknown>;
};

export const setPageResults = (data: SearchResult): ReduxAction => ({
  type: PokeAppActions.SetPageResults,
  payload: data,
});

export const getPokemonPageWithThunk = (page: string | undefined) => {
  /*   const options = {
    method: "GET",
  }; */

  //TODO: type dispatch ⚠
  return async (dispatch: any, getState: any) => {
    const response = await fetch(page? page:baseSearchURL);
    if (response.ok) {
      const data = await response.json();
      dispatch(setPageResults(data));
    } else {
      alert("Error catching pokemon");
    }
  };
};
