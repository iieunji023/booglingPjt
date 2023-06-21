import React, { useEffect, useState } from "react";
import KakaoMapMain from "../KakaoMapMain";
import { Link, useNavigate } from "react-router-dom";
import './css/main.css';
import AptPriceRank from "./AptPriceRank";
import AptRisingRank from "./AptRisingRank";

const Main = ({ item, realTimeSearch }) => {
    // console.log("item ", item)
    console.log("[Main]realTimeSearch ", realTimeSearch)
    return (
        <main>
            <div className="main">
                <ul>
                    <li className="view">

                        {item.length !== 0 ? <AptPriceRank item={item} /> : null}

                        <div className="apt_top">
                            {item.length !== 0 ? <AptRisingRank item={item} /> : null}
                        </div>



                    </li>

                    <li className="map">
                        {
                            item.length !== 0 ? <KakaoMapMain item={item} /> : null
                        }
                    </li>

                    <li className="view">
                        <div className="wishlist">
                            <div className="wishlist_title"><Link to="/user/favorites">즐겨찾기</Link></div>
                            <div className="wishlist_main">
                                <div>
                                    <a href="#none">해운대 아파트</a>
                                    <ul>
                                        <li><p className="increase">상승</p></li>
                                        <li>
                                            <span>5.2% </span>
                                        </li>
                                        <li>
                                            <span>8.2억원</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="#none">센텀 아파트</a>
                                    <ul>
                                        <li><p className="increase">상승</p></li>
                                        <li>
                                            <span>4.6% </span>
                                        </li>
                                        <li>
                                            <span>7.2억원</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="#none">광안리 아파트</a>
                                    <ul>
                                        <li><p className="decrease">하락</p></li>
                                        <li>
                                            <span>3.2% </span>
                                        </li>
                                        <li>
                                            <span>4.5억원</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="#none">센텀 아파트</a>
                                    <ul>
                                        <li><p className="increase">상승</p></li>
                                        <li>
                                            <span>4.6%</span>
                                        </li>
                                        <li>
                                            <span>7.2억원</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="#none">광안리 아파트</a>
                                    <ul>
                                        <li><p className="decrease">하락</p></li>
                                        <li>
                                            <span>3.2% </span>
                                        </li>
                                        <li>
                                            <span>4.5억원</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="real_time_search">
                            <div className="real_time_search_title">실시간 검색 내역</div>
                            <div className="real_time_search_main">
                                {
                                    realTimeSearch != '' ? 
                                    realTimeSearch.map((element) => {
                                        return (
                                            <div>
                                                <a href="#none">{element}</a>
                                            </div>
                                        );
                                    })
                                    
                                    : <div>실시간 검색내역 없음</div>

                                }

                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </main >
    );
}
export default Main;