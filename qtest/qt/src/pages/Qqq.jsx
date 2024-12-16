import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./qqq.css";
import arrow from "../assets/arrow.png";

const Qqq = () => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [section, setSection] = useState(""); // State for selected section
  const [newSection, setNewSection] = useState(""); // State for new section input
  const [sections, setSections] = useState(["General", "Math", "Science"]); // Predefined sections

  const navigate = useNavigate();

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);

    // Reset correctAnswer if it no longer matches any option
    if (!updatedOptions.includes(correctAnswer)) {
      setCorrectAnswer("");
    }
  };

  const handleAddQuestion = () => {
    if (!question || options.some((opt) => !opt) || !correctAnswer || !section) {
      toast.error("Please fill out all fields before adding the question.");
      return;
    }

    const newQuestion = {
      question,
      options,
      correctAnswer,
      section, // Include section in the question object
    };

    setQuestions([...questions, newQuestion]);
    setQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer("");
    setSection(""); // Reset section after adding the question
    setNewSection(""); // Reset new section input after adding the question

    toast.success("Question has been added!");
  };

  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure you want to logout?");
    if (isConfirmed) {
      navigate("/thanky");
    }
  };

  const handleNavigateToOptions = () => {
    navigate("/options");
  };

  const handleAddNewSection = () => {
    if (newSection && !sections.includes(newSection)) {
      setSections([...sections, newSection]);
      setSection(newSection); // Select the new section
      setNewSection(""); // Clear the input field
    }
  };

  return (
    <div className="fullQqq mb-0">
      <div className="containerQqq">
        <img
          src={arrow}
          alt="Go to Options"
          className="imgNavigateToOptions"
          onClick={handleNavigateToOptions}
        />

        <h2 className="textWhiteQqqmain mb-4">Add Questions</h2>
        <div className="formGroupQqq">
          <label className="textWhiteQqq">Question:</label>
          <textarea
            className="formControlQqq mb-3 textWhiteQqq placeholderWhiteQqq"
            rows="2"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question here"
          />

          <label className="textWhiteQqq">Options:</label>
          {options.map((opt, index) => (
            <textarea
              key={index}
              className="formControlQqq mb-2 textWhiteQqq placeholderWhiteQqq"
              rows="1"
              value={opt}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              placeholder={`Option ${index + 1}`}
            />
          ))}
        </div>
        <div className="formGroupQqq">
          <label className="textWhiteQqq">Correct Answer:</label>
          <select
            className="form-select mb-3 custom-dropdown"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
          >
            <option value="" disabled>
              Select the correct answer
            </option>
            {options.map((opt, index) => (
              <option key={index} value={opt} disabled={!opt}>
                {opt || `Option ${index + 1} (Empty)`}
              </option>
            ))}
          </select>
        </div>

        {/* Section Dropdown */}
        <div className="formGroupQqq">
          <label className="textWhiteQqq">Section:</label>
          <select
            className="form-select mb-3 custom-dropdown"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          >
            <option value="" disabled>
              Select a section
            </option>
            {sections.map((sec, index) => (
              <option key={index} value={sec}>
                {sec}
              </option>
            ))}
            <option value="add-new">Add New Section...</option>
          </select>
          {section === "add-new" && (
            <div>
              <input
                type="text"
                className="formControlQqq mb-3 textWhiteQqq"
                value={newSection}
                onChange={(e) => setNewSection(e.target.value)}
                placeholder="Type new section name"
              />
              <button
                className="btn btn-primary"
                onClick={handleAddNewSection}
              >
                Add Section
              </button>
            </div>
          )}
        </div>

        <button
          className="btnSuccessQqq w-10 mb-4"
          onClick={handleAddQuestion}
        >
          Add
        </button>

        <button
          className="btn btn-danger logout-button mb-3"
          onClick={handleLogout}
          style={{ alignSelf: "flex-end" }}
        >
          LOGOUT
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Qqq;
