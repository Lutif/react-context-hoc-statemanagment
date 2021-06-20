import React, { useContext } from "react";
import { CounterContext } from "../context";

export const withCounter = (Component) => {
  const CounterConsumer = (props) => {
    const context = useContext(CounterContext);
    return <Component {...props} {...context} />;
  };
  return CounterConsumer;
};
