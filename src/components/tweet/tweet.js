import React from "react";
import "./styles.css";
import {
  ChatOutline,
  HeartOutline,
  HeartSolid,
  RefreshOutline,
  RefreshSolid,
  UploadOutline,
  DotsHorizontalOutline,
} from "@graywolfai/react-heroicons";

import MenuTweet from "../menuTweet/menu-tweet";

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
      <div className={`tweetContainer ${this.props.selected}`}>
        <div className="row">
          <div className="c1">
            <img src={this.props.profileUrl} alt="profile" />
          </div>
          <div className="c2">
            <h6>{this.props.profile}</h6>
            <h5>{this.props.username}</h5>
            <p>{this.props.time}</p>
          </div>
          <div className="c4">
            <div className="contextualDotsContainer">
              <div
                className="contextualDotsMenu"
                onClick={() =>
                  this.props.contextFunction.toggleDotsMenuFn(this.props.index)
                }
              >
                <DotsHorizontalOutline />
              </div>
              {this.props.showDotsMenu ? (
                <MenuTweet
                  removeTweet={this.props.contextFunction.deleteATweetFn}
                  index={this.props.index}
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className="row">
          <p className="content">{this.props.content}</p>
        </div>
        <div className="row">
          <div className="c3C">
            <p className="action">
              <ChatOutline />
            </p>
            <p>
              {this.props.interaction.comments >= 1000
                ? this.props.interaction.comments / 1000 + " mil"
                : this.props.interaction.comments}
            </p>
          </div>
          <div className="c3R">
            <p
              className="action"
              onClick={() => this.props.modifyReTweets(this.props.index)}
            >
              {this.props.modifyReTweet
                ? <a className= 'reTweet-solid'>{this.state.refreshSolid}</a>
                : this.state.retweetsIcon}
            </p>
            <p>
              {this.props.interaction.retweets >= 1000
                ? (this.props.interaction.likes / 1000).toFixed(1) + " mil"
                : this.props.interaction.retweets}
            </p>
          </div>
          <div className="c3L">
            <p
              className="action"
              onClick={
                () => this.props.modifyLikes(this.props.index)
                /*this.props.addLike
                  ? () => this.props.disminuirLike(this.props.index)
                  : () => this.props.aumentarLike(this.props.index)*/
              }
            >
              {/*<div className={this.props.modifyLike ? 'heart-solid' : 'likes-icon'}></div>
              <div style={this.props.modifyLike ? {color:'rgb(211, 57, 57)'} : {backgroundColor: '#FFF'}}></div>*/}
              {this.props.modifyLike
                ? <a className= 'heart-solid'>{this.state.heartSolid}</a>
                : this.state.likesIcon}
            </p>
            <p>
              {this.props.interaction.likes >= 1000
                ? (this.props.interaction.likes / 1000).toFixed(1) + " mil"
                : this.props.interaction.likes}
            </p>
          </div>
          <div className="c3U">
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
