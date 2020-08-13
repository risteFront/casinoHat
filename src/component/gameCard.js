import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function GameCard(props) {
  const [games, setData] = useState([]);
  useEffect(() => {
    setInterval(() => {
      const fetchData = async () => {
        const result = await axios
          .get(`http://stage.whgstage.com/front-end-test/games.php`)
          .then((res) => {
            const games = res.data.slice(0, 80);
            setData(games);
          });
      };

      fetchData();
    }, 1000);
  }, []);
  const [jackPot, setJackpot] = useState([]);
  useEffect(() => {
    setInterval(() => {
      const fetchData = async () => {
        const result = await axios
          .get(`http://stage.whgstage.com/front-end-test/jackpots.php`)
          .then((res) => {
            console.log(res.data);
            const games = res.data;
            setJackpot(games);
          });
      };

      fetchData();
    }, 1000);
  }, []);
  return (
    <div className="img-container">
      {games.map((item, i) => {
        let jackPots = [];
        // let ammount = []
        jackPot.map((jack) => {
          jackPots.push({ name: jack.game, amount: jack.amount });
          //  ammount.push(jack.ammount)
        });
        // console.log(jackPots);
        return (
          <div key={item.image}>
            <div className="article-card">
              <div className="box">
                {item.categories.includes("new") == true ? (
                  <div className="ribbon2 ribbon-top-right">
                    <span>New</span>
                  </div>
                ) : null}
                {item.categories.includes("top") == true ? (
                  <div className="ribbon ribbon-top-left">
                    <span>Top</span>
                  </div>
                ) : null}
              </div>
              <img className="article-img" src={item.image}></img>
              {jackPots.map((jc) => {
                if (jc.name == item.id) {
                  return (
                    <div>
                      <div key={jc.name} className="jackpot">
                        JACKPOT <span>{jc.amount}</span>
                      </div>
                    </div>
                  );
                }
                jackPots = [];
              })}
              <div class="container-btn">
                <div class="button-gr">Play Game</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default GameCard;
