import React from "react";

const AptDetail = () => {
  return (
    <section>
      <div class="section_wrap">
        <div class="detail">
          <div class="detail_wrap">
            <div class="detail_title">
              <p>센텀아파트</p>
              {/* <!-- <button class="rule-toggle-button" onclick="toggleDisable()"> */}
              {/* 관리 규칙
        </button>
        <div class="rule-toggle disable">내용</div> --> */}
              <div class="mt-4">
                <span class="rating-star">
                  <span
                    class="Unfavorites"
                    value="Unfavorites"
                    style="display: inline"
                    onclick="favorites(this)"
                  ></span>
                  <span
                    class="Favorites"
                    value="Favorites"
                    style="display: none"
                    onclick="Unfavorites(this)"
                  ></span>
                </span>
              </div>
            </div>
            <div class="detail_address">
              <p>부산시 해운대구</p>
            </div>
            <div class="detail_list">
              <div class="table">
                <ul>
                  <li>계약일</li>
                  <li>거래가격</li>
                  <li>평수</li>
                  <li>층수</li>
                </ul>

                <ul>
                  <li>23.05.02</li>
                  <li>5억 2000</li>
                  <li>52</li>
                  <li>25</li>
                </ul>

                <ul>
                  <li>23.11.23</li>
                  <li>11억 2300</li>
                  <li>63</li>
                  <li>11</li>
                </ul>

                <ul>
                  <li>23.10.23</li>
                  <li>10억 2300</li>
                  <li>53</li>
                  <li>10</li>
                </ul>

                <ul>
                  <li>23.05.10</li>
                  <li>5억 1000</li>
                  <li>51</li>
                  <li>5</li>
                </ul>

                <ul>
                  <li>23.05.10</li>
                  <li>5억 1000</li>
                  <li>51</li>
                  <li>5</li>
                </ul>

                <ul>
                  <li>23.05.10</li>
                  <li>5억 1000</li>
                  <li>51</li>
                  <li>5</li>
                </ul>

                <ul>
                  <li>23.05.10</li>
                  <li>5억 1000</li>
                  <li>51</li>
                  <li>5</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="search">
            <div class="menu_bar">
              <p>계약일자</p>
              <input
                type="date"
                id="date"
                max="2023-08-20"
                min="2020-06-05"
                value=""
              />
              <span>~</span>
              <input
                type="date"
                id="date"
                max="2023-08-20"
                min="2020-06-05"
                value=""
              />
              <br />
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

              <br />
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

              <br />
              <div class="search_btn">
                <a href="#none">찾기</a>
              </div>
            </div>
            <div class="map">
              <img src="./imgs/map.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AptDetail;
