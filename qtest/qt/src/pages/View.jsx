import  {React, useContext }from 'react';
import { useNavigate } from 'react-router-dom';
import QuizResult from './QuizResult'; // Ensure the path to QuizResult is correct
import './view.css';
import arrow from "../assets/arrow.png";
import { RegistrationContext } from "../context/RegistrationContext"; // Import the context

const View = ({ aptitudeScore, logicalScore, verbalScore, totalScore, totalMaxMarks }) => {
  const navigate = useNavigate();
  const { registrationDetails } = useContext(RegistrationContext);


  const handleLogout = () => {
    const userConfirmed = window.confirm("Are you sure you want to log out?");
    if (userConfirmed) {
      console.log("User logged out");
      navigate('/thanky'); // Navigate to the root route
    } else {
      console.log("Logout canceled");
    }
  };
  const handleNavigateToOptions = () => {
    navigate("/options");
  };
  return (
    <div className="background bg-black vh-100 d-flex flex-column align-items-center p-3">
      {/* Logout Button */}
      <button
        className="btn btn-danger logout-button mb-3"
        onClick={handleLogout}
        style={{ alignSelf: 'flex-end' }}
      >
        LOGOUT
      </button>

      {/* Navigation Arrow */}
      <img
        src={arrow}
        alt="Go to Options"
        className="imgNavigateToOptions mb-3"
        onClick={handleNavigateToOptions}
        style={{
          cursor: 'pointer',
          width: '50px',
          height: 'auto',
        }}
      />

      {/* Scores Section */}
      <div className="view-scores bg-dark text-white text-center p-4 rounded shadow w-100" style={{ maxWidth: '500px' }}>
        <h4 className="fw-bold">{ registrationDetails.name }</h4>
        <h6 className="xyz" style={{ color: 'grey' }}>{ registrationDetails.email }</h6>

        {/* Pass props to QuizResult and hide the FINISH button */}
        <QuizResult
          aptitudeScore={aptitudeScore}
          logicalScore={logicalScore}
          verbalScore={verbalScore}
          totalScore={totalScore}
          totalQuestions={totalMaxMarks}
          showFinishButton={false} // Hide the button in View.jsx
          showList={false} // New prop to toggle List rendering
        />
      </div>
    </div>
  );
};

export default View;


// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import QuizResult from './QuizResult'; // Ensure the path to QuizResult is correct
// import './view.css';
// import arrow from "../assets/arrow.png";
// import { RegistrationContext } from "../context/RegistrationContext"; // Import the context

// const View = ({ totalScore, totalMaxMarks }) => {
//   const navigate = useNavigate();
//   const { registrationDetails } = useContext(RegistrationContext); // Assuming registrationDetails is an array of student data
  
//   // Handle logout functionality
//   const handleLogout = () => {
//     const userConfirmed = window.confirm("Are you sure you want to log out?");
//     if (userConfirmed) {
//       console.log("User logged out");
//       navigate('/thanky'); // Navigate to the root route
//     } else {
//       console.log("Logout canceled");
//     }
//   };

//   // Handle navigation to options
//   const handleNavigateToOptions = () => {
//     navigate("/options");
//   };

//   return (
//     <div className="background bg-black vh-100 d-flex flex-column align-items-center p-3">
//       {/* Logout Button */}
//       <button
//         className="btn btn-danger logout-button mb-3"
//         onClick={handleLogout}
//         style={{ alignSelf: 'flex-end' }}
//       >
//         LOGOUT
//       </button>

//       {/* Navigation Arrow */}
//       <img
//         src={arrow}
//         alt="Go to Options"
//         className="imgNavigateToOptions mb-3"
//         onClick={handleNavigateToOptions}
//         style={{
//           cursor: 'pointer',
//           width: '50px',
//           height: 'auto',
//         }}
//       />

//       {/* Scores Section */}
//       <div className="view-scores bg-dark text-white text-center p-4 rounded shadow w-100" style={{ maxWidth: '500px' }}>
//         {/* Loop through each student and display the QuizResult for each */}
//         {registrationDetails && registrationDetails.length > 0 ? (
//           registrationDetails.map((student, index) => (
//             <div key={index} className="student-score">
//               <h4 className="fw-bold">{student.name}</h4>
//               <h6 className="xyz" style={{ color: 'grey' }}>{student.email}</h6>
//               {/* Pass props to QuizResult for each student */}
//               <QuizResult
//                 aptitudeScore={student.aptitudeScore}
//                 logicalScore={student.logicalScore}
//                 verbalScore={student.verbalScore}
//                 totalScore={student.totalScore}
//                 totalQuestions={totalMaxMarks}
//                 showFinishButton={false} // Hide the button in View.jsx
//                 showList={false} // New prop to toggle List rendering
//               />
//             </div>
//           ))
//         ) : (
//           <p>No students found</p> // Show a message if no students are available
//         )}
//       </div>
//     </div>
//   );
// };

// export default View;
