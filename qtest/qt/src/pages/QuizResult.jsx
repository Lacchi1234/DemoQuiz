import React from 'react';
import { useNavigate } from 'react-router-dom';
import List from './List';

const QuizResult = ({
  aptitudeScore,
  logicalScore,
  verbalScore,
  totalScore,
  totalQuestions,
  showFinishButton = true,
  selectedOptions,
  showList = true, // New prop to toggle List rendering

}) => {
  const navigate = useNavigate();

  const handleFinish = () => {
    const isQuizCompleted = sessionStorage.getItem('quizCompleted') === 'true'; // Check if the quiz is completed
  
    if (isQuizCompleted) {
      navigate('/thankz'); // Navigate to the thank you page if the quiz is completed
    } else {
      sessionStorage.setItem('quizCompleted', 'true'); // Mark the quiz as completed
      navigate('/thankz'); // Redirect to the home page
    }
  };

  return (
    <div className="quiz-result">
      <h2>Your Score</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Section</th>
            <th>Total Marks</th>
            <th>Marks Scored</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Aptitude</td>
            <td>2</td>
            <td>{aptitudeScore}</td>
          </tr>
          <tr>
            <td>Logical Reasoning</td>
            <td>3</td>
            <td>{logicalScore}</td>
          </tr>
          <tr>
            <td>Verbal Ability</td>
            <td>4</td>
            <td>{verbalScore}</td>
          </tr>
        </tbody>
      </table>
      <h3 className="tip" style={{ color: '#fee135' }}>
        Total Marks Secured: {totalScore} / {totalQuestions}
      </h3>

     
       
        {showFinishButton && (
          <button
            onClick={handleFinish}
            className="btn btn-warning d-block mx-auto mt-4"
          >
            FINISH
          </button>
        )}


      {/* Display the List component */}
      {showList && <List selectedOptions={selectedOptions} />}
    </div>
  );
};

export default QuizResult;
