import React from "react";
import "./styles.css";
import { DotsHorizontalOutline } from "@graywolfai/react-heroicons";

class Trend extends React.Component {
  render() {
    return (
      <div className="trend-container">
        <div className="row-trend">
          <p className="p-font">{this.props.category}</p>
        </div>
        <div className="row-trend">
          <p className="trendTitle">{this.props.title}</p>
        </div>
        <div className="row-trend">
          <p className="p-font">
            {this.props.noTweets >= 1000
              ? this.props.noTweets / 1000 + " mil"
              : this.props.noTweets}
          </p>
        </div>
      </div>
    );
  }
}

export default Trend;
