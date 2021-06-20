import React from "react";
import { withCounter } from "../store";

export const ShowCount = withCounter(({ counter }) => {
  return <p>Current counter is {counter}</p>;
});
