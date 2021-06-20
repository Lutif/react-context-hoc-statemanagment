import React from "react";
import { withCounter, withTheme } from "../store";

export const ShowCount = withTheme(
  withCounter(({ counter, color }) => {
    return <p style={{ color: color }}>Current counter is {counter}</p>;
  })
);
