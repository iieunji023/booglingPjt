import React, { useState, useRef } from "react";
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

const BooglingService = () => {
  const [userDB, setUserDB] = useState(new Map());
  const signInedMember = useRef("");
  const changeLoginStatus = useRef("");

  const setLoginedSession = () => {
    console.log("[MemberService] setLoginedSesstion() CALLED!!");

    changeLoginStatus.current.changeLoginMember(signInedMember);
  };
  return (
    <>
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Main />}></Route>
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
