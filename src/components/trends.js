import React from "react";
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
          <Trend
            category={
              <p>
                Elecciones EE.UU.・
                <button className="redTxt">EN DIRECTO</button>
              </p>
            }
            imagen={
              <img scr="../imgs/Captura de Pantalla 2020-11-06 a la(s) 18.45.09.png" />
            }
            title="Elecciones EE.UU.: Votantes esperan resultados en estados clave mientras continua el conteo de votos"
            noTweets="Tendencias sobre Biden - 264, Trump 214"
          />
          {this.state.trendings.map((trend) => {
            return (
              <Trend
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
