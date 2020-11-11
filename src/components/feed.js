import React from "react";
import Tweet from "./tweet/tweet";
import { feed } from "../source";

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: feed,
    };
  }

  aumentarLikes = (index) => {
    let copy = JSON.parse(JSON.stringify(this.state.tweets));
    copy[index].interaction.likes += 1;
    copy[index].verified = true;
    this.setState({ tweets: copy });
  };

  disminuirLikes = (index) => {
    let copy = JSON.parse(JSON.stringify(this.state.tweets));
    copy[index].interaction.likes -= 1;
    copy[index].verified = false;
    this.setState({ tweets: copy });
  };

  render() {
    /*const {profile, profileName, username, content, interaction, display} = {
            profile: "",
            profileName: "",
            username: "",
            content: "",
            interaction: "",
            display: ""
        };*/

    return (
      <div>
        {this.state.tweets.map((tweet, index) => {
          return (
            <Tweet
              profile={tweet.profile}
              profileUrl={tweet.profileName}
              username={"@" + tweet.username}
              time={"・" + tweet.time}
              content={tweet.content}
              interaction={tweet.interaction}
              aumentarLikes={this.aumentarLikes}
              disminuirLikes={this.disminuirLikes}
              verified={tweet.verified}
              solidIcon={this.solidIcon}
              index={index}
            />
          );
        })}
      </div>
    );
  }
}

export default Feed;
