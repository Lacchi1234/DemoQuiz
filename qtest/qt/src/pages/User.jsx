import React, { useState, useContext } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import "./user.css";
import { Link } from "react-router-dom";
import background from "../assets/back.png";
import register from "../assets/register.gif";
import { useNavigate } from "react-router-dom";
import { RegistrationContext } from "../context/RegistrationContext"; // Import the context
import {Row,Col,Card} from 'react-bootstrap';

export default function User() {
  const navigate = useNavigate();
  
  // Access global context
  const {updateDetails } = useContext(RegistrationContext);

  // State for form fields and error messages
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    password: "", 
    contactNo: "",
    registrationDate: "",
    source: "",
    collegeDetails: "",
    qualifications: "",
    stream: "",
    yearOfPassing: "",
    jobApplied: "",
    payment: "",
    referralId: "", 

  });

  const [errors, setErrors] = useState({});

  // Handle change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Update global context
    if (["name", "email", "password"].includes(name)) {
      updateDetails(name, value);
    }
  };

  // Validate form fields
  const validateForm = () => {
    let validationErrors = {};
    let isValid = true;

    if (formData.source === "Referral" && !formData.referralId.trim()) {
      validationErrors.referralId = "Referral ID is required";
      isValid = false;
    }

    // Check if all fields are filled
    for (const field in formData) {
      if (
        !formData[field].trim() &&
        field !== "registrationDate" &&
        field !== "yearOfPassing"
      ) {
        validationErrors[field] = `${field === "email" ? "Email field is empty" : "This field is required"}`;
        isValid = false;
      }
    }

    // Email validation (simple format check)
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Invalid email address";
      isValid = false;
    }

    // Password validation (minimum 6 characters)
    if (formData.password && formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    // Contact number validation (should be numeric and 10 digits)
    if (formData.contactNo && !/^\d{10}$/.test(formData.contactNo)) {
      validationErrors.contactNo = "Invalid contact number (must be 10 digits)";
      isValid = false;
    }

    // Payment validation (should not be empty)
    if (!formData.payment) {
      validationErrors.payment = "Payment information is required";
      isValid = false;
    }

    setErrors(validationErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      updateDetails("name", formData.name);
      updateDetails("email", formData.email);
      updateDetails("password", formData.password);
      // Show SweetAlert confirmation
      Swal.fire({
        title: "Registration Successful!",
        text: "You have successfully registered.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/login", { state: {email: formData.email, password: formData.password}}); // Redirect to login page after alert is closed
      });
    }
  };

  return (
    <div className="xyz"
    // style={{ backgroundImage: `url(${background})` }}
    >
    <div
      className="user-form-container vw-100"
      style={{ backgroundImage: `url(${background})` }}
    >
      
      <div className="logo-container">
        <img
          // src={register}
          // alt="register"
          // className="registerImg animate__animated animate__rotateIn"
        />
        <h1 className="head2">Registration Form</h1>
      </div>
      <Card style={{ backgroundColor: 'transparent', border: 'none', }}>

      <form onSubmit={handleSubmit}>
      <Row>
      <Col>
        <div>
          <label className="fw-bold">Candidate Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div>
          <label className="fw-bold">Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>

        <div>
          <label className="fw-bold">Email ID:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
            <label className="fw-bold">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

        <div>
          <label className="fw-bold">Contact No:</label>
          <input
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />
          {errors.contactNo && <span className="error">{errors.contactNo}</span>}
        </div>

        <div>
          <label className="fw-bold">Registration Date:</label>
          <input
            type="text"
            name="registrationDate"
            value={
              formData.registrationDate ||
              new Date().toISOString().split("T")[0]
            }
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="fw-bold">Stream:</label>
          <select
            name="stream"
            value={formData.stream}
            onChange={handleChange}
            required
          >
            <option value="">Select Stream</option>
            <option value="CSE">CSE</option>
            <option value="ISE">ISE</option>
            <option value="AIML/DS">AIML/DS</option>
          </select>
          {errors.stream && <span className="error">{errors.stream}</span>}
        </div>


        </Col>

        <Col>
        <div>
  <label className="fw-bold">Source:</label>
  <select
    name="source"
    value={formData.source}
    onChange={handleChange}
    required
  >
    <option value="">Select Source</option>
    <option value="College">College</option>
    <option value="Referral">Referral</option>
  </select>
  {errors.source && <span className="error">{errors.source}</span>}
</div>

{/* Conditional rendering for Referral ID */}
{formData.source === "Referral" && (
  <div>
    <label className="fw-bold">Referral ID:</label>
    <input
      type="text"
      name="referralId"
      value={formData.referralId || ""} // Default value if not set
      onChange={handleChange}
      required
    />
    {errors.referralId && <span className="error">{errors.referralId}</span>}
  </div>
)}

        <div>
          <label className="fw-bold">College Name:</label>
          <input
            type="text"
            name="collegeDetails"
            value={formData.collegeDetails}
            onChange={handleChange}
            required
          />
          {errors.collegeDetails && (
            <span className="error">{errors.collegeDetails}</span>
          )}
        </div>

        <div>
          <label className="fw-bold">Qualifications:</label>
          <select
            name="qualifications"
            value={formData.qualifications}
            onChange={handleChange}
            required
          >
            <option value="">Select Qualification</option>
            <option value="BE">BE</option>
            <option value="BTech">BTech</option>
          </select>
          {errors.qualifications && (
            <span className="error">{errors.qualifications}</span>
          )}
        </div>

        

        <div>
          <label className="fw-bold">Year of Passing:</label>
          <select
            name="yearOfPassing"
            value={formData.yearOfPassing}
            onChange={handleChange}
            required
          >
            {[...Array(21)].map((_, index) => {
              const year = 2025 - index;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label className="fw-bold">Job Applied For:</label>
          <select
            name="jobApplied"
            value={formData.jobApplied}
            onChange={handleChange}
            required
          >
            <option value="">Select Job Role</option>
            <option value="FrontEnd">FrontEnd</option>
            <option value="Backend">Backend</option>
          </select>
          {errors.jobApplied && (
            <span className="error">{errors.jobApplied}</span>
          )}
        </div>

        <div>
          <label className="fw-bold">Payment:</label>
          <select
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            required
          >
            <option value="">Select Payment Mode</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="UPI">UPI</option>
          </select>
          {errors.payment && <span className="error">{errors.payment}</span>}
        </div>

        <div className="text-center">
          <button type="submit">Submit</button>
          <br />
          <div className="login-link fs-5">
            <p>
            Already registered? <Link to="/login"> Login here</Link>
            </p>
          </div>
        </div>
        </Col>
        </Row>
      </form>
      </Card>
    </div>
    </div>
  );
}
