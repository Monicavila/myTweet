import React from "react";
import PostTweet from "../postTweet/post-tweet";
import Feed from "../feed";

class PrimaryCol extends React.Component {
  constructor() {
    super();
    this.Feed = React.createRef();
    this.state = {
      newTweet: "",
    };
  }

  handleInput = (event) => {
    const tweet = event.target.value;
    this.setState({ newTweet: tweet });
  };

  deleteInput = () => {
    this.setState({ newTweet: "" });
  };

  triggerSendTweet = () => {
    this.Feed.current.sendTweet();
  };

  render() {
    return (
      <div className="t-col-container">
        <h3>Inicio</h3>
        <PostTweet
          profileUrl={this.props.profileUrl}
          sendTweetFn={this.triggerSendTweet}
          handleInputFn={this.handleInput}
          newTweet={this.state.newTweet}
        />
        <Feed
          ref={this.Feed}
          newTweet={this.state.newTweet}
          deleteInputFn={this.deleteInput}
        />
      </div>
    );
  }
}

export default PrimaryCol;
