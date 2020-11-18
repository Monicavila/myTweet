import React from "react";
import Tweet from "./tweet/tweet";
import { feed } from "../source";
import moment from "moment";

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: feed,
    };
  }

  modifyLikes = (index) => {
    let copy = JSON.parse(JSON.stringify(this.state.tweets));
    if (copy[index].modifyLike === false) {
      copy[index].interaction.likes += 1;
      copy[index].modifyLike = true;
    } else if (copy[index].modifyLike === true) {
      copy[index].interaction.likes -= 1;
      copy[index].modifyLike = false;
    }
    this.setState({ tweets: copy });
  };

  modifyReTweets = (index) => {
    let copy = JSON.parse(JSON.stringify(this.state.tweets));
    if (copy[index].modifyReTweet === false) {
      copy[index].interaction.retweets += 1;
      copy[index].modifyReTweet = true;
    } else if (copy[index].modifyReTweet === true) {
      copy[index].interaction.retweets -= 1;
      copy[index].modifyReTweet = false;
    }
    this.setState({ tweets: copy });
  };

  deleteATweet = (index) => {
    let copy = [...this.state.tweets];
    copy.splice(index, 1);
    this.setState({ tweets: copy });
  };

  toggleDotsMenu = (index) => {
    let copy = JSON.parse(JSON.stringify(this.state.tweets));
    copy[index].showDotsMenu = !copy[index].showDotsMenu;
    this.setState({ tweets: copy });
  };

  sendTweet = () => {
    let copy = JSON.parse(JSON.stringify(this.state.tweets));
    const newTweetObj = {
      profile: "Mónica Ávila",
      profileName:
        "https://avatarfiles.alphacoders.com/147/thumb-1920-147101.png",
      username: "mavila",
      time: moment().format("LT"),
      content: this.props.newTweet,
      interaction: {
        comments: "",
        retweets: "",
        likes: "",
      },
      modifyLike: false,
      modifyReTweet: false,
      showDotsMenu: false,
      selected: false,
      verified: true,
      blocked: false,
    };
    copy.unshift(newTweetObj);
    this.setState({ tweets: copy});
    this.props.deleteInputFn();
  };

  render() {

    const contextFunction = {
      deleteATweetFn: this.deleteATweet,
      toggleDotsMenuFn: this.toggleDotsMenu,
    };
    return (
      <div>
        {this.state.tweets.map((tweet, index) => {
          return (
            <Tweet
              key={index}
              profile={tweet.profile}
              profileUrl={tweet.profileName}
              username={"@" + tweet.username}
              time={"・" + tweet.time}
              content={tweet.content}
              interaction={tweet.interaction}
              modifyLike={tweet.modifyLike}
              modifyReTweet={tweet.modifyReTweet}
              showDotsMenu={tweet.showDotsMenu}
              selected={tweet.selected}
              contextFunction={contextFunction}
              modifyLikes={this.modifyLikes}
              modifyReTweets={this.modifyReTweets}
              index={index}
            />
          );
        })}
      </div>
    );
  }
}

export default Feed;