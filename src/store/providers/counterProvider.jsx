import React, { useReducer } from "react";
import { CounterContext } from "../context";

export const CounterProvider = (props) => {
  const [counter, setCounter] = useReducer((state, payload) => {
    return payload ? state + payload : null;
  }, 0);

  const value = {
    counter,
    setCounter
  };

  return (
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
};
