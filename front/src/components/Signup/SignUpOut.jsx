import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../navBar/NavBar";
function SignUpOut() {
  const [outpF, setOutpF] = useState(false);
  const [outpS, setOutpS] = useState(false);
  const id = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const datass = new FormData();
    datass.append("username", id.state.username);
    datass.append("pass", id.state.pass);

    fetch("http://localhost:5000/signup", {
      method: "POST",
      body: datass,
    }).then((response) => {
      response.text().then((obj) => {
        if (obj === "Success") {
          setOutpS(true);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else {
          setOutpF(true);
          setTimeout(() => {
            navigate("/signup");
          }, 3000);
        }
      });
    });
  }, []);

  function resF() {
    return (
      <>
        <Navbar />
        <div className="signup-main">
          {outpS === true && <p className="sign-mess1">Sign up successful</p>}
          {outpF === true && (
            <p className="sign-mess1">
              Username already exists. Login or enter a new username
            </p>
          )}

          {/* {setTimeout(() => {
            navigate("/signup");
          }, 10000)} */}
        </div>
      </>
    );
    // } else if (outpS === true) {
    //   return (
    //     <div>
    //       <p>Sign up successful</p>
    //       {setTimeout(() => {
    //         navigate("/");
    //       }, 3000)}
    //     </div>
    //   );
    // }
  }

  return <div>{resF()}</div>;
}

export default SignUpOut;
