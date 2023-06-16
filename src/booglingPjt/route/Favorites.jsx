import React from "react";
import './css/favorites.css';
import { Link } from "react-router-dom";

const Favorites = () => {
  return(
    <section>
      <div className="favorites">
        <div class="title">즐겨찾기</div>
        <div class="list">
          <ul class="list_name">
            <li>아파트</li>
            <li>거래가격</li>
            <li class="area">평수</li>
            <li class="floor">층수</li>
            <li class="btn"><input type="checkbox" id="toggle" hidden/> </li>
          </ul>
          
        </div>
        <div class="page">
          <ul>
            <li><a href="#none">&#60;</a>&nbsp; &nbsp;</li>
            <li><a href="#none">1</a>&nbsp;</li>
            <li><a href="#none">2</a>&nbsp;</li>
            <li><a href="#none">3</a>&nbsp;</li>
            <li><a href="#none">4</a>&nbsp;</li>
            <li><a href="#none">5</a>&nbsp; &nbsp;</li>
            <li><a href="#none">&#62;</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Favorites;
