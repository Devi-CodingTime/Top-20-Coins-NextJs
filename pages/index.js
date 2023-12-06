import CoinDisplay from "../components/CoinDisplay";
import React, { useState, useEffect } from "react";
export default function Home() {
  async function getcoins(){
    const [coins, setCoins] = useState([]);
    let data = await fetch("https://api.coinlore.net/api/tickers/");
    let res = await data.json();
    setCoins(res);
    console.log(res);
  }
  useEffect(()=>{
    getcoins();
  },[]);
  return <CoinDisplay coins/>;
}
