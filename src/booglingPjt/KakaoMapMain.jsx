import React, { useEffect } from "react";

const { kakao } = window;

const KakaoMapMain = () => {

    useEffect(() => {
        const container = document.getElementById('map');

        const options = {
            center: new kakao.maps.LatLng(35.172854800000, 129.130733800000),
            level: 3
        };

        const map = new kakao.maps.Map(container, options);
    }, [])

    return (

        <li id="map" style={{ width: "800px", height: "725px" }}>
        </li >
    );

}

export default KakaoMapMain;