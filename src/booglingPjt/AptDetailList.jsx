import React, { useState } from "react";

const AptDetailList = ({ price, date, area, floor }) => {
    return (
        <ul>
            <li>{price}</li>
            <li>{date}</li>
            <li>{area}</li>
            <li>{floor}</li>
        </ul>
    );
}

export default AptDetailList;