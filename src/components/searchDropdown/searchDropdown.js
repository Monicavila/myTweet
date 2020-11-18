import React from "react";
import "./styles.css";

class SearchDropdown extends React.Component {
  render() {
    const newList = this.props.listProfiles.filter((user) =>
      user.username.toLowerCase().includes(this.props.searchUser.toLowerCase())
    );

    return newList.map((user) => {
      return (
        <a
          href="/"
        >
          <div className="container">
            <img
              className="profile-avatar"
              src={user.profileImg}
              alt="profileImage"
            />
            <div className="subContainer">
              <h5 className="profile">{user.profile}</h5>
              <small className="username">{user.username}</small>
            </div>
          </div>
        </a>
      );
    });
  }
}

export default SearchDropdown;
