import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavBarOpt from "../navBar/NavBarOpt";

function EditOut() {
  const [data, setData] = useState([]);
  const id = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const datass = new FormData();
    datass.append("name", id.state.name);
    datass.append("color", id.state.color);
    datass.append("number", id.state.number);

    fetch("http://localhost:5000/edit", {
      method: "POST",

      body: datass,
    }).then((response) => {
      response.json().then((obj) => {
        console.log("^^^^^^^^^EDIT", obj);
        for (let i = 0; i < obj.length; i++) {
          setData(obj[i]);
        }
      });
      // response.json()
    });
  }, []);

  //   const handleSubmit = () => {
  //     navigate("/edit", { state: { name: id.state.name } });
  //   };

  return (
    <div>
      <NavBarOpt />
      <div className="search-out">
        <p className="search-out-head">This is the data after edit - </p>
        <p className="search-out-p">Name : {data[0]}</p>
        <p className="search-out-p">Color : {data[1]}</p>
        <p className="search-out-p">Number : {data[2]}</p>
      </div>

      {/* <div>
        <form onSubmit={handleSubmit}>
          <label>Edit data for {data.name}</label>

          <input type="submit" />
        </form>
      </div> */}
    </div>
  );
}

export default EditOut;
