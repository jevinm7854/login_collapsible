import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBarOpt from "./navBar/NavBarOpt";

function Home() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate();
  const id = useLocation();
  // function empM() {
  //   return navigate("/app");
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    const datass = new FormData();
    datass.append("name", name);
    datass.append("color", color);
    datass.append("number", number);

    // if (name.trim() === "") {
    //   console.error("Name cannot be empty");
    //   return;
    // }

    fetch("http://localhost:5000/add", {
      method: "POST",

      body: datass,
    })
      .then((r) => r.json())
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
    // const myTimeout = setTimeout(empM, 3500);
    setTimeout(() => {
      navigate("/app");
    }, 3500);
  };

  return (
    <>
      <NavBarOpt />
      <div className="find-div">
        <form onSubmit={handleSubmit}>
          <label className="find-label-name">
            Enter your name:
            <input
              className="find-input-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          {/* <br></br> */}
          <label className="find-label-name">
            Enter your color:
            <input
              className="find-input-name"
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
          {/* <br></br> */}
          <label className="find-label-number">
            Enter your number:
            <input
              className="find-input-name"
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </label>
          {/* <br></br> */}
          {/* <button type="button" className="butn1" onClick={empM}>
          View Data on Other Page
        </button> */}

          <input type="submit" className="find-submit" />
        </form>
      </div>
    </>
  );
}

export default Home;
