import React from "react";
import KakaoMapMain from "../KakaoMapMain";
import { Link } from "react-router-dom";
import './css/main.css';

const Main = ({ item }) => {
    return (
        <section>   
            <div className="main">
                <ul>

                    <li className="view">
                        <div className="apt_ranking">
                            <div className="apt_ranking_title"><a href="#none">아파트 실거래가 순위</a></div>
                            <div className="apt_ranking_main">
                                <div>
                                    <Link>1. 해운대 아파트</Link>
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
                                    <Link>2. 센텀 아파트</Link>
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
                                    <Link>3. 광안리 아파트</Link>
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
                                    <Link>4. 센텀 아파트</Link>
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
                                    <Link>5. 광안리 아파트</Link>
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

                        <div className="apt_top">
                            <div className="apt_top_title"><a href="#none">올해의 급상승 아파트</a></div>
                            <div className="apt_top_main">
                                <div>
                                    <Link>1. 해운대 아파트</Link>
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
                                    <Link>2. 센텀 아파트</Link>
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
                                    <Link>3. 광안리 아파트</Link>
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
                                    <Link>4. 센텀 아파트</Link>
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
                                    <Link>5. 광안리 아파트</Link>
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


                    </li>

                    <li className="map">
                        <KakaoMapMain item={item}/>
                    </li>

                    <li className="view">
                        <div className="wishlist">
                            <div className="wishlist_title"><a href="#none">즐겨찾기</a></div>
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
                            <div className="real_time_search_title"><a href="#none">실시간 검색 내역</a></div>
                            <div className="real_time_search_main">
                                <div>
                                    <a href="#none">해운대</a>
                                </div>
                                <div>
                                    <a href="#none">베스핀</a>
                                </div>
                                <div>
                                    <a href="#none">글로벌</a>
                                </div>
                                <div>
                                    <a href="#none">Learn</a>
                                </div>
                                <div>
                                    <a href="#none">Do</a>
                                </div>
                                <div>
                                    <a href="#none">Share</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
    );
}
export default Main;