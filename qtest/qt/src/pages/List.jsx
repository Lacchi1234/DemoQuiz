import React from 'react';
import QuizData from './Quizdata';
import './list.css';

const List = ({ selectedOptions = {} }) => {
  // Initialize questionsContent as an empty array
  const questionsContent = [];

  // Iterate over QuizData to build the content for each question
  QuizData.forEach((question, index) => {
    const options = [];

    // For each option in the question, create a list item
    question.options.forEach((option, i) => {
      options.push(
        <li
          key={i}
          className={`option-item ${
            question.answer === i + 1 ? 'correct-answer' : ''
          } ${
            selectedOptions[question.id] === i + 1 &&
            selectedOptions[question.id] !== question.answer
              ? 'user-answer'
              : ''
          }`}
        >
          {option}
        </li>
      );
    });

    // Create a question card and push it to the questionsContent array
    questionsContent.push(
      <div key={question.id} className="question-card">
        <h4 className="question-title">
          {index + 1}. {question.question}
        </h4>
        {question.image && (
          <img
            src={question.image}
            alt="Question illustration"
            className="question-image"
          />
        )}
        <ul className="options-list">{options}</ul>
        <p className="correct-answer">
          <strong>Correct Answer:</strong> {question.options[question.answer - 1]}
        </p>
        <p className="user-answer">
          <strong>My Answer:</strong>{' '}
          {selectedOptions[question.id]
            ? question.options[selectedOptions[question.id] - 1]
            : 'Not Answered'}
        </p>
      </div>
    );
  });

  // Return the list of questions to render
  return (
    <div className="questions-list-container">
      <h1 className="title">LIST OF QUESTIONS</h1>
      <div className="questions-wrapper">{questionsContent}</div>
    </div>
  );
};

export default List;
