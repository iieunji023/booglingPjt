import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./route/SignUp";
import { useState } from "react";

const BooglingService = () => {
  const [userDB, setUserDB] = useState(new Map());
  return (
    <BrowserRouter>
      <header />
      <nav />
      <Routes>
        <Route path="/user/sign_up" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default BooglingService;
