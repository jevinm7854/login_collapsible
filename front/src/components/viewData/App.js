import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Collapsible from "react-collapsible";
import { useLocation } from "react-router-dom";
import NavBarOpt from "../navBar/NavBarOpt";

function App() {
  const [data, setData] = useState([]);
  let id = useLocation();
  console.log("app top", id);
  useEffect(() => {
    fetch("http://localhost:5000")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {console.log("in app", id)}
      <NavBarOpt />
      {data.map((item) => (
        <div className="collap">
          <Collapsible trigger={item[0]}>
            <div key={item[0]}>
              <p>Color: {item[1]}</p>
              <p>Number: {item[2]}</p>
            </div>
          </Collapsible>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}

export default App;
