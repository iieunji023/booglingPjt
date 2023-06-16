import React, { useState, useEffect } from "react";
import "./css/signIn.css";
import { useNavigate } from "react-router-dom";

const SignIn = ({ userDB, signInedMember, setLoginedSession }) => {
  const [m_id, setM_id] = useState("");
  const [m_pw, setM_pw] = useState("");

  useEffect(() => {
    console.log("[UserSignIn] useEffect() CALLED!!");
  });

  const navigate = useNavigate();

  const ClickedBtnHandler = (e) => {
    console.log("[SignIn] ClickedBtnHandler() CALLED!!");

    if (userDB.has(m_id) && userDB.get(m_id).m_pw === m_pw) {
      console.log("[UserSignIn] SIGN-IN SUCCESS!!");

      alert("SIGN-IN SUCCESS!!");

      signInedMember.current = m_id;
      setLoginedSession();

      navigate("/user/sign_in_result");
    } else {
      console.log("[UserSignIn] SIGN-IN FAIL!!");

      setM_id("");
      setM_pw("");

      alert("SIGN-IN FAIL!!");
    }
  };

  return (
    <section>
      <div class="section_wrap">
        <div class="sign_in">
          <input
            type="text"
            name="m_id"
            placeholder="아이디"
            value={m_id}
            onChange={(e) => {
              setM_id(e.target.value);
            }}
          />
          <br />
          <input
            type="password"
            name="m_pw"
            placeholder="비밀번호"
            value={m_pw}
            onChange={(e) => {
              setM_pw(e.target.value);
            }}
          />
          <br />
          <input type="button" value="로그인" onClick={ClickedBtnHandler} />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
