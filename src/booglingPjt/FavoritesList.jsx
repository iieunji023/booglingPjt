import React, { useEffect, useState } from "react";
import LikeBtn from "./LikeBtn";
import { Link } from "react-router-dom";

const FavoritesList = ({ item, m_favoriteApt, favoriteBtn }) => {
    const [favoritesArray, setFavoritesArray] = useState([]);
    const [favoriteListBtn, setFavoriteListBtn] = useState(false);
    // const [m_favoriteApt, setM_favoriteApt] = useState();

    // if(favoriteBtn || favoriteListBtn){
    //     favoritesArray.push({AptName: m_favoriteApt});
    // } else {

    // }

    // let AptOriginalArray = [];
    // item.forEach(function (item) {
    //     item.forEach(function (item2) {
    //         AptOriginalArray.push({
    //             AptName: item2.아파트,
    //             AptAdress: item2.도로명 + item2.도로명건물본번호코드,
    //             AptPrice: item2.거래금액,
    //             AptArea: item2.전용면적,
    //             AptFloor: item2.층,
    //             AptRegion: item2.지역코드,
    //             AptDate: (item2.월) + '월' + (item2.일) + '일',
    //         });
    //     });
    // });
    // let AptFilteredArray = []
    // if (id !== '') {
    //     const filteredsearchValue = AptOriginalArray.filter((ele) => ele.AptName == id);
    //     console.log('[Search] filteredsearchValue: ', filteredsearchValue)
    //     filteredsearchValue.forEach(function (filteredsearchValue) {
    //         AptFilteredArray.push({
    //             AptName: filteredsearchValue.AptName,
    //             AptAdress: filteredsearchValue.AptAdress,
    //             AptPrice: filteredsearchValue.AptPrice,
    //             AptArea: filteredsearchValue.AptArea,
    //             AptFloor: filteredsearchValue.AptFloor,
    //             AptDate: filteredsearchValue.AptDate,
    //         });
    //     });
    // }


    // const [like, setLike] = useState(false)

    // useEffect(() => {
    //     setFavoritesArray((prevFavoritesArray) => [...prevFavoritesArray, m_favoriteApt]);
    //     console.log('[FavoritesList] favoriteListBtn true', favoritesArray);
    // }, [m_favoriteApt]);

    // useEffect(() => {
    //     if (!favoriteBtn || !favoriteListBtn) {
    //         setFavoritesArray((prevFavoritesArray) => prevFavoritesArray.filter((item) => item !== m_favoriteApt));
    //     }
    //     console.log('[FavoritesList] favoriteListBtn false', favoritesArray);
    // }, [favoriteListBtn, favoriteBtn, m_favoriteApt]);

    // useEffect(() => {
    //     loginedMember = userDB.get(signInedMember.current);
    //     setM_like(loginedMember.m_like);
    //   }, []);

    const LikeListBtnOnClick = () => {
        console.log("[AptDetail] click");

        if (favoriteListBtn) {
            return setFavoriteListBtn(false);
        } else {
            return setFavoriteListBtn(true)
        }
    }

    return (
        <ul>
            <li className="title"><Link>아파트이름</Link></li>
            <li class="address">주소</li>
            <li class="like_btn"><button onClick={LikeListBtnOnClick}>
                <LikeBtn onClick={favoriteListBtn} />
            </button></li>
        </ul>
    );
};

export default FavoritesList;