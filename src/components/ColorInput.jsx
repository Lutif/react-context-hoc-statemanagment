import React, { useState } from "react";
import { withTheme } from "../store";

export const ColorInput = withTheme(({ setColor }) => {
  const [tempColor, setTempColor] = useState("");

  return (
    <>
      <input
        placeholder="Enter theme color here.."
        value={tempColor}
        onChange={(event) => setTempColor(event.target.value)}
      />
      <button onClick={() => tempColor && setColor(tempColor)}> Submit </button>
    </>
  );
});
