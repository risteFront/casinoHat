import React from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewGame from "./newGame";
import GameCard from "./gameCard";
import JackPots from "./jackPots";
import Slots from "./slots";
import Live from "./live";
import BlackJack from "./blackjack";

function Navigation() {
  return (
    <Router>
      <div className="nav-container">
        <div className="flex-menu">
          <div>
            {" "}
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/"
            >
              Top Games
            </Link>
          </div>
          <div>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/newgames"
            >
              New Games
            </Link>
          </div>
          <div>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/slots"
            >
              Slots
            </Link>
          </div>
          <div>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/jackpots"
            >
              JackPots
            </Link>
          </div>
          <div>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/live"
            >
              Live
            </Link>
          </div>
          <div>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/blackJack"
            >
              BlackJack
            </Link>
          </div>
          <div>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/roulette"
            >
              Rroulette
            </Link>
          </div>
          <div>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/table"
            >
              Table
            </Link>
          </div>
          <div>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/poker"
            >
              Poker
            </Link>
          </div>
          <div>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/other"
            >
              Other
            </Link>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <GameCard />
        </Route>
        <Route path="/newgames">
          <NewGame />
        </Route>
        <Route path="/jackpots">
          <JackPots />
        </Route>
        <Route path="/live">
          <Live />
        </Route>
        <Route path="/live">
          <JackPots />
        </Route>
        <Route path="/slots">
          <Slots />
        </Route>
        <Route path="/blackjack">
          <BlackJack />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navigation;
