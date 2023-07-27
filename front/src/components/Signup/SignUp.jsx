import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navBar/NavBar";

function SignUp() {
  const [username, setUsername] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/signUpOut", {
      state: { username: username, pass: pass1 },
    });
  };

  function inp() {
    if (pass1.length === 0 && pass2.length === 0) {
      return <p className="sign-mess"> Enter the above fields to proceed</p>;
    } else if (pass1.length !== 0 && pass1 === pass2 && username.length !== 0) {
      return <input type="submit" className="sign-sub" value="Sign up" />;
    } else if (username.length === 0) {
      return <p className="sign-mess">Enter User Name to proceed</p>;
    } else {
      return <p className="sign-mess">Enter matching passwords to proceed</p>;
    }
  }

  return (
    <>
      <Navbar />
      <div className="signup-main">
        <p className="signup-head">Sign up </p>
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
            value={pass1}
            onChange={(e) => setPass1(e.target.value)}
          />
          <br></br>
          <input
            className="sub-inp"
            placeholder="Re-enter Password"
            type="password"
            value={pass2}
            onChange={(e) => setPass2(e.target.value)}
          />
          <br></br>
          {inp()}
        </form>
      </div>
    </>
  );
}

export default SignUp;
