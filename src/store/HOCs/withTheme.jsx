import React, { useContext } from "react";
import { ThemeContext } from "../context";

export const withTheme = (Component) => {
  const ThemeConsumer = (props) => {
    const context = useContext(ThemeContext);
    return <Component {...props} {...context} />;
  };
  return ThemeConsumer;
};
