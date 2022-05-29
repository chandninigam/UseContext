import React, { useContext } from "react";
import { NumberContext } from "./contexts/NumberContext";

const InputComponent = () => {
  const { setInput } = useContext(NumberContext);
  return (
    <input
      onChange={(e) => {
        setInput(Number(e.target.value));
      }}
      placeholder="Enter Number"
      type="number"
    />
  );
};

export default InputComponent;
