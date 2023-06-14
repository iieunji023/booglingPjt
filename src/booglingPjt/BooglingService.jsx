import React, { useState, useEffect } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./Header";
import Nav from "./Nav";
import './css/common.css';
import './css/index.css';
import Main from "./route/Main";
import axios from 'axios';

const serviceKey = "IyQg8I2dXbv8kkUs2Gki35cm64Cu%2BxaUWkNCsFipH3WWV6%2FiZD4HHrq4v%2Bykezvft92l9H5S0zULIYrQonfaUA%3D%3D" // 서비스키(필수)
const pageNo = 1;          // 페이지 번호(옵션)
const numOfRows = 10;     // 한 페이지 결과 수(옵션)

const BooglingService = () => {

    // const [lawdCd, setLawdCd] = useState('');
    // const [dealYMD, setdealYMD] = useState('');
    const [item, setItem] = useState([]);       //중복값이 있는 아파트명 목록

    useEffect(() => {
        console.log('useEffect!!');
        
        getRemoteData();


    }, []);

    // let LAWD_CD = `26${lawdCd}0`;           // 지역코드(필수)
    // let DEAL_YMD = '201512';                // 계약년월(필수)

    // Handler START
    // const lawdCdChangeHandler = (e) => {
    //     console.log('[Search] lawdCdChangeHandler() CALLED!!');

    //     setLawdCd(() => '26' + e.target.value + '0');
        
    // }
    // Handler END

    async function getData(y, m, r) {
        console.log('[Search] getData() CALLED!!');

        try {

            let deal_ymd = (y + m) * 1 // 년도월, ex) 2022년 01월 == 202201
            let region = `26${r}0`

            let url = `http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&LAWD_CD=${region}&DEAL_YMD=${deal_ymd}`;
            const response = await axios.get(url);
            // console.log('response ---> \n', response.data.response.body.items.item);

            let items = response.data.response.body.items.item;
            item.push(items)
            // console.log(items)
            // setItem([...item,items])
            // let temp = item.slice()
            // setItem(temp)
            console.log('item ---> \n', item)

            // items.map((item, idx) => {
            //     console.log('idx  ---> ', idx);
            //     console.log('item ---> ', item);
            //     console.log('item ---> ', item.아파트);
            //     console.log('item ---> ', item.도로명);
            //     console.log('item ---> ', item.도로명건물본번호코드);
            // });

        } catch(error) {
            console.log(error);

        } finally {
            console.log('finally');

        }

    }

    async function getRemoteData() {
        console.log('[Search] getRemoteData() CALLED!!');

        let year = ['2022','2023'];
        let month = ['01'];
        let region =['11','14','17','20','23','26','29','32','35','38','41','44','47','50','53','71']


        try {
            year.map(function(y) {
                month.map(function(m) {
                    region.map(function(r){
                        getData(y, m, r);

                    })

                });
            });

        } catch(error) {
            console.log(error);

        } finally {
            console.log('finally');

        }

    }

    return(
        <>

            <BrowserRouter>
                <Header />
                <Nav />
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                </Routes>
            </BrowserRouter>

        </>
    );
}
export default BooglingService;