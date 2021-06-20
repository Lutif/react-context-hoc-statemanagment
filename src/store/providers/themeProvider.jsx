import React, { useReducer } from "react";
import { ThemeContext } from "../context";
export const ThemeProvider = ({ children }) => {
  const [color, setColor] = useReducer((state, payload) => payload, "Red");
  const value = {
    color,
    setColor
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
