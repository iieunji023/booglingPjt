import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { Link } from "react-router-dom";

const Nav = forwardRef(({ signInedMember, userDB }, ref) => {
  const [loginedMember, setLoginedMember] = useState("");

  useEffect(() => {
    console.log("[Nav] useEffect() CALLED!!");
  });

  const changeLoginMember = (signInedMember) => {
    console.log("[Nav] changeLoginMember() CALLED!!");
    console.log("[Nav] signInedMember.current", signInedMember.current);

    setLoginedMember(signInedMember.current);
  };

  useImperativeHandle(ref, () => ({
    changeLoginMember,
  }));

  const signOutClickHandler = () => {
    console.log("[Nav] signOutClickHandler() CALLED!!");

    signInedMember.current = "";
    setLoginedMember("");
  };

  const modifyAccountClickHandler = () => {
    console.log("[Nav] modifyAccountClickHandler() CALLED!!");
  };

  return (
    <nav>
      <div className="bar">
        <ul className="bar_ul">
          <li className="sign_up">
            {loginedMember === "" ? (
              <Link to="/user/sign_Up">회원가입</Link>
            ) : (
              <span>[Welcom {loginedMember}]</span>
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

          <li className="btn">
            <Link>찾기</Link>
          </li>

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
});
export default Nav;
