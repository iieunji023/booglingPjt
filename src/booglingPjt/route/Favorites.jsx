import React from "react";
import './css/favorites.css';
import { Link } from "react-router-dom";
import FavoritesList from "../FavoritesList";

const Favorites = () => {
  return (
    <section>
      <div className="favorites">
        <div className="favorite_title">즐겨찾기</div>
        <div className="favorite_list">
          <ul className="favorite_list_name">
            <li>아파트</li>
            <li>주소</li>
            <li className="btn"></li>
          </ul>
          <FavoritesList />
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