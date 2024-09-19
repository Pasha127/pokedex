import { useContext } from "react";
import { AppContext } from "../../App";

const SearchBar = () => {
  const store = useContext(AppContext);

  const searchPokemon = async (query: string) => {
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    const response = await fetch(baseURL + query);
    const data = await response.json();
    store.setStore({ ...store, searchResults: data });
  };
  const navResults = async (direction: "next" | "previous") => {
    if (!store.searchResults || !store.searchResults[direction]) return;
    const response = await fetch(store.searchResults[direction]);
    const data = await response.json();
    store.setStore({ ...store, searchResults: data });
  };
  return (
    <>
      <div className="search-container">
        <button onClick={() => navResults("previous")}>Back</button>
        <input type="text" />
        <button>Search Pokemon</button>
        <button onClick={() => navResults("next")}>Next</button>
      </div>
    </>
  );
};

export default SearchBar;
