import { useContext, useEffect, useState } from "react";
import { SearchResult } from "../../lib/types";
import { AppContext } from "../../App";

const spriteBaseUrl = import.meta.env.VITE_SPRITE_BASE_URL;

const renderResults = (result: SearchResult) => {
  if (!result) return;

  return (
    <>
      {result.results.map((entry) => {
        const name: string = entry.name;
        const pokemonURL: string = entry.url;
        const splitURL: string[] = pokemonURL.split("/");
        const pokemonNum: number = +splitURL[splitURL.length - 2];
        console.log(entry, splitURL);

        return (
          <>
            <img src={spriteBaseUrl + pokemonNum + ".png"} alt="" />
            <div>{`Name: ${name}`}</div>
            <div>{`Pokemon`}</div>
          </>
        );
      })}
    </>
  );
};

const OutputContainer = () => {
  const store = useContext(AppContext);
  const [results, setResults] = useState<SearchResult | undefined>(undefined);

  useEffect(() => {
    if (store?.searchResults) {
      setResults(store.searchResults);
      return;
    }
    setResults(undefined);
  }, [store.searchResults]);

  return (
    <>
      <div className="output-container">
        {results && renderResults(results)}
      </div>
    </>
  );
};

export default OutputContainer;
