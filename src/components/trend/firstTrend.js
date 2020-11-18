import React from "react";
import "./styles.css";

import { DotsHorizontalOutline } from "@graywolfai/react-heroicons";

class FirstTrend extends React.Component {
  render() {
    return (
      <div className="trend-container">
        <div className="row-trend">
          <div className="p-font">
            Elecciones EE.UU.・
            <button className="redTxt">EN DIRECTO</button>
          </div>
          <div className="contextualTrendDotsMenu">
            <DotsHorizontalOutline />
          </div>
        </div>
        <div className="rowFirstTrend">
          <p className="trendTitle">
            Elecciones EE.UU.: Votantes esperan resultados en estados clave
            mientras continua el conteo de votos
          </p>
          <img src={this.props.image} alt="img"/>
        </div>
        <div className="row-trend">
          <p className="p-font">
            Tendencias sobre
            <span className="blueTxt"> Biden - 264, Trump 214</span>
          </p>
        </div>
      </div>
    );
  }
}

export default FirstTrend;
