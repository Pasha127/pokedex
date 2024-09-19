import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { AppState } from "../types";

export const initialState: AppState = {
  searchValue: undefined,
  pokemonData: undefined,
  searchResults: undefined,
};

export const store = configureStore({
  reducer,
  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
