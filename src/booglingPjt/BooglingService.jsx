import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import "./css/common.css";
import "./css/index.css";
import Main from "./route/Main";
import SignUp from "./route/SignUp";
import SignUpResult from "./route/SignUpResult";
import SignIn from "./route/SignIn";
import SignInResult from "./route/SignInResult";
import UserModify from "./route/UserModify";
import UserModifyResult from "./route/UserModifyResult";

import axios from "axios";

const serviceKey = "4QZ4e0ftFVHceln9FiZ6yhc%2BsY3bdDiyce%2BULzBK87k5Hnrs0B10zEajsBdqg5TcQgPo0dz5lzbmrkev1dZXWg%3D%3D";

const pageNo = 1; // 페이지 번호(옵션)
const numOfRows = 10; // 한 페이지 결과 수(옵션)

const BooglingService = () => {

    const [userDB, setUserDB] = useState(new Map());
    const signInedMember = useRef("");
    const changeLoginStatus = useRef("");

    const setLoginedSession = () => {
        console.log("[BooglingService] setLoginedSesstion() CALLED!!");

        changeLoginStatus.current.changeLoginMember(signInedMember);
    };

    // const [lawdCd, setLawdCd] = useState('');
    // const [dealYMD, setdealYMD] = useState('');
    const [item, setItem] = useState([]); //중복값이 있는 아파트명 목록
    // const [updateItem, setUpdateItem] = useState(0);
    useEffect(() => {
        console.log("[BooglingService] useEffect!!");

        getRemoteData();

    }, []);

    // useEffect(() => {
    //     console.log("[BooglingService] item ---> \n", item);
    // }, [item]) // 데이터를 받아왔는지 확인 하기 위해 사용한다. 

    // let LAWD_CD = `26${lawdCd}0`;           // 지역코드(필수)
    // let DEAL_YMD = '201512';                // 계약년월(필수)

    // Handler START
    // const lawdCdChangeHandler = (e) => {
    //     console.log('[Search] lawdCdChangeHandler() CALLED!!');

    //     setLawdCd(() => '26' + e.target.value + '0');

    // }
    // Handler END

    async function getData(y, m, r) {
        console.log("[BooglingService] getData() CALLED!!");

        try {
            let deal_ymd = (y + m) * 1; // 년도월, ex) 2022년 01월 == 202201
            let region = `26${r}0`;

            let url = `http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&LAWD_CD=${region}&DEAL_YMD=${deal_ymd}`;
            const response = await axios.get(url);
            // console.log('response ---> \n', response.data.response.body.items.item);
            let items = response.data.response.body.items.item;
            item.push(items);
            // setItem([...item, items]);

            // setUpdateItem(c => c + 1);
            // console.log(items)
            // setItem([...item,items])
            let temp = item.slice()
            setItem(temp)


            // items.map((item, idx) => {
            //     console.log('idx  ---> ', idx);
            //     console.log('item ---> ', item);
            //     console.log('item ---> ', item.아파트);
            //     console.log('item ---> ', item.도로명);
            //     console.log('item ---> ', item.도로명건물본번호코드);

            // });
        } catch (error) {
            console.log(error);
        } finally {
            console.log("finally");
        }
    }


    async function getRemoteData() {
        console.log("[Search] getRemoteData() CALLED!!");

        let year = ["2022"];
        let month = ["01"];
        let region = [
            // "11",
            // "14",
            // "17",
            // "20",
            // "23",
            // "26",
            // "29",
            // "32",
            // "35",
            // "38",
            "41",
            "44",
            "47",
            // "50",
            // "53",
            // "71",
        ];

        try {
            year.map(function (y) {
                month.map(function (m) {
                    region.map(function (r) {
                        getData(y, m, r);
                    });
                });
            });
        } catch (error) {
            console.log(error);
        } finally {
            console.log("finally");

        }
    }

    return (
        <>
            <BrowserRouter>
                <Header />
                <Nav />
                <Routes>
                    <Route path="/" element={<Main item={item} />}></Route>
                    <Route
                        path="/user/sign_up"
                        element={<SignUp userDB={userDB} />}
                    ></Route>
                    <Route path="/user/sign_up_result" element={<SignUpResult />}></Route>
                    <Route
                        path="/user/sign_in"
                        element={
                            <SignIn
                                userDB={userDB}
                                signInedMember={signInedMember}
                                setLoginedSession={setLoginedSession}
                            />
                        }
                    ></Route>
                    <Route path="/user/sign_in_result" element={<SignInResult />}></Route>
                    <Route
                        path="/user/modify"
                        element={
                            <UserModify userDB={userDB} signInedMember={signInedMember} />
                        }
                    ></Route>
                    <Route
                        path="/user/modify_result"
                        element={<UserModifyResult />}
                    ></Route>
                    <Route path="*" element={<Main />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default BooglingService;