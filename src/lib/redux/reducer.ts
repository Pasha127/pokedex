import { initialState } from "./store";
import { PokeAppActions, ReduxAction } from "./actions";
import { AppState, SearchResult } from "../types";

const reducer = (state: AppState = initialState, action: ReduxAction) => {
  const type: PokeAppActions = action.type;
  switch (type) {
    case PokeAppActions.SetPageResults:
      return {
        ...state,
        searchResults: action.payload as SearchResult,
      };

    case PokeAppActions.SetPokemon:
      return {
        ...state,
        pokemonData: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default reducer;
