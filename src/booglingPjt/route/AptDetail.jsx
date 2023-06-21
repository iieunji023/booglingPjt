/* eslint-disable */
import React, { useEffect, useState } from "react";
import "./css/aptDetail.css";
import AptDetailList from "../AptDetailList";
import LikeBtn from "../LikeBtn";
import KakaoMapDetail from "../KakaoMapDetail";
import { useParams } from 'react-router-dom';

const AptDetail = ({ userDB, signInedMember, item }) => {
  const [favoriteBtn, setFavoriteBtn] = useState(false);
  const { id } = useParams();
  // console.log(id)
  const [m_favoriteApt, setM_favoriteApt] = useState("");
  const [m_mail, setM_mail] = useState("");
  const [loginedMember, setloginedMember] = useState("");

  useEffect(() => {
    console.log('[AptDetail] useEffect() CALLED');
    if (signInedMember.current !== '') {
      const member = userDB.get(signInedMember.current);
      setloginedMember(member);
      setM_mail(member.m_mail);
    }
  },[]);

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
        AptDate: (item2.월) + '월' + (item2.일) + '일',
      });
    });
  });
  let AptFilteredArray = []
  if (id !== '') {
    const filteredsearchValue = AptOriginalArray.filter((ele) => ele.AptName == id);
    console.log('[Search] filteredsearchValue: ', filteredsearchValue)
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
  }

  // console.log('[AptDetail] AptFilteredArray------>', AptFilteredArray)


  let aptTitleName = AptFilteredArray[0].AptName;
  let aptTitleAddress = AptFilteredArray[0].AptAdress;
  
  const LikeBtnOnClick = () => {
    console.log("[AptDetail] click");

    if (favoriteBtn) {

      if (userDB.get(m_mail).m_favoriteApt === aptTitleName) {
        userDB.get(m_mail, {
          m_favoriteApt: ''
        });
      }
      console.log('즐겨찾기 삭제', m_favoriteApt);
      return setFavoriteBtn(false);
    } else {
      userDB.set(m_mail, {
        m_favoriteApt: AptFilteredArray
      });
      console.log('즐겨찾기 추가', userDB.get(m_mail));
      return setFavoriteBtn(true)
    }
  }


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

{
                AptFilteredArray.map((ele, idx) => {
                  return (
                    <AptDetailList
                      key={idx}
                      AptName={ele.AptName}
                      AptAdress={ele.AptAdress}
                      AptPrice={ele.AptPrice}
                      AptArea={ele.AptArea}
                      AptFloor={ele.AptFloor} 
                      AptDate={ele.AptDate} />
                  )
                })
              }

            </div>

            <div className="page">
              <ul>
                <li>
                  <a href="#none">&#60;</a>&nbsp; &nbsp;
                </li>
                <li>
                  <a href="#none">1</a>&nbsp;
                </li>
                <li>
                  <a href="#none">2</a>&nbsp;
                </li>
                <li>
                  <a href="#none">3</a>&nbsp;
                </li>
                <li>
                  <a href="#none">4</a>&nbsp;
                </li>
                <li>
                  <a href="#none">5</a>&nbsp; &nbsp;
                </li>
                <li>
                  <a href="#none">&#62;</a>&nbsp; &nbsp;
                </li>
              </ul>
            </div>
          </li>
          <li className="menu_map">
            <div className="detail_menu">
              <div className="contract_date">
                <p>계약일자</p>
                <input
                  type="date"
                  id="date"
                  max="2023-08-20"
                  min="2020-06-05"
                  value=""
                />
                ~
                <input
                  type="date"
                  id="date"
                  max="2023-08-20"
                  min="2020-06-05"
                  value=""
                />
              </div>
              <div className="price_settings">
                <p>금액설정</p>
                <select name="min_price">
                  <option>전체금액</option>
                  <option>1억 이하</option>
                  <option>2억 이하</option>
                  <option>3억 이하</option>
                  <option>4억 이하</option>
                  <option>5억 이하</option>
                  <option>7억 이하</option>
                  <option>8억 이하</option>
                  <option>9억 이하</option>
                  <option>10억 이하</option>
                  <option>10억 이상</option>
                </select>
                <span> ~ </span>
                <select name="max_price">
                  <option>전체금액</option>
                  <option>1억 이하</option>
                  <option>2억 이하</option>
                  <option>3억 이하</option>
                  <option>4억 이하</option>
                  <option>5억 이하</option>
                  <option>7억 이하</option>
                  <option>8억 이하</option>
                  <option>9억 이하</option>
                  <option>10억 이하</option>
                  <option>10억 이상</option>
                </select>
              </div>
              <div className="area_settings">
                <p>면적설정</p>
                <select name="area">
                  <option>모든평수</option>
                  <option>10평대</option>
                  <option>20평대</option>
                  <option>30평대</option>
                  <option>40평대</option>
                  <option>50평대</option>
                  <option>60평대</option>
                  <option>70평 이상</option>
                </select>
              </div>
              <div className="search_btn">
                <a href="#none">찾기</a>
              </div>
            </div>
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
