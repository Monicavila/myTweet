import React from "react";
import SearchBar from "../searchBar/searchbar";
import SearchDropdown from "../searchDropdown/searchDropdown";
import Trends from "../trends";
import { users } from "../users";

class SidebarCol extends React.Component {
  constructor() {
    super();
    this.state = {
      profiles: users,
      searchUser: "",
    };
  }
  handleSearch = (event) => {
    const user = event.target.value;
    this.setState({ searchUser: user });
  };

  render() {
    const contextFunction = {
      handleSearchFn: this.handleSearch,
    };
    return (
      <div className="t-sidebar-col">
        <SearchBar
          searchUser={this.state.searchUser}
          contextFunction={contextFunction}
        />
        {this.state.searchUser ? (
          <div className="floatMenu">
          <SearchDropdown
            searchUser={this.state.searchUser}
            listProfiles={this.state.profiles}
          />
          </div>
        ) : null}
        <Trends />
      </div>
    );
  }
}

/*const SidebarCol = () => {
  return (
    <div className="t-sidebar-col">
      <SearchBar />
      <Trends />
    </div>
  );
};*/

export default SidebarCol;
