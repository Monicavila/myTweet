import React from "react";
import { SearchOutline } from "@graywolfai/react-heroicons";
import Trends from "../trends/trends";
import { trends } from "../secondSource";

class SidebarCol extends React.Component {
  constructor() {
    super();
    this.state = {
      searchIcon: <SearchOutline />,
      trendings: trends,
    };
  }
  render() {
    return (
      <div className="t-sidebar-col">
        <div className="search">
          <p className="searchIcon">{this.state.searchIcon}</p>
          <input className="searchBar" placeholder="Buscar en Twitter" />
        </div>
        <div className="trends">
          <p className="pTrends">Qué está pasando</p>
          <div>
            <Trends
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
                <Trends
                  category={trend.category}
                  title={trend.title}
                  noTweets={trend.noTweets}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

/*const SidebarCol = (props) => {
  return (
    <div className="t-sidebar-col">
      <div className="search">
        <i>
          <SearchOutline />
        </i>
        <input placeholder="Buscar en Twitter" />
      </div>
    </div>
  );
};*/

export default SidebarCol;
