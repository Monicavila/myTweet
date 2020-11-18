import React from "react";
import {TrashOutline} from "@graywolfai/react-heroicons";

class MenuTweet extends React.Component {
    render () {
        return (
            <div className="dotsMenuContainer" onClick={() => this.props.removeTweet(this.props.index)}>
                <div className="iconDotsMenu"><TrashOutline /></div>
                <div className="txtDotsMenu">Eliminar Tweet</div>
            </div>
        )
    }
}

export default MenuTweet;