import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBarOpt from "../navBar/NavBarOpt";

function Search() {
  const [name, setName] = useState("");
  const id = useLocation();
  console.log("search id top", id);
  const navigate = useNavigate();

  function empM() {
    navigate("/searchOut", { state: { name: name } });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(event.target.value);
    empM();
  };

  return (
    <>
      <NavBarOpt />
      <div className="searchDiv">
        <form onSubmit={handleSubmit}>
          <label className="searchLabel">
            Enter the name you want to search:
            <input
              className="searchInput"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br></br>

          <input type="submit" className="searchSubmit" />
        </form>
      </div>
    </>
  );
}

export default Search;
