import React from "react";
import { useNavigate } from "react-router-dom";
import "./options.css"; // Ensure your styles are in this file

const Options = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="containerOp background d-flex flex-column justify-content-center align-items-center min-vh-100 p-3">
      <div className="d-flex flex-column align-items-center w-100">
        <div
          className="option-bar d-flex justify-content-center align-items-center w-100 mb-5 p-3"
          onClick={() => handleNavigate("/qqq")}
        >
          <h2 className="Apt">Upload the Questions here...</h2>
        </div>
        <div
          className="option-bar d-flex justify-content-center align-items-center w-100 mb-5 p-3"
          onClick={() => handleNavigate("/view")}
        >
          <h2 className="Apt">View the Performance</h2>
        </div>
      </div>
    </div>
  );
};

export default Options;
