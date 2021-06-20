import React, { useContext } from "react";
import { CounterContext } from "../context";

export const withCounter = (Component) => {
  function CounterConsumer(props) {
    const context = useContext(CounterContext);
    Component.displayName = Component.name;
    return <Component {...props} {...context} />;
  }
  return CounterConsumer;
};
