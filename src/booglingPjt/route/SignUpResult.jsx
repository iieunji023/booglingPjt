import React from "react";
import "./css/signUpResult.css";

const SignUpResult = () => {
  return (
    <section>
      {/* <div className="section_wrap">MEMBER SIGN UP SUCCESS!!</div> */}
      <div className="section_wrap">
        <div className="success">
          <div className="img">
            <img src="../imgs/complete.png" />
          </div>
          <div className="title">
            <p>Boogling 회원이 되신 것을 환영합니다.</p>
          </div>
          <br />

          <div className="complete">
            <span>회원가입 절차가 모두 완료되었습니다.</span>
          </div>
          <br />
          <div className="add_service">
            <span>로그인 후 더욱 다양한 서비스를 이용할 수 있습니다.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpResult;
