import React from "react";
import KakaoMapMain from "./KakaoMapMain";

const Main = () => {
    return (
        <div id="wrap">

            <div className="logo">
                <img src="./imgs/부글링로고.jpg" />
            </div>

            <div classNameName="bar">
                <ul classNameName="bar_ul">
                    <li className="sign_in"><a href="">로그인</a></li>
                    <li className="sign_up"><a href="">회원가입</a></li>
                    <li className="modify"><a href="">회원정보수정</a></li>

                    <li className="btn"><a href="">찾기</a></li>

                    <li className="region_settings">
                        <span>지역설정</span>
                        <select name="region">
                            <option>중구</option>
                            <option>서구</option>
                            <option>동구</option>
                            <option>영도구</option>
                            <option>부산진구</option>
                            <option>동래구</option>
                            <option>남구</option>
                            <option>북구</option>
                            <option>해운대구</option>
                            <option>사하구</option>
                            <option>금정구</option>
                            <option>강서구</option>
                            <option>연제구</option>
                            <option>수영구</option>
                            <option>사상구</option>
                            <option>기장군</option>
                        </select>
                        <select name="region_detail">
                            <option>행정구역</option>
                        </select>
                    </li>

                    <li className="apt_search">
                        <span>검색</span>
                        <input type="text" placeholder="아파트 명" />
                    </li>
                </ul>
            </div>

            <div className="main">
                <ul>

                    <li className="view">
                        <div className="apt_ranking">
                            <div className="apt_ranking_title"><a href="#none">아파트 실거래가 순위</a></div>
                            <div className="apt_ranking_main">
                                <div>
                                    <a href="#none">1. 해운대 아파트</a>
                                    <ul>
                                        <li><img src="./imgs/상승화살표.jpg" /></li>
                                        <li>
                                            <span>5.2% </span>
                                        </li>
                                        <li>
                                            <span>8.2억원</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="#none">2. 센텀 아파트</a>
                                    <ul>
                                        <li><img src="./imgs/상승화살표.jpg" /></li>
                                        <li>
                                            <span>4.6% </span>
                                        </li>
                                        <li>
                                            <span>7.2억원</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="#none">3. 광안리 아파트</a>
                                    <ul>
                                        <li><img src="./imgs/하락화살표.jpg" /></li>
                                        <li>
                                            <span>3.2% </span>
                                        </li>
                                        <li>
                                            <span>4.5억원</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="#none">4. 센텀 아파트</a>
                                    <ul>
                                        <li><img src="./imgs/상승화살표.jpg" /></li>
                                        <li>
                                            <span>4.6% </span>
                                        </li>
                                        <li>
                                            <span>7.2억원</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="#none">5. 광안리 아파트</a>
                                    <ul>
                                        <li><img src="./imgs/하락화살표.jpg" /></li>
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
                                    <a href="#none">1. 해운대 아파트</a>
                                    <ul>
                                        <li><img src="./imgs/상승화살표.jpg" /></li>
                                        <li>
                                            <span>5.2% </span>
                                        </li>
                                        <li>
                                            <span>8.2억원</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="#none">2. 센텀 아파트</a>
                                    <ul>
                                        <li><img src="./imgs/상승화살표.jpg" /></li>
                                        <li>
                                            <span>4.6% </span>
                                        </li>
                                        <li>
                                            <span>7.2억원</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="#none">3. 광안리 아파트</a>
                                    <ul>
                                        <li><img src="./imgs/하락화살표.jpg" /></li>
                                        <li>
                                            <span>3.2% </span>
                                        </li>
                                        <li>
                                            <span>4.5억원</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="#none">4. 센텀 아파트</a>
                                    <ul>
                                        <li><img src="./imgs/상승화살표.jpg" /></li>
                                        <li>
                                            <span>4.6% </span>
                                        </li>
                                        <li>
                                            <span>7.2억원</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="#none">5. 광안리 아파트</a>
                                    <ul>
                                        <li><img src="./imgs/하락화살표.jpg" /></li>
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

                    <KakaoMapMain />

                    <li className="view">
                        <div className="wishlist">
                            <div className="wishlist_title"><a href="#none">즐겨찾기</a></div>
                            <div className="wishlist_main">
                                <div>
                                    <a href="#none">해운대 아파트</a>
                                    <ul>
                                        <li><img src="./imgs/상승화살표.jpg" /></li>
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
                                        <li><img src="./imgs/상승화살표.jpg" /></li>
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
                                        <li><img src="./imgs/하락화살표.jpg" /></li>
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
                                        <li><img src="./imgs/상승화살표.jpg" /></li>
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
                                        <li><img src="./imgs/하락화살표.jpg" /></li>
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

        </div>
    );
}
export default Main;