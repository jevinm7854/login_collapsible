import React from "react";
import { useNavigate } from "react-router-dom";

function OptionPage() {
  const navigate = useNavigate();
  const handleSubmitAddData = () => {
    navigate("/home");
  };

  const handleSubmitFindData = () => {
    navigate("/search");
  };
  return (
    <div className="optionPage">
      <button className="optionPageButn" onClick={handleSubmitFindData}>
        Find Data
      </button>
      {/* <br></br> */}
      <button className="optionPageButn" onClick={handleSubmitAddData}>
        Add Data
      </button>
    </div>
  );
}

export default OptionPage;
