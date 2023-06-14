import React, { useState, useEffect } from "react";
// import "./css/signUp.css";

const SIGN_UP_BUTTON = "1";
const RESET_BUTTON = "2";

const SignUp = (userDB) => {
  // const [userDB, setUserDB] = useState(new Map());
  const [m_name, setM_name] = useState("");
  const [m_mail, setM_mail] = useState("");
  const [m_pw, setM_pw] = useState("");
  const [m_birth, setM_birth] = useState("");
  const [m_addr, setM_addr] = useState("");
  const [m_phone, setM_phone] = useState("");

  useEffect(() => {
    console.log("[SignUp] useEffect() CALLED!!");
  });

  const clickedBtnHandler = (e) => {
    console.log("[SignUp] clickedBtnHandler() CALLED!!");
    console.log(e.target.name);
    switch (e.target.name) {
      case SIGN_UP_BUTTON:
        if (ValidateUserInputData()) {
          userDB.set(m_mail, {
            m_name: m_name,
            m_mail: m_mail,
            m_pw: m_pw,
            m_birth: m_birth,
            m_addr: m_addr,
            m_phone: m_phone,
          });
          console.log(userDB);
          alert("회원가입이 완료되었습니다.");
        }
        break;

      case RESET_BUTTON:
        setM_name("");
        setM_mail("");
        setM_pw("");
        setM_birth("");
        setM_addr("");
        setM_phone("");
        break;
    }
  };

  const ValidateUserInputData = () => {
    let result = true;

    if (m_name === "") {
      alert("이름을 입력해주세요.");
      result = false;
    } else if (m_mail === "") {
      alert("메일을 입력해주세요.");
      result = false;
    } else if (m_pw === "") {
      alert("비밀번호를 입력해주세요.");
      result = false;
    } else if (m_birth === "") {
      alert("생년월일을 입력해주세요.");
      result = false;
    } else if (m_addr === "") {
      alert("주소를 입력해주세요.");
      result = false;
    } else if (m_phone === "") {
      alert("번호를 입력해주세요.");
      result = false;
    }
    return result;
  };

  return (
    <section>
      <div className="section_wrap">
        <div className="sign_up">
          <input
            type="text"
            name="m_name"
            placeholder="이름"
            value={m_name}
            onChange={(e) => {
              setM_name(e.target.value);
            }}
          />
          <br />
          <input
            type="email"
            name="m_mail"
            placeholder="e-mail"
            value={m_mail}
            onChange={(e) => {
              setM_mail(e.target.value);
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
          <input
            type="text"
            name="birth"
            placeholder="생년월일  ex)19700101 - 8자리로 입력"
            value={m_birth}
            onChange={(e) => {
              setM_birth(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            name="addr"
            id="addr"
            placeholder="주소"
            value={m_addr}
            onChange={(e) => {
              setM_addr(e.target.value);
            }}
          />
          <br />
          <input
            type="number"
            name="m_phone"
            placeholder="휴대폰번호"
            value={m_phone}
            onChange={(e) => {
              setM_phone(e.target.value);
            }}
          />
          <br />
          <div className="buttons">
            <div>
              <input
                type="button"
                value="sign up"
                name={SIGN_UP_BUTTON}
                onClick={clickedBtnHandler}
              />
            </div>
            <div>
              <input
                type="button"
                value="reset"
                name={RESET_BUTTON}
                onClick={clickedBtnHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignUp;
