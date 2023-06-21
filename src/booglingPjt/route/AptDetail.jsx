import React, { useEffect, useState } from "react";
import "./css/aptDetail.css";
import AptDetailList from "../AptDetailList";
import LikeBtn from "../LikeBtn";
import KakaoMapDetail from "../KakaoMapDetail";
import { useParams } from "react-router-dom";
import FavoritesList from "../FavoritesList";

const AptDetail = ({ userDB, setUserDB, signInedMember, item }) => {
  const [favoriteBtn, setFavoriteBtn] = useState(false);
  const { id } = useParams();
  const [m_favoriteApt, setM_favoriteApt] = useState("");
  const [m_mail, setM_mail] = useState("");
  const [loginedMember, setloginedMember] = useState("");
  console.log("userDB===========>", userDB);

  useEffect(() => {
    console.log("[AptDetail] useEffect() CALLED");
    if (signInedMember.current !== "") {
      const member = userDB.get(signInedMember.current);
      setloginedMember(member);
      setM_mail(member.m_mail);
    }
  }, []);

  let AptOriginalArray = [];
  item.forEach(function (item) {
    item.forEach(function (item2) {
      AptOriginalArray.push({
        AptName: item2.아파트,
        AptAdress: item2.도로명 + item2.도로명건물본번호코드,
        AptPrice: item2.거래금액,
        AptArea: item2.전용면적,
        AptFloor: item2.층,
        AptRegion: item2.지역코드,
        AptDate: item2.월 + "월" + item2.일 + "일",
      });
    });
  });
  let AptFilteredArray = [];
  if (id !== "") {
    const filteredsearchValue = AptOriginalArray.filter(
      (ele) => ele.AptName == id
    );
    console.log("[Search] filteredsearchValue: ", filteredsearchValue);
    filteredsearchValue.forEach(function (filteredsearchValue) {
      AptFilteredArray.push({
        AptName: filteredsearchValue.AptName,
        AptAdress: filteredsearchValue.AptAdress,
        AptPrice: filteredsearchValue.AptPrice,
        AptArea: filteredsearchValue.AptArea,
        AptFloor: filteredsearchValue.AptFloor,
        AptDate: filteredsearchValue.AptDate,
      });
    });
  } // 필터를 한것 즉 best5에서 클릭한 아파트명과 동일한 데이터만 추출

  let aptTitleName = AptFilteredArray[0].AptName;
  let aptTitleAddress = AptFilteredArray[0].AptAdress;
  let member = userDB.get(signInedMember.current);

  const LikeBtnOnClick = () => {
    console.log("[AptDetail] click");

    if (favoriteBtn) {
      return setFavoriteBtn(false);
    } else {
      localStorage.getItem(member.m_mail);
      let dataArray = JSON.parse(localStorage.getItem(member.m_mail));
      dataArray.push(id);
      JSON.stringify(dataArray);
      localStorage.setItem(member.m_mail, JSON.stringify(dataArray));
      console.log("즐겨찾기 추가", dataArray);
      return setFavoriteBtn(true);
    }
  };

  return (
    <section>
      <div className="main">
        <ul>
          <li className="detail">
            <ul className="header">
              <li>
                <div className="detail_title">{aptTitleName}</div>
              </li>
              <li>
                <div className="like_btn">
                  <button onClick={LikeBtnOnClick}>
                    <LikeBtn onClick={favoriteBtn} />
                  </button>
                </div>
              </li>
            </ul>
            <div className="address">부산광역시 {aptTitleAddress}</div>

            <div className="list">
              <ul className="list_name">
                <li>거래가격</li>
                <li>계약일자</li>
                <li>평수</li>
                <li>층수</li>
              </ul>

              {AptFilteredArray.map((ele, idx) => {
                return (
                  <AptDetailList
                    key={idx}
                    AptName={ele.AptName}
                    AptAdress={ele.AptAdress}
                    AptPrice={ele.AptPrice}
                    AptArea={ele.AptArea}
                    AptFloor={ele.AptFloor}
                    AptDate={ele.AptDate}
                  />
                );
              })}
            </div>
          </li>
          <li className="menu_map">
            <div className="map">
              <KakaoMapDetail AptFilteredArray={AptFilteredArray} />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AptDetail;
