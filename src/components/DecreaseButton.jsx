import React from "react";
import { withCounter } from "../store";

export const DecreaseButton = withCounter(({ setCounter, counter }) => {
  return (
    <button onClick={() => setCounter(-1)}>Decrease from {counter}</button>
  );
});
