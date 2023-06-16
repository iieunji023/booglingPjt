import React, { useState, useEffect } from "react";
import "./css/userModify.css";
import { useNavigate } from "react-router-dom";

const MODIFY_BUTTON = "1";
const RESET_BUTTON = "2";

const UserModify = ({ userDB, signInedMember }) => {
  const [m_name, setM_name] = useState("");
  const [m_mail, setM_mail] = useState("");
  const [m_pw, setM_pw] = useState("");
  const [m_birth, setM_birth] = useState("");
  const [m_addr, setM_addr] = useState("");
  const [m_phone, setM_phone] = useState("");

  let loginedMember = "";

  const navigate = useNavigate();

  useEffect(() => {
    console.log("[UserModify] useEffect() CALLED!!");
    loginedMember = userDB.get(signInedMember.current);
    setM_name(loginedMember.m_name);
    setM_mail(loginedMember.m_mail);
    setM_pw(loginedMember.m_pw);
    setM_birth(loginedMember.m_birth);
    setM_addr(loginedMember.m_addr);
    setM_phone(loginedMember.m_phone);
  }, []);

  const clickedBtnHandler = (e) => {
    console.log("[UserModify] clickedBtnHandler() CALLED!!");

    switch (e.target.name) {
      case MODIFY_BUTTON:
        console.log("[UserModify] MODIFY CLICKED!!");

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
          navigate("/user/modify_result");
        }
        break;

      case RESET_BUTTON:
        console.log("[UserModify] RESET CLICKED!!");

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
    console.log("[UserModify] ValidateUserInputData() CALLED!!");

    let result = true;

    if (m_name === "") {
      alert("이름을 입력해주세요.");
      result = false;
    } else if (m_mail === "") {
      alert("이메일을 입력해주세요.");
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
      <div class="section_wrap">
        <div class="modify">
          <div>
            <input
              type="text"
              name="m_name"
              placeholder="이름"
              value={m_name}
              readOnly
              //   disabled
              onChange={(e) => {
                setM_name(e.target.value);
              }}
            />
          </div>
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
            placeholder="생년월일"
            value={m_birth}
            onChange={(e) => {
              setM_birth(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            name="addr1"
            id="addr1"
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
          <div class="btn">
            <input
              type="button"
              value="수정"
              name={MODIFY_BUTTON}
              onClick={clickedBtnHandler}
            />
            <input
              type="button"
              value="취소"
              name={RESET_BUTTON}
              onClick={clickedBtnHandler}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default UserModify;
