import "./styles.css";
import React from "react";
import { RootProvider } from "./store";
import { IncreaseButton, DecreaseButton, ShowCount } from "./components";

export default function App() {
  return (
    <RootProvider>
      <div>
        <IncreaseButton />
        <DecreaseButton />
        <ShowCount />
      </div>
    </RootProvider>
  );
}
