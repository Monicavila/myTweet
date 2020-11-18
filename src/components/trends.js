import React from "react";
import FirtsTrend from "./trend/firstTrend";
import foto from "../imgs/foto.png";
import Trend from "./trend/trend";
import { trends } from "./secondSource";

class Trends extends React.Component {
  constructor() {
    super();
    this.state = {
      trendings: trends,
    };
  }
  render() {
    return (
      <div className="trends">
        <p className="pTrends">Qué está pasando</p>
        <FirtsTrend image={foto} />
        {this.state.trendings.map((trend) => {
          return (
            <Trend
              key={trend.title}
              category={trend.category}
              title={trend.title}
              noTweets={trend.noTweets}
            />
          );
        })}
      </div>
    );
  }
}

export default Trends;
