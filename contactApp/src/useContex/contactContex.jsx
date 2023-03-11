import React, { createContext, useContext, useReducer } from "react";
import { changeState } from "../reducer/changeState";


export const Contact = createContext();

const initialState = {
  isLoading: true,
  user: []
};


const useContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeState, initialState);
  console.log(state);

  return (
    <Contact.Provider value={{ ...state, dispatch }}>
      {children}
    </Contact.Provider>
  );
};

export const useContact = () => {
  return useContext(Contact);
};

export default useContactProvider;
