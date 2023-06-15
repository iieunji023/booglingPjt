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
                        <span>검색</span>
                        <input type="text" placeholder="아파트 명" />
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;