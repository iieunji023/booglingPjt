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

  // 수정해야 할 사용자 정보 불러오기 위함 ---> 각각의 상태 변수 loginedMember에서 가져온 값으로 설정
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

  //비밀번호 정규식
  function CheckPw(str) {
    var reg1 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    return reg1.test(str);
  }

  //휴대폰번호 정규식
  function checkPhonenumber(str) {
    // 숫자만 입력시
    var regExp2 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    return regExp2.test(str);
  }

  //이메일 정규식
  function checkEmail(str) {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(str);
  }

  function isBirthday(dateStr) {
    var year = Number(dateStr.substr(0, 4)); // 입력한 값의 0~4자리까지 (연)
    var month = Number(dateStr.substr(4, 2)); // 입력한 값의 4번째 자리부터 2자리 숫자 (월)
    var day = Number(dateStr.substr(6, 2)); // 입력한 값 6번째 자리부터 2자리 숫자 (일)
    var today = new Date(); // 날짜 변수 선언
    var yearNow = today.getFullYear(); // 올해 연도 가져옴

    if (dateStr.length <= 8) {
      // 연도의 경우 1900 보다 작거나 yearNow 보다 크다면 false를 반환합니다.
      if (1900 > year || year > yearNow) {
        return false;
      } else if (month < 1 || month > 12) {
        return false;
      } else if (day < 1 || day > 31) {
        return false;
      } else if (
        (month == 4 || month == 6 || month == 9 || month == 11) &&
        day == 31
      ) {
        return false;
      } else if (month == 2) {
        var isleap = year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
        if (day > 29 || (day == 29 && !isleap)) {
          return false;
        } else {
          return true;
        } //end of if (day>29 || (day==29 && !isleap))
      } else {
        return true;
      } //end of if
    } else {
      //1.입력된 생년월일이 8자 초과할때 :  auth:false
      return false;
    }
  }

  // HANDLER START
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

        setM_mail("");
        setM_pw("");
        setM_birth("");
        setM_addr("");
        setM_phone("");
        break;
    }
  };
  // HANDLER END

  // Validate START
  const ValidateUserInputData = () => {
    console.log("[UserModify] ValidateUserInputData() CALLED!!");

    let result = true;

    if (m_name === "") {
      alert("이름을 입력해주세요.");
      result = false;
    } else if (m_mail === "") {
      alert("이메일을 입력해주세요.");
      result = false;
    } else if (checkEmail(m_mail) === false) {
      alert("이메일을 형식에 맞게 입력해주세요.");
      result = false;
    } else if (m_pw === "") {
      alert("비밀번호를 입력해주세요.");
      result = false;
    } else if (CheckPw(m_pw) === false) {
      alert("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요 !");
      result = false;
    } else if (m_birth === "") {
      alert("생년월일을 입력해주세요.");
      result = false;
    } else if (isBirthday(m_birth) === false) {
      alert("생년월일을 형식에 맞게 입력해주세요.");
      result = false;
    } else if (m_addr === "") {
      alert("주소를 입력해주세요.");
      result = false;
    } else if (m_phone === "") {
      alert("번호를 입력해주세요.");
      result = false;
    } else if (checkPhonenumber(m_phone) === false) {
      alert("번호를 형식에 맞게 입력해주세요.");
      result = false;
    }
    return result;
  };
  // Validate END

  return (
    <section>
      <div class="modify_section_wrap">
        <div class="modify">
          <div className="modify_title">회원정보수정</div>
          <input
            className="m_name"
            type="text"
            name="m_name"
            placeholder="이름"
            value={m_name}
            readOnly
            disabled
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
            <div>
              <input
                type="button"
                value="수정"
                name={MODIFY_BUTTON}
                onClick={clickedBtnHandler}
              />
            </div>
            <div>
              <input
                type="button"
                value="취소"
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
export default UserModify;
