import React, { useEffect, useState } from "react";
import "./css/aptDetail.css";
import AptDetailList from "../AptDetailList";
import LikeBtn from "../LikeBtn";
import KakaoMapDetail from "../KakaoMapDetail";
import { useParams } from 'react-router-dom';
import { includes } from "lodash";



const AptDetail = ({ userDB, setUserDB, signInedMember, item }) => {
  const [favoriteBtn, setFavoriteBtn] = useState(false);
  const { id } = useParams();
  const [m_favoriteApt, setM_favoriteApt] = useState("");
  const [m_mail, setM_mail] = useState("");
  const [loginedMember, setloginedMember] = useState("");
  console.log("userDB===========>", userDB);


  useEffect(() => {
    console.log('[AptDetail] useEffect() CALLED');
    if (signInedMember.current !== '') {
      const member = userDB.get(signInedMember.current);
      setloginedMember(member);
      setM_mail(member.m_mail);
    }


    // 상세페이지 진입 시 현재 로그인 된 사람 아이디가 키값인 로컬스토리지 배열에 아파트명이 동일하다면 true 없다면 false
    let localArray = JSON.parse(localStorage.getItem(member.m_mail));
    // 회원가입시에 사용한 아이디를 키값으로 만든 배열을 부릅니다.
    let include = localArray.includes(id)
    // 키값으로 만든 배열에 있는 아파트이름과 상세보기 들어갈 때 클릭 시 누른 아파트이름을 비교하여 일치하면 true값을 반환한다.
    console.log("localArray----------->", localArray);
    console.log("ele--------->", typeof ele);
    if (include) {
      return setFavoriteBtn(true);
    }
    else {
      return setFavoriteBtn(false);
    }
  }, []);



  let AptOriginalArray = [];
  item.forEach(function (item) {
    item.forEach(function (item2) {
      if (item2.도로명 === undefined) {
        AptOriginalArray.push({
          AptName: item2.아파트,
          AptAdress: item2.법정동 + " " + item2.법정동본번코드 + " " + item2.법정동부번코드,
          AptPrice: item2.거래금액,
          AptArea: item2.전용면적,
          AptFloor: item2.층,
          AptRegion: item2.지역코드,
          AptDate: (item2.월) + '월' + (item2.일) + '일',
        });
      } else {
        AptOriginalArray.push({
          AptName: item2.아파트,
          AptAdress: item2.도로명 + item2.도로명건물본번호코드,
          AptPrice: item2.거래금액,
          AptArea: item2.전용면적,
          AptFloor: item2.층,
          AptRegion: item2.지역코드,
          AptDate: (item2.월) + '월' + (item2.일) + '일',
        });
      }
    });
  }); // 원본데이터에서 배열형식을 변경해준것 -> 그리고 AptOriginalArray으로 담아준것


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
  } // 필터를 한것 즉 best5에서 클릭한 아파트명과 동일한 데이터만 추출

  let aptTitleName = AptFilteredArray[0].AptName;
  let aptTitleAddress = AptFilteredArray[0].AptAdress;
  let member = userDB.get(signInedMember.current);

  const LikeBtnOnClick = () => {
    console.log("[AptDetail] click");



    if (favoriteBtn) {
      localStorage.getItem(member.m_mail); // 회원가입시에 사용한 아이디를 키값으로 만든 배열을 부릅니다. 
      let dataArray = JSON.parse(localStorage.getItem(member.m_mail));
      let dataArrayIndex = dataArray.indexOf(id); // 로컬스토리지에 저장된 아파트 이름들의 인덱스번호를 찾습니다.
      dataArray.splice(dataArrayIndex, 1); // 찾은 인덱스 번호와 일치하는 인덱스를 가진 아파트이름을 제거해줍니다.
      JSON.stringify(dataArray); // 로컬스토리지에 저장된 배열을 다시 문자열로 바꿉니다.
      localStorage.setItem(member.m_mail, JSON.stringify(dataArray));
      console.log('즐겨찾기 삭제', dataArray);

      return setFavoriteBtn(false);

    } else {
      localStorage.getItem(member.m_mail);
      let dataArray = JSON.parse(localStorage.getItem(member.m_mail));
      dataArray.push(id); // 회원가입하고 로그인한 아이디의 로컬스토리지에 아파트이름을 넣어줍니다
      JSON.stringify(dataArray);
      localStorage.setItem(member.m_mail, JSON.stringify(dataArray));
      console.log('즐겨찾기 추가', dataArray);

      return setFavoriteBtn(true)
    }

  }


  // userDB.get(m_mail)

  // let aptTitleName = AptFilteredArray.map(item => item.AptName);
  // let aptTitleName = AptFilteredArray[0].AptName;
  // console.log("이름------------->", aptTitleName)
  // let aptTitleAddress = AptFilteredArray.map(item => item.AptAdress);
  // console.log("주소------------->", aptTitleAddress)

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