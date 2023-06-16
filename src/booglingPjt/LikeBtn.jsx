import React from "react";

const LikeBtn = ({onClick}) => {
    return(
        <img src={onClick === true ? "./imgs/full_star.png" : "./imgs/empty_star.png"}/>
    );
}

export default LikeBtn;