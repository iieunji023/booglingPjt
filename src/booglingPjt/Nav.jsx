import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useState,
} from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = forwardRef(({ signInedMember, userDB }, ref) => {
    const [loginedMember, setLoginedMember] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");


    useEffect(() => {
        console.log("[Nav] useEffect() CALLED!!");
    });

    const changeLoginMember = (signInedMember) => {
        console.log("[Nav] changeLoginMember() CALLED!!");
        console.log("[Nav] signInedMember.current", signInedMember.current);

        setLoginedMember(signInedMember.current);
    };

    // Nav의 changeLoginMember 함수를 하위에서 사용할 수 있게 하기 위함
    useImperativeHandle(ref, () => ({
        changeLoginMember,
    }));

    // SIGNOUT HANDLER
    const signOutClickHandler = () => {
        console.log("[Nav] signOutClickHandler() CALLED!!");

        signInedMember.current = "";
        setLoginedMember("");
    };

    // USERMODIFY HANDLER
    const modifyAccountClickHandler = () => {
        console.log("[Nav] modifyAccountClickHandler() CALLED!!");
    };

    const regionChangeEventHendler = (e) => {
        console.log('[Nav] regionChangeEventHendler() CALLED!!');
        setSelectedRegion(e.target.value)
    }

    const navigate = useNavigate();
    const clicked = () => {
        navigate("/search", {
            state: {
                region: selectedRegion,
                searchValue: searchValue,
            }
        });
    };

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <nav>
            <div className="bar">
                <ul className="bar_ul">
                    <li className="sign_up">
                        {loginedMember === "" ? (
                            <Link to="/user/sign_Up">회원가입</Link>
                        ) : (
                            <span>[Welcome {loginedMember}]</span>
                        )}
                    </li>
                    <li className="sign_in">
                        {loginedMember === "" ? (
                            <Link to="/user/sign_in">로그인</Link>
                        ) : (
                            <Link to="/" onClick={signOutClickHandler}>
                                로그아웃
                            </Link>
                        )}
                    </li>

                    <li className="modify">
                        {loginedMember === "" ? null : (
                            <Link to="/user/modify" onClick={modifyAccountClickHandler}>
                                회원정보수정
                            </Link>
                        )}
                    </li>

                    <li className="btn" onClick={clicked}>
                        <Link to='/search' >찾기</Link>
                    </li>

                    <li className="region_settings">
                        <span>지역설정</span>
                        <select name="region" onChange={regionChangeEventHendler}>
                            <option value='00000' >지역설정</option>
                            <option value='26110'> 중구</option>
                            <option value='26140'> 서구</option>
                            <option value='26170'> 동구</option>
                            <option value='26200'> 영도구</option>
                            <option value='26230'> 부산진구</option>
                            <option value='26260'> 동래구</option>
                            <option value='26290'> 남구</option>
                            <option value='26320'> 북구</option>
                            <option value='26350'> 해운대구</option>
                            <option value='26380'> 사하구</option>
                            <option value='26410'> 금정구</option>
                            <option value='26440'> 강서구</option>
                            <option value='26470'> 연제구</option>
                            <option value='26500'> 수영구</option>
                            <option value='26530'> 사상구</option>
                            <option value='26710'> 기장군</option>
                        </select>
                    </li>

                    <li className="apt_search">
                        <span>검색</span>
                        <input
                            type="text"
                            placeholder="아파트 명"
                            value={searchValue}
                            onChange={handleInputChange}
                        />
                    </li>
                </ul>
            </div>
        </nav>
    );
});
export default Nav;