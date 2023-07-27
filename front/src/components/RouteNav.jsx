import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./search/Search";
import SearchOut from "./search/SearchOut";
import OptionPage from "./OptionPage";
import Home from "./Home";
import App from "./viewData/App";
import Navbar from "./navBar/NavBar";
import Welcome from "./Welcome";
import Edit from "./Edit/Edit";
import LoginOut from "./Login/LoginOut";
import Login from "./Login/Login";
import EditOut from "./Edit/EditOut";
import SignUp from "./Signup/SignUp";
import SignUpOut from "./Signup/SignUpOut";

function RouteNav() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Welcome />} path="/welcome"></Route>
        {/* <Route element={<OptionPage />} path="/"></Route> */}
        <Route element={<Home />} path="/home"></Route>
        <Route element={<App />} path="/app"></Route>
        <Route element={<Search />} path="/search"></Route>
        <Route element={<SearchOut />} path="/searchOut"></Route>
        <Route element={<Edit />} path="/edit"></Route>
        <Route element={<EditOut />} path="/editout"></Route>
        <Route element={<Login />} path="/"></Route>
        <Route element={<LoginOut />} path="/loginOut"></Route>
        <Route element={<SignUp />} path="/signUp"></Route>
        <Route element={<SignUpOut />} path="/signUpOut"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteNav;
