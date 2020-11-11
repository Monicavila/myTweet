import React from "react";
import { SearchOutline } from "@graywolfai/react-heroicons";
import "./styles.css";

const SearchBar = () => {
    return (
        <div className="search">
          <p className="searchIcon">
            <SearchOutline />
          </p>
          <input className="searchBar" placeholder="Buscar en Twitter" />
        </div>
    )
}

export default SearchBar;