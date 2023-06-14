



const Search = () => {

    

    return  (
        <div id="wrap">

            <div className="bar">
                <ul className="bar_ul"> 
                    <li className="sign_in"><a href="">로그인</a></li>
                    <li className="sign_up"><a href="">회원가입</a></li>
                    <li className="modify"><a href="">회원정보수정</a></li>
                    
                    <li className="btn"><a href="#none">찾기</a></li>
                    
                    <li className="region_settings">
                        <span>지역설정</span>
                        <select name="region">
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
                                <li><a href="#none">{}</a></li>
                                <li>{}</li>
                                <li>{}</li>
                                <li className="area">{}</li>
                                <li className="floor">{}</li>
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
                            <input type="date" id="date" max="2023-08-20" min="2020-06-05" value=""/>
                            ~
                            <input type="date" id="date" max="2023-08-20" min="2020-06-05" value=""/>
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