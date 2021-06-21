import React, { useReducer } from "react";
import { ThemeContext } from "../context";

const intialTheme = {
  color: "Red",
  fontSize: 22
};
const themeReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "color":
      return {
        ...state,
        color: payload
      };
    case "fontSize":
      return {
        ...state,
        fontSize: payload
      };
    default:
      return {
        ...state
      };
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useReducer(themeReducer, intialTheme); // can consist of complex state for example, hover, secondary, primary, ... colors etc
  const value = {
    color: theme?.color,
    setColor: (value) => setTheme({ type: "color", payload: value })
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
