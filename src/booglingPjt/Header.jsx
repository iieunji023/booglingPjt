import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link><img src="./imgs/부글링로고.jpg" /></Link>
            </div>
        </header>
    );
}
export default Header;