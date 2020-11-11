import React from "react";
import "./styles.css";
import {DotsHorizontalOutline} from "@graywolfai/react-heroicons";

class Trends extends React.Component {
    constructor(){
        super();
        this.state = {
            dotsIcon: <DotsHorizontalOutline />,
        }
    }

    render () {
        return(
            <div className="trend-container">
                <div className="row-trend">
                    <div className="c1">
                        <p className="p-title">{this.props.category}</p>
                    </div>
                    <div className="c2">
                        <p className="dotsIcon">{this.state.dotsIcon}</p>
                    </div>
                </div>
                <div className="row-trend">
                    <div className="c1">
                        <p className="trendTitle">{this.props.title}</p>
                    </div>
                    <div className="c2">
                    </div>
                </div>
                <div className="row-trend">
                    <div className="c1">
                        <p className="trendTitle">{this.props.noTweets}</p>
                    </div>
                    <div className="c2">
                    </div>
                </div>
            </div>
        )
    }
}

export default Trends;