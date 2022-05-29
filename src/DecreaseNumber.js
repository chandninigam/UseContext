import React, { useContext } from "react";
import { NumberContext } from "./contexts/NumberContext";

const DecreaseNumber = () => {
  const { setNum, input } = useContext(NumberContext);
  return (
    <button
      onClick={() => {
        setNum((p) => p - input);
      }}
    >
      Decrease Number
    </button>
  );
};

export default DecreaseNumber;
