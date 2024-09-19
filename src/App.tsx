import SearchBar from "./components/SearchBar/SearchBar";
import "./App.scss";
import { connect } from "react-redux";
import OutputContainer from "./components/OutputContainer/OutputContainer";
import { useEffect } from "react";
import { AppState, SearchResult } from "./lib/types";
import { getPokemonPageWithThunk } from "./lib/redux/actions";

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

function App(props: { searchResults: SearchResult; navigatePage: any }) {
  useEffect(() => {
    props.navigatePage("");
  }, []);

  return (
    <>
      <div className="app-container">
        <SearchBar></SearchBar>
        <OutputContainer></OutputContainer>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
