import React, { useState } from "react";
import { useEffect } from "react";
import Cookies from "react-cookie/cjs/Cookies";
import { useLocation } from "react-router-dom";
import NavBarOpt from "./navBar/NavBarOpt";

function Welcome() {
  const [vis, setVis] = useState(true);
  const cookies = new Cookies();
  const id = useLocation();
  console.log(id);
  useEffect(() => {
    setTimeout(() => {
      setVis(false);
    }, 3000);
  }, []);

  return (
    <div className="welcome-div">
      {console.log("Cookies-- ", cookies.get("Rights"))}
      <NavBarOpt />
      {vis === true && (
        <p className="welcome-p3">
          Login Successful. {cookies.get("Rights")} Rights granted
        </p>
      )}

      {/* <p className="welcome-p2">Login Successful</p> */}
      <p className="welcome-p1">Welcome</p>
      <p className="welcome-p2">
        Select an option from the Navigation Bar at the top to continue
      </p>
    </div>
  );
}

export default Welcome;
