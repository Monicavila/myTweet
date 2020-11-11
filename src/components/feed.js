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

  aumentarLike = (index) => {
    let copy = JSON.parse(JSON.stringify(this.state.tweets));
    copy[index].interaction.likes += 1;
    copy[index].addLike = true;
    this.setState({ tweets: copy });
  };

  disminuirLike = (index) => {
    let copy = JSON.parse(JSON.stringify(this.state.tweets));
    copy[index].interaction.likes -= 1;
    copy[index].addLike = false;
    this.setState({ tweets: copy });
  };

  aumentarTweet = (index) => {
    let copy = JSON.parse(JSON.stringify(this.state.tweets));
    copy[index].interaction.retweets += 1;
    copy[index].addReTweet = true;
    this.setState({ tweets: copy });
  };

  disminuirTweet = (index) => {
    let copy = JSON.parse(JSON.stringify(this.state.tweets));
    copy[index].interaction.retweets -= 1;
    copy[index].addReTweet = false;
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
              aumentarLike={this.aumentarLike}
              disminuirLike={this.disminuirLike}
              aumentarTweet={this.aumentarTweet}
              disminuirTweet={this.disminuirTweet}
              addLike={tweet.addLike}
              addReTweet={tweet.addReTweet}
              index={index}
            />
          );
        })}
      </div>
    );
  }
}

export default Feed;
