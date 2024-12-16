import React, { createContext, useState, useContext } from "react";

// Create Context
export const RegistrationContext = createContext();
// export const RegistrationContext = React.createContext({
//     studentsData: [], // Default to an empty array
//   });


  
// Create Provider Component
export const RegistrationProvider = ({ children }) => {
    // const [studentsData, setStudentsData] = useState([]); // Initialize as an empty array
    const [studentsData, setStudentsData] = useState([]);

    const [registrationDetails, setRegistrationDetails] = useState({
        name: "",
        email: "",
        password: "",
    });

    // Update Details Function
    const updateDetails = (key, value) => {
        setRegistrationDetails((prevDetails) => ({
            ...prevDetails,
            [key]: value,
        }));
    };

   
        
      

    return (
        <RegistrationContext.Provider 
        value={{ registrationDetails, updateDetails ,studentsData, setStudentsData}}>
            {children}
        </RegistrationContext.Provider>
    );
};
