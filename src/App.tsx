import SearchBar from "./components/SearchBar/SearchBar";
import "./App.scss";
import OutputContainer from "./components/OutputContainer/OutputContainer";
import { createContext, useState, Context, useEffect } from "react";
import { AppState } from "./lib/types";

interface GlobalState extends AppState {
  setStore: undefined | unknown;
}

const defaultState: GlobalState = {
  searchValue: undefined,
  pokemonData: undefined,
  searchResults: undefined,
  setStore: undefined,
};

export const AppContext: Context<GlobalState> = createContext(defaultState);
const baseSearchURL = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [store, setStore] = useState(defaultState);
  useEffect(() => {
    searchPokes();
  }, []);

  const searchPokes = async () => {
    const response = await fetch(baseSearchURL);
    const data = await response.json();
    setStore({ ...store, searchResults: data });
  };

  return (
    <>
      <AppContext.Provider value={{ ...store, setStore }}>
        <div className="app-container">
          <SearchBar></SearchBar>
          <OutputContainer></OutputContainer>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
