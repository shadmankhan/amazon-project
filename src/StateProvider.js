import React, { createContext, useContext, useReducer } from "react";

// create the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data Layer by using Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
