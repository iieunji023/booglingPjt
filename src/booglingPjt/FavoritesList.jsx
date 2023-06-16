import React, { useEffect, useState } from "react";
import LikeBtn from "./LikeBtn";
import { Link } from "react-router-dom";

const FavoritesList = ({}) => {

    const [like, setLike] = useState(false)

    // useEffect(() => {
    //     loginedMember = userDB.get(signInedMember.current);
    //     setM_like(loginedMember.m_like);
    //   }, []);

    return(
        <ul>
            <li className="name"><Link>센텀 아파트</Link></li>
            <li className="price">5억 2000</li>
            <li class="area">52</li>
            <li class="floor">25</li>
            <li class="like_btn"><LikeBtn onClick={LikeBtnOnClick}/></li>
          </ul>
    );
};

export default FavoritesList;