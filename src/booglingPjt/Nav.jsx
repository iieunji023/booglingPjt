import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div className="bar">
                <ul className="bar_ul">

                    <li className="sign_in"><Link>로그인</Link></li>
                    <li className="sign_up"><Link>회원가입</Link></li>
                    <li className="modify"><Link>회원정보수정</Link></li>

                    <li className="btn"><Link>찾기</Link></li>

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
                    </li>

                    <li className="apt_search">
                        <span>검색</span>
                        <input type="text" placeholder="아파트 명" />
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;