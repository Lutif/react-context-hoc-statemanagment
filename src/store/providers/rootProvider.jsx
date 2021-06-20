import React from "react";
import { CounterProvider } from "../providers";

const providers = [CounterProvider];

export const RootProvider = ({ children }) => {
  providers.forEach((Provider) => {
    if (Array.isArray(Provider)) {
      const [Component, props] = Provider;
      children = <Component {...props}>{children}</Component>;
    } else {
      children = <Provider>{children}</Provider>;
    }
  });
  return children;
};
