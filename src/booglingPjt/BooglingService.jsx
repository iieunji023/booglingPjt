import React from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import Header from "./Header";
import Nav from "./Nav";
import './css/common.css';
import './css/index.css';

const BooglingService = () => {
    return(
        <>
            <BrowserRouter>
                <Header />
                <Nav />
            </BrowserRouter>
        </>
    );
}
export default BooglingService;