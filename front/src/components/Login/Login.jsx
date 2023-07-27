import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../navBar/NavBar";
function Login() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const id = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/loginOut", {
      state: { username: username, pass: pass },
    });
  };

  return (
    <>
      <Navbar />
      <div className="signup-main">
        <p className="signup-head">Login </p>
        {/* <p>{id.state.name}</p> */}
        <form onSubmit={handleSubmit}>
          <input
            autoFocus="on"
            className="sub-inp"
            placeholder="UserName"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <input
            className="sub-inp"
            placeholder="Password"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <br></br>
          <input type="submit" value="Login" className="sign-sub" />
        </form>
      </div>
    </>
  );
}

export default Login;
