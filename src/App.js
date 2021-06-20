import "./styles.css";
import React from "react";
import { RootProvider } from "./store";
import {
  IncreaseButton,
  DecreaseButton,
  ShowCount,
  ColorInput
} from "./components";

export default function App() {
  return (
    <RootProvider>
      <div>
        <IncreaseButton />
        <DecreaseButton />
        <ShowCount />
        <ColorInput />
      </div>
    </RootProvider>
  );
}
