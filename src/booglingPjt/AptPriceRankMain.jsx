import React, { useState } from "react";
import { Link } from "react-router-dom";

const AptPriceRankMain = ({ item }) => {

    let [apartNameTitle, setApartNameTitle] = useState([]);
    let [apartPriceTitle, setApartPriceTitle] = useState([]);

    let apartNameAndPriceComposition;
    let apartComposition;
    let priceComposition;
    let apartNameAndPrice = [];
    const apartName = [];
    let apartPrice = [];
    console.log("item------------->", item);
    // 아파트이름과 가격을 합친것을 배열로 만든다.
    if (item) {
        item.forEach(function (item) {
            item.forEach(function (item2) {
                apartNameAndPriceComposition = item2.아파트 + item2.거래금액;
                apartNameAndPrice.push(apartNameAndPriceComposition);

                // console.log("아파트 가격과 거래금액------>", apartNameAndPrice)
            });
        });
    }
    console.log("아파트 가격과 거래금액------>", apartNameAndPrice);
    // function extractNumbers(apartNameAndPrice) {
    //     const numbers = [];

    //     for (let i = 0; i < apartNameAndPrice.length; i++) {
    //         const item = apartNameAndPrice[i];
    //         const number = parseInt(item.match(/\d+/)[0].replace(',', ''));
    //         numbers.push(number);
    //     }

    //     return numbers;
    // }

    const resultArray = apartNameAndPrice.map(item => {
        const [name, value] = item.split(/\s+\s+/); // 공백을 간격으로 숫자와 문자를 나눈다.
        return { name, value: parseInt(value.replace(',', '')) };
    }); // 현재 배열의 숫자를 뽑기위해 새로 map의 키밸류로 배열을 만든다.

    resultArray.sort((a, b) => b.value - a.value);

    console.log("정렬된 것------------->", resultArray);

    // console.log("길이 : ==========>", apartNameAndPrice.length);

    // apartNameTitle = resultArray.map(item => item.name);
    // apartPriceTitle = resultArray.map(item => item.value);
    // console.log("이름만 뽑은 것---------->", apartNameTitle[0])

    // console.log("가격 순위로 정렬-----------> ", sortedArr);


    // // 아파트이름만 가져와서 배열로 만들기
    // if (item) {
    //     item.forEach(function (item) {
    //         item.forEach(function (item2) {
    //             apartComposition = item2.아파트;
    //             apartName.push(apartComposition);
    //             // console.log("첫번째로 한것--------->", arr)
    //         });
    //     });
    // }

    // // 아파트 가격만 가져와서 배열로 만들기
    // if (item) {
    //     item.forEach(function (item) {
    //         item.forEach(function (item2) {
    //             priceComposition = item2.거래금액 + "100";
    //             apartPrice.push(priceComposition);
    //             // console.log("첫번째로 한것--------->", arr)
    //         });
    //     });
    // }


    return (
        <div>
            {
                resultArray.map((item, idx) => (
                    idx <= 4 ?
                        <div className="apt_rankinglist">
                            <Link>{item.name}</Link>
                            <ul>
                                <li>
                                    <span>{item.value}만</span>
                                </li>
                            </ul>
                        </div>
                        : ""
                ))
            }

        </div>
    );
}
export default AptPriceRankMain;