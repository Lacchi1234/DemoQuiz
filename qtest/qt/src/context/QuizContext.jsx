import React, { createContext, useReducer, useContext } from "react";

const QuizContext = createContext();

const initialState = {
  scores: { Aptitude: 0, "Logical Reasoning": 0, "Verbal Ability": 0 },
  totalScore: 0,
  answers: {}, // Stores the answers selected by the user
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT_ANSWER":
      const { questionId, section, isCorrect } = action.payload;
      const updatedScores = { ...state.scores };
      if (isCorrect) {
        updatedScores[section] += 1;
      }
      return {
        ...state,
        scores: updatedScores,
        totalScore: state.totalScore + (isCorrect ? 1 : 0),
        answers: { ...state.answers, [questionId]: isCorrect },
      };
    default:
      return state;
  }
};

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);
