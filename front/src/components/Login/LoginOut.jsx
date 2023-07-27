import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../navBar/NavBar";
import useCookies from "react-cookie/cjs/useCookies";

function LoginOut() {
  const [fail, setFail] = useState(false);
  const [UNExist, setUNExist] = useState(false);
  const [cookies, setCookie] = useCookies(["Rights"]);
  const id = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const datass = new FormData();
    datass.append("username", id.state.username);
    datass.append("pass", id.state.pass);

    fetch("http://localhost:5000/login", {
      method: "POST",

      body: datass,
    }).then((response) => {
      response.text().then((obj) => {
        if (obj === "Full" || obj === "Semi" || obj === "None") {
          setCookie("Rights", obj, { path: "/" });
          navigate("/welcome");
        } else if (obj === "Failure") {
          setFail(true);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else {
          setUNExist(true);
          setTimeout(() => {
            navigate("/signup");
          }, 3000);
        }
        // setData(obj);
        // for (let i = 0; i < obj.length; i++) {
        //   setData(obj[i]);
        // }
      });
      // response.json()
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="signup-main">
        {fail === true && (
          <p className="sign-mess1">Incorrect Password. Try Again</p>
        )}
        {UNExist === true && (
          <p className="sign-mess1">
            Username does not Exist. Navigating you to Sign up page
          </p>
        )}
      </div>
    </>
  );
}

export default LoginOut;
