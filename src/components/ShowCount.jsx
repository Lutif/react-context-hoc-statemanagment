import React from "react";
import { withCounter, withTheme } from "../store";
import { combineHOCs } from "../helper";

const withHocs = combineHOCs(withCounter, withTheme);

export const ShowCount = withHocs(({ counter, color }) => {
  return <p style={{ color: color }}>Current counter is {counter}</p>;
});
