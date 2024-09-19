import { useEffect } from "react";
import { AppState, SearchResult } from "../../lib/types";
import { connect } from "react-redux";
import { getPokemonPageWithThunk } from "../../lib/redux/actions";

const spriteBaseUrl = import.meta.env.VITE_SPRITE_BASE_URL;

const mapStateToProps = (state: AppState) => {
  return {
    searchResults: state.searchResults,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    navigatePage: (page: string) => {
      dispatch(getPokemonPageWithThunk(page));
    },
  };
};

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

const OutputContainer = (props: { searchResults: SearchResult }) => {
  return (
    <>
      <div className="output-container">
        <>{console.log(props)}</>
        <>{props.searchResults && renderResults(props.searchResults)}</>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(OutputContainer);
