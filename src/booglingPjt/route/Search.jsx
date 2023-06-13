import React, { useEffect, useState } from "react";

const Search = () => {
    const serviceKey = "IyQg8I2dXbv8kkUs2Gki35cm64Cu%2BxaUWkNCsFipH3WWV6%2FiZD4HHrq4v%2Bykezvft92l9H5S0zULIYrQonfaUA%3D%3D" // 서비스키(필수)
    const pageNo = 1;          // 페이지 번호(옵션)
    const numOfRows = 100;     // 한 페이지 결과 수(옵션)
    const LAWD_CD = 11110;     // 지역코드(필수)
    const DEAL_YMD = 201512;   // 계약년월(필수)
    const URL = `http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&LAWD_CD=${LAWD_CD}&DEAL_YMD=${DEAL_YMD}`;


    const [data, setData] = useState([]);

    useEffect(()=> {
        fetch(URL)
        .then(response => response.text())
        .then(data => {
            console.log(data);
            var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
            var x=xmlDoc.getElementsByTagName("resultMsg");
            console.log(x[0].textContent);
            setData(x[0].textContent)
        
            return xmlDoc;
        })
        .catch(error => {
            console.log(error);
        });
    }, [])

    return (

        <div>
            <p>{data}</p>
        </div>
    );
}


export default Search;