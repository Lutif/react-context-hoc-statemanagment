import React, { useState } from "react";
import { CounterContext } from "../context";

export const CounterProvider = (props) => {
  const [counter, setCounter] = useState(0);

  const value = {
    counter,
    setCounter: (value) => setCounter((current) => current + value)
  };

  return (
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
};
