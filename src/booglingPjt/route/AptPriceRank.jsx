import React from "react";
import { Link } from "react-router-dom";
import AptPriceRankMain from "../AptPriceRankMain";
const AptPriceRank = ({ item }) => {
  return (
    <div className="apt_ranking">
      <div className="apt_ranking_title">Best 5</div>
      <div className="apt_ranking_main">
        <AptPriceRankMain item={item} />
      </div>
    </div>
  );
};
export default AptPriceRank;
