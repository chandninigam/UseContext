import React, { useContext } from "react";
import { NumberContext } from "./contexts/NumberContext";

const IncreaseNumber = () => {
  const { setNum, input } = useContext(NumberContext);
  return (
    <button
      onClick={() => {
        setNum((p) => p + input);
      }}
    >
      Increase Number
    </button>
  );
};

export default IncreaseNumber;
