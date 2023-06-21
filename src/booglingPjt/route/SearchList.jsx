import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Btn from "../Btn"



const SearchList = ({ AptName, AptAdress, AptPrice, AptArea, AptFloor }) => {

    return (

        <ul>
            <li>
                <Link to={`/apt_detail/${AptName}`} >{AptName}</Link>
            </li>
            <li>{AptAdress}</li>
            <li>{AptPrice}</li>
            <li className="area">{AptArea}</li>
            <li className="floor">{AptFloor}</li>
            {/* <li class="like_btn"><Btn like={like}/></li> */}
        </ul>
    );
}
export default SearchList;