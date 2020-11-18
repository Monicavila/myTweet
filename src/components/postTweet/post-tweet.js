import React from "react";
import "./styles.css";

class PostTweet extends React.Component {

  render () {
    return (
      <div>
        <div className="t-row t-post-tweet">
          <div className="t-profile-img">
            <img src={this.props.profileUrl} alt="profile" />
          </div>
          <form>
            <input
              id="inputTweet"
              type="text"
              placeholder="¿Qué está pasando?"
              value={this.props.newTweet}
              onChange={this.props.handleInputFn}
            />
            <div className="t-post-options">
              <span id="btnTweet" className="btnTwittear" onClick={this.props.sendTweetFn}>
                Twittear
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default PostTweet;
