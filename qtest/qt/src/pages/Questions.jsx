import React, { useState, useEffect } from 'react';
import QuizData from './Quizdata'; // Assuming QuizData is properly exported
import QuizResult from './QuizResult'; // Assuming you have a component for showing results
import './Quiz.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import hour from '../assets/hour.gif';
import background from '../assets/back.png';

export default function Questions() {
  const navigate = useNavigate();
  const [showResult, setShowResult] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [attendedQuestions, setAttendedQuestions] = useState({});
  const [reviewedQuestions, setReviewedQuestions] = useState({});
  const [selectedSection, setSelectedSection] = useState('Aptitude');
  const [answers, setAnswers] = useState({});
  const [aptitudeScore, setAptitudeScore] = useState(0);
  const [logicalScore, setLogicalScore] = useState(0);
  const [verbalScore, setVerbalScore] = useState(0);

  // Timer state
  const [timeLeft, setTimeLeft] = useState(0.5 * 60); // 3 minutes in seconds

  // Filter questions based on the selected section
  const filteredQuestions = QuizData.filter((q) => q.category === selectedSection);

  // Calculate total questions across all sections
  const totalQuestions = QuizData.length;

  const currentQuestion = filteredQuestions[currentQuestionIndex];



  // const navigate = useNavigate();

  useEffect(() => {
      const quizCompleted = sessionStorage.getItem('quizCompleted');
      if (quizCompleted) {
          alert('You have already completed the quiz!');
          navigate('/Thankz'); // Redirect to the Home Page
      }
  }, [navigate]);



  // Timer countdown logic
  useEffect(() => {
    if (timeLeft <= 0) {
      setShowResult(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer
  }, [timeLeft]);

  // Format time for display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleOptionClick = (optionIndex) => {
    const updatedSelectedOptions = { ...selectedOptions, [currentQuestion.id]: optionIndex + 1 };
    setSelectedOptions(updatedSelectedOptions);

    const updatedAnswers = { ...answers, [currentQuestion.id]: optionIndex + 1 };
    setAnswers(updatedAnswers);

    const updatedAttendedQuestions = { ...attendedQuestions, [currentQuestion.id]: true };
    setAttendedQuestions(updatedAttendedQuestions);

    updateScore(updatedSelectedOptions);
  };

  const updateScore = (options) => {
    let aptitudeSectionScore = 0;
    let logicalSectionScore = 0;
    let verbalSectionScore = 0;

    Object.entries(options).forEach(([id, selectedOption]) => {
      const question = QuizData.find((q) => q.id === parseInt(id));
      if (question) {
        if (question.category === 'Aptitude' && selectedOption === question.answer) {
          aptitudeSectionScore++;
        } else if (question.category === 'Logical Reasoning' && selectedOption === question.answer) {
          logicalSectionScore++;
        } else if (question.category === 'Verbal Ability' && selectedOption === question.answer) {
          verbalSectionScore++;
        }
      }
    });

    setAptitudeScore(aptitudeSectionScore);
    setLogicalScore(logicalSectionScore);
    setVerbalScore(verbalSectionScore);

    const totalScore = aptitudeSectionScore + logicalSectionScore + verbalSectionScore;
    setScore(totalScore);
  };

  const changeQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // const markForReview = () => {
  //   const updatedReviewedQuestions = { ...reviewedQuestions, [currentQuestion.id]: true };
  //   setReviewedQuestions(updatedReviewedQuestions);
  // };

  const handleSubmit = () => {
    const confirmSubmit = window.confirm('Are you sure you want to end the test and submit?');
    if (confirmSubmit) {
      setShowResult(true);
    }
  };

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
  };

  return (
    <div className="quiz-app"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="logo-container text-center">
        <p className="heading-txt">Quiz App</p>
        <img src={logo} alt="logo" className="logoImg animate__animated animate__rotateIn" />
      </div>
      <div className="quiz-container row">
        {/* Left Panel (Sections) */}
        <div className="col-md-2">
          <div className="sections">
            <button
              className={`btn btn-outline-primary mb-2 w-100 ${selectedSection === 'Aptitude' ? 'active' : ''}`}
              onClick={() => setSelectedSection('Aptitude')}
            >
              Aptitude
            </button>
            <button
              className={`btn btn-outline-primary mb-2 w-100 ${selectedSection === 'Logical Reasoning' ? 'active' : ''}`}
              onClick={() => setSelectedSection('Logical Reasoning')}
            >
              Logical Reasoning
            </button>
            <button
              className={`btn btn-outline-primary mb-2 w-100 ${selectedSection === 'Verbal Ability' ? 'active' : ''}`}
              onClick={() => setSelectedSection('Verbal Ability')}
            >
              Verbal Ability
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-7">
          {showResult ? (
            <QuizResult
              aptitudeScore={aptitudeScore}
              logicalScore={logicalScore}
              verbalScore={verbalScore}
              totalScore={score}
              totalQuestions={totalQuestions}
              showFinishButton={true}
              selectedOptions={answers}
            />
          ) : (
            <>
              <div className="question">
                <div className={`timer mb-3 ${timeLeft <= 10 ? 'timer-red' : ''}`}>
                  Time Left: {formatTime(timeLeft)}
                  <img src={hour} alt="hour" className="hour" />
                </div><br />
                <span id="question-number">{currentQuestionIndex + 1}. </span>
                <span id="question-txt">{currentQuestion.question}</span>
                {currentQuestion.image && (
                  <img
                    src={currentQuestion.image}
                    alt="Question related"
                    className="question-image img-fluid"
                  />
                )}
              </div>
              <div className="option-container">
                {currentQuestion.options.map((option, i) => (
                  <button
                    className={`option-btn btn btn-outline-secondary mb-2 w-100 ${
                      selectedOptions[currentQuestion.id] === i + 1 ? 'checked' : ''
                    }`}
                    key={i}
                    onClick={() => handleOptionClick(i)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="navigation-buttons d-flex justify-content-between align-items-center gap-6 mt-3">
  <input
    type="button"
    value="Previous"
    className="btn btn-primary btn-md"
    onClick={previousQuestion}
  />
  {/* <input
    type="button"
    value="Mark Review"
    className="btn btn-primary btn-md"
    onClick={markForReview}
  /> */}
  <input
    type="button"
    value="Next"
    className="btn btn-primary btn-md"
    onClick={changeQuestion}
    disabled={currentQuestionIndex === filteredQuestions.length - 1}
  />
  <input
    type="button"
    value="Submit"
    className="btn btn-primary btn-md"
    onClick={handleSubmit}
  />
</div>
            </>
          )}
        </div>

        {/* Right Panel (Side Panel for Question Numbers) */}
        <div className="col-md-3" style={{ padding: '0 10px' }}>
  <h3 style={{ textAlign: 'center', marginBottom: '15px' }}>Questions</h3>
  <div className="question-numbers" style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
    {filteredQuestions.map((q, index) => (
      <div
        key={q.id}
        className={`question-number d-flex align-items-center justify-content-center mb-1 ${
          attendedQuestions[q.id] ? 'attended' : 'not-attended'
        } ${reviewedQuestions[q.id] ? 'reviewed' : ''} ${
          currentQuestionIndex === index ? 'current' : ''
        }`}
        onClick={() => handleQuestionClick(index)}
        style={{
          width: '40px',
          height: '40px',
          textAlign: 'center',
          border: '1px solid #ccc',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {index + 1}
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
}
