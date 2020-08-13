import React from "react";
import "./App.css";
import Navigation from "./component/navMenu";
import axios from "axios";
import GameCard from "./component/gameCard";

export default class CasinoHat extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation></Navigation>
        </header>
      </div>
    );
  }
}
