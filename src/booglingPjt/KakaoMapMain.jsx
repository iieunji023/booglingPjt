import React, { useEffect } from "react";

const { kakao } = window;

const KakaoMapMain = () => {

    useEffect(() => {
        const mapContainer = document.getElementById('map');
        mapOption = {
            center: new kakao.maps.LatLng(35.172854800000, 129.130733800000), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
        // const options = {
        //     center: new kakao.maps.LatLng(35.172854800000, 129.130733800000),
        //     level: 3
        // };

        const map = new kakao.maps.Map(mapContainer, mapOption);
    }, [])

    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch('제주특별자치도 제주시 첨단로 242', function (result, status) {

        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {

            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const infowindow = new kakao.maps.InfoWindow({
                content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
        }
    });

    return (

        <li id="map" style={{ width: "500px", height: "500px" }}>
        </li >
    );

}

export default KakaoMapMain;