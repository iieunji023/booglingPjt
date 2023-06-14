import React, { useEffect, useState } from "react";
import './css/search.css'
import './css/common.css'
import axios from "axios";

const serviceKey = "IyQg8I2dXbv8kkUs2Gki35cm64Cu%2BxaUWkNCsFipH3WWV6%2FiZD4HHrq4v%2Bykezvft92l9H5S0zULIYrQonfaUA%3D%3D" // 서비스키(필수)
const pageNo = 1;          // 페이지 번호(옵션)
const numOfRows = 3;     // 한 페이지 결과 수(옵션)



const Search = () => {

    const [lawdCd, setLawdCd] = useState('');
    const [dealYMD, setdealYMD] = useState('');
    const [item, setItem] = useState([]);       //중복값이 있는 아파트명 목록

    useEffect(() => {
        console.log('useEffect!!');

        getRemoteData();

    }, [lawdCd]);

    // let LAWD_CD = `26${lawdCd}0`;           // 지역코드(필수)
    // let DEAL_YMD = '201512';                // 계약년월(필수)

    // Handler START
    const lawdCdChangeHandler = (e) => {
        console.log('[Search] lawdCdChangeHandler() CALLED!!');

        setLawdCd(() => '26' + e.target.value + '0');

    }
    // Handler END

    async function getData(y, m) {
        console.log('[Search] getData() CALLED!!');

        try {

            let deal_ymd = (y + m) * 1 // 년도월, ex) 2022년 01월 == 202201

            let url = `http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&LAWD_CD=${lawdCd}&DEAL_YMD=${deal_ymd}`;
            const response = await axios.get(url);
            // console.log('response ---> \n', response.data.response.body.items.item);

            let items = response.data.response.body.items.item;

            console.log(items)

            // items.map((item, idx) => {
            //     console.log('idx  ---> ', idx);
            //     console.log('item ---> ', item);
            //     console.log('item ---> ', item.아파트);
            // });

        } catch (error) {
            console.log(error);

        } finally {
            console.log('finally');

        }

    }

    async function getRemoteData() {
        console.log('[Search] getRemoteData() CALLED!!');

        let year = ['2020'];
        let month = ['11'];

        try {
            year.map(function (y) {
                month.map(function (m) {
                    getData(y, m);

                });
            });

        } catch (error) {
            console.log(error);

        } finally {
            console.log('finally');

        }

    }

    return (
        <div id="wrap">

            <div className="bar">
                <ul className="bar_ul">
                    <li className="sign_in"><a href="">로그인</a></li>
                    <li className="sign_up"><a href="">회원가입</a></li>
                    <li className="modify"><a href="">회원정보수정</a></li>

                    <li className="btn"><a href="#none">찾기</a></li>

                    <li className="region_settings">
                        <span>지역설정</span>
                        <select name="region" onChange={lawdCdChangeHandler}>
                            <option>지역설정</option>
                            <option value='11'>중구</option>
                            <option value='14'>서구</option>
                            <option value='17'>동구</option>
                            <option value='20'>영도구</option>
                            <option value='23'>부산진구</option>
                            <option value='26'>동래구</option>
                            <option value='29'>남구</option>
                            <option value='32'>북구</option>
                            <option value='35'>해운대구</option>
                            <option value='38'>사하구</option>
                            <option value='41'>금정구</option>
                            <option value='44'>강서구</option>
                            <option value='47'>연제구</option>
                            <option value='50'>수영구</option>
                            <option value='53'>사상구</option>
                            <option value='71'>기장군</option>
                        </select>
                    </li>
                    <li className="apt_search">
                        <a href="#none">검색</a>
                        <input type="text" placeholder="아파트 명" />
                    </li>
                </ul>
            </div>

            <div className="main">
                <ul>
                    <li className="search_result">
                        <div className="title">"아파트명" 검색결과</div>
                        <div className="list">
                            <ul className="list_name">
                                <li>아파트</li>
                                <li>주소</li>
                                <li>거래가격</li>
                                <li className="area">평수</li>
                                <li className="floor">층수</li>
                            </ul>
                            <ul>
                                <li><a href="#none">{ }</a></li>
                                <li>{ }</li>
                                <li>{ }</li>
                                <li className="area">{ }</li>
                                <li className="floor">{ }</li>
                            </ul>


                        </div>

                        <div className="page">
                            <ul>
                                <li><a href="#none">&#60;</a>&nbsp; &nbsp;</li>
                                <li><a href="#none">1</a>&nbsp;</li>
                                <li><a href="#none">2</a>&nbsp;</li>
                                <li><a href="#none">3</a>&nbsp;</li>
                                <li><a href="#none">4</a>&nbsp;</li>
                                <li><a href="#none">5</a>&nbsp; &nbsp;</li>
                                <li><a href="#none">&#62;</a>&nbsp; &nbsp;</li>
                            </ul>
                        </div>

                    </li>
                    <li className="menu">
                        <div className="contract_date">
                            <p>계약일자</p>
                            <input type="date" id="date" max="2023-08-20" min="2020-06-05" value="" />
                            ~
                            <input type="date" id="date" max="2023-08-20" min="2020-06-05" value="" />
                        </div>
                        <div className="price_settings">
                            <p>금액설정</p>
                            <select name="min_price">
                                <option>전체금액</option>
                                <option>1억 이하</option>
                                <option>2억 이하</option>
                                <option>3억 이하</option>
                                <option>4억 이하</option>
                                <option>5억 이하</option>
                                <option>7억 이하</option>
                                <option>8억 이하</option>
                                <option>9억 이하</option>
                                <option>10억 이하</option>
                                <option>10억 이상</option>
                            </select>
                            <span> ~ </span>
                            <select name="max_price">
                                <option>전체금액</option>
                                <option>1억 이하</option>
                                <option>2억 이하</option>
                                <option>3억 이하</option>
                                <option>4억 이하</option>
                                <option>5억 이하</option>
                                <option>7억 이하</option>
                                <option>8억 이하</option>
                                <option>9억 이하</option>
                                <option>10억 이하</option>
                                <option>10억 이상</option>
                            </select>

                        </div>
                        <div className="area_settings">
                            <p>면적설정</p>
                            <select name="area">
                                <option>모든평수</option>
                                <option>10평대</option>
                                <option>20평대</option>
                                <option>30평대</option>
                                <option>40평대</option>
                                <option>50평대</option>
                                <option>60평대</option>
                                <option>70평 이상</option>
                            </select>
                        </div>
                        <div className="search_btn">
                            <a href="#none">찾기</a>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Search;