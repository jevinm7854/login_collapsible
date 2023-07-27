import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavBarOpt from "../navBar/NavBarOpt";

function Edit() {
  //   const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [number, setNumber] = useState("");
  const id = useLocation();
  const navigate = useNavigate();

  // function empM() {
  //   return navigate("/app");
  // }

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (name.trim() === "") {
    //   console.error("Name cannot be empty");
    //   return;
    // }

    // fetch("http://localhost:5000/add", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: id.state.name,
    //     color: color,
    //     number: number,
    //   }),
    // })
    //   .then((r) => r.json())
    //   .then((response) => console.log(response))
    //   .catch((error) => console.error(error));
    // // const myTimeout = setTimeout(empM, 3500);
    // setTimeout(() => {
    //   navigate("/editOut");
    // }, 3500);
    navigate("/editOut", {
      state: { name: id.state.name, color: color, number: number },
    });
  };

  return (
    <>
      <NavBarOpt />
      <div className="find-div">
        <p className="find-label-name">
          You are editting data for Name : {id.state.name}
        </p>
        <form onSubmit={handleSubmit}>
          {/* <label className="find-label-name">
          Enter your name:
          <input
            className="find-input-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label> */}
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
          <label className="find-label-name">
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

          <input type="submit" className="find-submit-edit" />
        </form>
      </div>
    </>
  );
}

export default Edit;
