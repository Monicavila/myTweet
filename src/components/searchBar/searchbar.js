import React from "react";
import { SearchOutline } from "@graywolfai/react-heroicons";

import "./styles.css";

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
        <p className="searchIcon">
          <SearchOutline />
        </p>
        <input
          id="searchInput"
          type="text"
          className="searchBar"
          placeholder="Buscar en Twitter"
          onChange={this.props.contextFunction.handleSearchFn}
          value={this.props.searchUser}
        />
      </div>
    );
  }
}

export default SearchBar;
