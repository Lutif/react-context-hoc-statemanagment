import React from "react";
import { withCounter } from "../store";

export const IncreaseButton = withCounter(({ setCounter, counter }) => {
  return <button onClick={() => setCounter(1)}>Increase from {counter}</button>;
});
