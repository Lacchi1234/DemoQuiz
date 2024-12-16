import React from "react";
import { useNavigate } from "react-router-dom";
// import okay from "../assets/okay.png";

export default function Thankz() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 text-center"
      style={{ backgroundColor: "#141414" }} // Black background
    >
      <div
        className="d-flex flex-column flex-md-row align-items-center"
        style={{ padding: "20px" }}
      >
        {/* <img
          src={okay}
          alt="Thumbs Up"
          className="img-fluid"
          style={{
            width: "80px", // Adjust for small screens
            height: "80px",
            marginBottom: "60px", // For small screens
            marginRight: "5px",
          }}
        /> */}
        <div>
          <h1
            className="display-4"
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "white", // Yellow text
            }}
          >
            Thank You
          </h1>
          <p
            style={{
              fontSize: "1.8rem",
              color: "white", // Yellow text
              marginTop: "10px",
            }}
          >
            You have successfully completed the test!
          </p>
          <button
            className="btn"
            style={{
              backgroundColor: "#FFD700", // Yellow background
              color: "#141414", // Black text
              fontSize: "1.2rem",
              padding: "10px 20px",
              margin:" 20px",
              border: "none",
              borderRadius: "5px",
            }}
            onClick={handleGoHome}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
