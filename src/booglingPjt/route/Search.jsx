import React, { useEffect, useState } from "react";
import "./css/search.css";
import "./css/common.css";
import SearchList from "./SearchList";
import { useLocation } from "react-router-dom";


const Search = ({ item }) => {

  const location = useLocation();
  let region = location.state.region // [Nav] URL에서 전달된 지역 정보
  let searchValue = location.state.searchValue // [Nav] URL에서 전달된 검색어
  // console.log('[Search] location----> ', location);
  // console.log('[Search] location.state----> ', location.state);

  console.log('[Search] value----> ', region);
  console.log('[Search] searchValue----> ', searchValue);
  console.log('[Search] item =====> ', item)


  // 원본 데이터인 item을 분해해서 원하는 형태로 AptOriginalArray에 담기
  let AptOriginalArray = []
  item.forEach(function (item) {
    item.forEach(function (item2) {
      AptOriginalArray.push({
        AptName: item2.아파트,
        AptAdress: item2.도로명 + item2.도로명건물본번호코드,
        AptPrice: item2.거래금액,
        AptArea: item2.전용면적,
        AptFloor: item2.층,
        AptRegion: item2.지역코드,
      });
    });
  });

  // 검색어로 필터링된 아파트 목록 생성
  // AptOriginalArray을 분해해서 "[Nav] URL에서 전달된 검색어" 와 일치하는 데이터만 AptFilteredArray에 push
  let AptFilteredArray = []
  if (searchValue != '') {
    const filteredsearchValue = AptOriginalArray.filter((ele) => ele.AptName == searchValue);
    console.log('[Search] filteredsearchValue: ', filteredsearchValue)
    filteredsearchValue.forEach(function (filteredsearchValue) {
      AptFilteredArray.push({
        AptName: filteredsearchValue.AptName,
        AptAdress: filteredsearchValue.AptAdress,
        AptPrice: filteredsearchValue.AptPrice,
        AptArea: filteredsearchValue.AptArea,
        AptFloor: filteredsearchValue.AptFloor,
      });
    })
  }
  // 지역 코드로 필터링된 아파트 목록 생성
  // AptOriginalArray을 분해해서 "[Nav] URL에서 전달된 지역 정보" 와 일치하는 데이터만 AptFilteredArray에 push
  if (region != '00000') {
    const filteredregion = AptOriginalArray.filter((ele) => ele.AptRegion == region);
    console.log('[Search] filteredregion: ', filteredregion)
    filteredregion.forEach(function (filteredregion) {
      AptFilteredArray.push({
        AptName: filteredregion.AptName,
        AptAdress: filteredregion.AptAdress,
        AptPrice: filteredregion.AptPrice,
        AptArea: filteredregion.AptArea,
        AptFloor: filteredregion.AptFloor,
      });
    });
  }


  useEffect(() => {

    console.log('[Search] AptOriginalArray =====> ', AptOriginalArray)
    console.log('[Search] AptFilteredArray =====> ', AptFilteredArray)

  }, [])

  return (
    <section>

      <div className="search_main">
        <ul>
          <li className="search_result">
            <div className="search_title">검색결과</div>
            <div className="search_list">
              <ul className="list_name">
                <li>아파트</li>
                <li>주소</li>
                <li>거래가격</li>
                <li className="area">평수</li>
                <li className="floor">층수</li>
              </ul>
              {
                AptFilteredArray.map((ele, idx) => {
                  return (
                    <SearchList
                      key={idx}
                      AptName={ele.AptName}
                      AptAdress={ele.AptAdress}
                      AptPrice={ele.AptPrice}
                      AptArea={ele.AptArea}
                      AptFloor={ele.AptFloor} />
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
          <li className="menu">
            <div className="contract_date">
              <p>계약일자</p>

              <input
                type="date"
                id="date"
                max="2023-08-20"
                min="2020-06-05"
                value=""
              />
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
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Search;
