import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import background from '../assets/back.png';

export default function Instructions() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isChecked, setIsChecked] = useState(false); // State to track checkbox

  const handleTakeTest = () => {
    navigate("/questions"); // Navigate to /questions
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
  };

  return (
    <div
      className="container-fluid d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${background})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 

      }}
    >
      <div className="containerI ms-4 m-lg-5 py-5 px-5"
        style={{
         marginLeft: "40px",  // Added margin-left
         marginRight: "40px"
      }} >
        <h3 className="head1 text-center fs-0 fs-md-2 fs-sm-3 fs-xl-1">Quiz Instructions</h3>

        {/* New Content */}
        <h5 className="mb-3">General Instructions:</h5>
        <ul>
          <li>
            <strong>Total Duration:</strong> The Total duration of the online test and the remaining time left for the test will be displayed on the top right corner of the screen.
          </li>
          <li>
            <strong>Countdown Timer:</strong> When the countdown timer reaches zero, the test will end automatically by itself.
          </li>
          <li>
            <strong>Question Format:</strong> For each question, choice of alternative answers will be given, out of which only one alternative is correct.
          </li>
          <li>
            <strong>Pattern of the Test:</strong>
            <ul>
              <li>
                You may choose to begin the test from any section of your choice, e.g., Arithmetic, Data Interpretation, etc., which you may view towards the right side of your screen.
              </li>
              <li>
                Each section, when selected, will direct you to a list of questions to answer in that particular section.
              </li>
              <li>
                Please Note: All questions carry equal marks (i.e., 1 mark each) and there will be no penalty for wrong answers.
              </li>
            </ul>
          </li>
        </ul>

        <h5 className="mb-3">Navigating to a Question:</h5>
        <ul>
          <li>
            You may choose to answer the questions from any section of your preference.
          </li>
          <li>
            To select a question to answer, you may do the following:
            <ul>
              <li>
                For quick navigation, you may directly click on the section of your choice and start answering the questions that follow.
              </li>
              <li>
                You may also navigate using the NEXT and PREVIOUS buttons. By clicking NEXT, you will be directed to the next question in that section or, if you have completed answering in that section, you will be directed to the next section of the test.
              </li>
              <li>
                You may click on the PREVIOUS button to re-visit the previous questions in the test.
              </li>
            </ul>
          </li>
          <li>
            Questions answered will be indicated in the color GREEN; unanswered questions will be indicated in the color RED, and unvisited questions will be indicated in the color GREY.
          </li>
          <li>
            You may change your answer for a question any number of times before the final SUBMIT. However, the last marked answer will be considered as the final answer.
          </li>
          <li>
            You may choose to click on the SUBMIT BUTTON if you have completed the test or once the duration of the test is completed. It will automatically submit and will not allow you to continue the test.
          </li>
        </ul>

        <h5 className="mb-3">Other Instructions:</h5>
        <ul>
          <li>
            Do not carry mobiles, calculators, slide rules, or any other calculating devices/gadgets.
          </li>
          <li>
            Rough papers for calculations will be provided.
          </li>
          <li>
            In case of system failure (machine/internet), please contact the test administrator immediately.
          </li>
          <li>
            Candidates are not allowed to access any unauthorized software/program/books during the test duration.
          </li>
          <li>
            Candidates involved in malpractice/misconduct will be immediately disqualified from writing the test.
          </li>
        </ul>

        <h5 className="mb-3">Declaration:</h5>
        <p>
          I, hereby declare that I have read the instructions carefully and I abide by the rules and regulations of the exam.
        </p>
        <p>Best of Luck!!!</p>

        {/* Add Checkbox and Take Test button */}
        <div className="textI mt-4">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreeCheckbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label fs-6" htmlFor="agreeCheckbox">
              I have read and agree to the instructions.
            </label>
          </div>
          <button
            className="btn btn-primary mt-3 mb-5"
            onClick={handleTakeTest}
            disabled={!isChecked} // Disable button if checkbox is not checked
          >
            Take Test
          </button>
        </div>
      </div>
    </div>
  );
}
