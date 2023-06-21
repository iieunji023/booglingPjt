import React from "react";
import './css/favorites.css';
import { Link } from "react-router-dom";

  return (
    <>
      {
        localDataList.map((item, idx) => (
          idx <= 7 ?
            <div className="wishlist_main">
              <Link to={`/apt_detail/${item}`} >{item}</Link>

            </div>
            : ""
        ))
      }
    </>
  );
}

export default Favorites;