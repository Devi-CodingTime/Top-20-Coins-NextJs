import React, { useState, useEffect } from "react";
import CoinCard from "./CoinCard";

function CoinDisplay({ coin }) {
  const [coins, setCoins] = useState([]);
  useEffect(()=>{
    setCoins(coin);
  },[]);
  return (
    <div className="home">
      <h1>Top 20 Cryptos</h1>
      <div className="coins-container">
        {coins.length>0 && coins.map((coin) => {
          
          return(<CoinCard coin={coin}/>)
        }
        )}
      </div>
    </div>
  );
}

export default CoinDisplay;
