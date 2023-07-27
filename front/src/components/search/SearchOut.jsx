import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavBarOpt from "../navBar/NavBarOpt";

function SearchOut() {
  const [data, setData] = useState([]);
  const id = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const datass = new FormData();
    datass.append("name", id.state.name);

    fetch("http://localhost:5000/api", {
      method: "POST",
      body: datass,
    }).then((response) => {
      response.json().then((obj) => {
        console.log(obj);
        // setData(obj)

        for (let i = 0; i < obj.length; i++) {
          console.log("djsdsajdhsdjhsad", obj[i]);
          setData(obj[i]);
        }
      });
      // response.json()
    });

    // setTimeout(() => {
    //   fetch("http://localhost:5000/api")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setData(data);
    //     })
    //     .catch((error) => console.error(error));
    // }, 200);
  }, []);

  const handleSubmit = () => {
    navigate("/edit", { state: { name: id.state.name } });
  };

  console.log("**********545*", data[1]);
  return (
    <>
      <NavBarOpt />
      {/* {data.length > 0 && data.map((item) => */}
      <>
        <div className="search-out">
          <p className="search-out-head">The following has been found - </p>
          <p className="search-out-p">Name : {data[0]}</p>
          <p className="search-out-p">Color : {data[1]}</p>
          <p className="search-out-p">Number : {data[2]}</p>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="search-out">
            <label className="search-out-p">Edit data for {data[0]}</label>

            <input type="submit" />
          </form>
        </div>
      </>
      {/* )} */}
    </>
  );
}

export default SearchOut;
