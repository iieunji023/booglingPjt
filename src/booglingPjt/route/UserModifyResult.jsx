import React from "react";
import "./css/userModifyResult.css";
// import image from "../imgs/complete.png";

const UserModifyResult = () => {
  return (
    <section>
      {/* <div className="section_wrap">MEMBER MODIFY SUCCESS!!</div> */}
      <div className="section_wrap">
        <div className="success">
          <img src="../imgs/complete.png" />
          {/* <img src={image} alt="logo" class="logo" /> */}
          <br />
          <p>회원정보 수정이 완료되었습니다.</p>
        </div>
      </div>
    </section>
  );
};

export default UserModifyResult;
