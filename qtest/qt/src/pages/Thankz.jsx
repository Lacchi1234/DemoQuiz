import React from "react";
import { useNavigate } from "react-router-dom";
import thumbGif from "../assets/thumb.gif";

export default function Thankz() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 text-center"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div
        className="d-flex flex-column flex-md-row align-items-center"
        style={{ padding: "20px" }}
      >
        <img
          src={thumbGif}
          alt="Thumbs Up"
          className="img-fluid"
          style={{
            width: "80px", // Adjust for small screens
            height: "80px",
            marginBottom: "15px", // For small screens
            marginRight: "0px",
          }}
        />
        <div>
          <h1
            className="display-4"
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#343a40",
            }}
          >
            Thank You
          </h1>
          <p
            style={{
              fontSize: "1.8rem",
              color: "#6c757d",
              marginTop: "10px",
            }}
          >
            You have successfully completed the test!
          </p>
          <button
            className="btn btn-warning mt-3"
            onClick={handleGoHome}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
