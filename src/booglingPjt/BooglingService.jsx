// import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./Header";
import Nav from "./Nav";
import './css/common.css';
import './css/index.css';
import Main from "./route/Main";

const BooglingService = () => {
    return (
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