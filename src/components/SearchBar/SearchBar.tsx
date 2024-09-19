import { connect } from "react-redux";
import { AppState, SearchResult } from "../../lib/types";
import { getPokemonPageWithThunk } from "../../lib/redux/actions";

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

const SearchBar = (props: {
  navigatePage: any;
  searchResults: SearchResult;
}) => {
  return (
    <>
      <div className="search-container">
        <button
          onClick={() => props.navigatePage(props.searchResults.previous)}
        >
          Back
        </button>
        {/* <input type="text" />
        <button>Search Pokemon</button> */}
        <button onClick={() => props.navigatePage(props.searchResults.next)}>
          Next
        </button>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
