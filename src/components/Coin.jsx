import React from "react";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import "./../css/Coin.css";

export default function Coin({key, id, marketCapRank, icon, coinName, coinSymbol, price,priceChange,sparkline}) {
 
  return (
    <div className="coin__section" key={coinName}>
      <div className="coin">
        <div className="firstSection">
          <p>{marketCapRank}</p>
        </div>
        <div className="twoSection">
          <div className="secondSection">
            <div className="coinImg__section">
              <img className="coinImg" src={icon} alt="Crypto icon" />
            </div>
            <div className="coinTitle">
              <h2 className="coinSymbol">{coinSymbol}</h2>
              <small>•</small>
              <div className="coinName__section" title={coinName}>
                <p className="coinName" title={coinName}>
                  {coinName}
                </p>
              </div>
            </div>
          </div>
          <div className="thirdSection">
            <p className="coinPrice">${price.toFixed(2)}</p>
          </div>
        </div>
        <div className="fourthSection">
          {priceChange < 0 ? (
            <p className="priceChange red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="priceChange green">
              +{priceChange.toFixed(2)}%
            </p>
          )}
        </div>
        <div className="fifthSection">
          {priceChange < 0 ? (
            <Sparklines data={sparkline} margin={5}>
              <SparklinesLine color="#df8653" />
            </Sparklines>
          ) : (
            <Sparklines data={sparkline} margin={5}>
              <SparklinesLine color="#5353e4" />
            </Sparklines>
          )}
        </div>
        <div className="sixthSection">
          <Link className="coinBtn__section" to={`/CoinPage/${id}`}>
            <button className="coinBtn">More Info</button>
          </Link>
        </div>
      </div>
    </div>
  );
}