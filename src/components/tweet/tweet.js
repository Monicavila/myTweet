import React from "react";
import "./styles.css";
import {
  ChatOutline,
  HeartOutline,
  HeartSolid,
  RefreshOutline,
  RefreshSolid,
  UploadOutline,
} from "@graywolfai/react-heroicons";

class Tweet extends React.Component {
  constructor() {
    super();
    this.state = {
      retweetsIcon: <RefreshOutline />,
      refreshSolid: <RefreshSolid />,
      likesIcon: <HeartOutline />,
      heartSolid: <HeartSolid />,
    };
  }

  render() {
    return (
      <div className="tweet-container">
        <div className="row">
          <div className="c1">
            <img src={this.props.profileUrl} alt="profile" />
          </div>
          <div className="c2">
            <h6>{this.props.profile}</h6>
            <h5>{this.props.username}</h5>
            <p>{this.props.time}</p>
          </div>
          <div className="c3"></div>
        </div>
        <div className="row">
          <p className="content">{this.props.content}</p>
        </div>
        <div className="row">
          <div className="c3">
            <p className="action">
              <ChatOutline />
            </p>
            <p>
              {this.props.interaction.comments >= 1000
                ? this.props.interaction.comments / 1000 + " mil"
                : this.props.interaction.comments}
            </p>
          </div>
          <div className="c3">
            <p
              className="action"
              onClick={
                this.props.addReTweet
                  ? () => this.props.disminuirTweet(this.props.index)
                  : () => this.props.aumentarTweet(this.props.index)
              }
            >
              {this.props.addReTweet
                ? this.state.refreshSolid
                : this.state.retweetsIcon}
            </p>
            <p>
              {this.props.interaction.retweets >= 1000
                ? this.props.interaction.retweets / 1000 + " mil"
                : this.props.interaction.retweets}
            </p>
          </div>
          <div className="c3">
            <p
              className="action"
              onClick={
                this.props.addLike
                  ? () => this.props.disminuirLike(this.props.index)
                  : () => this.props.aumentarLike(this.props.index)
              }
            >
              {this.props.addLike
                ? this.state.heartSolid
                : this.state.likesIcon}
            </p>
            {/*<p className="action" {this.props.verified?`onClick=${()=>this.props.disminuirLikes(this.props.index)}`:`onClick=${()=>this.props.aumentarLikes(this.props.index)}`}><HeartOutline /></p>*/}
            <p>
              {this.props.interaction.likes >= 1000
                ? this.props.interaction.likes / 1000 + " mil"
                : this.props.interaction.likes}
            </p>
          </div>
          <div className="c3">
            <p className="action">
              <UploadOutline />
            </p>
          </div>
          <div className="c4"></div>
        </div>
      </div>
    );
  }
}

export default Tweet;

// https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg
//@TwitterSafety
//Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus et enim sodales congue sed ac ante. Maecenas tincidunt tortor vel lorem semper vestibulum. Phasellus placerat arcu ac dui ultricies, sed tempor dolor rhoncus. Cras id leo sem.
